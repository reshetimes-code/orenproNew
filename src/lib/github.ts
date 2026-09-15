const GITHUB_API = "https://api.github.com";

function env() {
  const token = process.env.GITHUB_TOKEN;
  const repo = process.env.GITHUB_REPO;
  const branch = process.env.GITHUB_BRANCH || "master";
  if (!token || !repo) {
    throw new Error("GITHUB_TOKEN / GITHUB_REPO not configured");
  }
  return { token, repo, branch };
}

async function gh(path: string, init?: RequestInit) {
  const { token } = env();
  const res = await fetch(`${GITHUB_API}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      "Content-Type": "application/json",
      ...(init?.headers || {}),
    },
    cache: "no-store",
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`GitHub API ${path} failed: ${res.status} ${body}`);
  }
  return res.json();
}

export async function getFileContent(path: string): Promise<string> {
  const { repo, branch } = env();
  const data = await gh(`/repos/${repo}/contents/${path}?ref=${branch}`);
  return Buffer.from(data.content, "base64").toString("utf-8");
}

export type FileChange =
  | { path: string; content: string; encoding: "utf-8" }
  | { path: string; content: string; encoding: "base64" }
  | { path: string; delete: true };

export async function commitFiles(changes: FileChange[], message: string): Promise<string> {
  const { repo, branch } = env();

  const ref = await gh(`/repos/${repo}/git/ref/heads/${branch}`);
  const baseCommitSha = ref.object.sha;

  const baseCommit = await gh(`/repos/${repo}/git/commits/${baseCommitSha}`);
  const baseTreeSha = baseCommit.tree.sha;

  const treeEntries = await Promise.all(
    changes.map(async (change) => {
      if ("delete" in change) {
        return { path: change.path, mode: "100644", type: "blob", sha: null };
      }
      const blob = await gh(`/repos/${repo}/git/blobs`, {
        method: "POST",
        body: JSON.stringify({ content: change.content, encoding: change.encoding }),
      });
      return { path: change.path, mode: "100644", type: "blob", sha: blob.sha };
    })
  );

  const newTree = await gh(`/repos/${repo}/git/trees`, {
    method: "POST",
    body: JSON.stringify({ base_tree: baseTreeSha, tree: treeEntries }),
  });

  const newCommit = await gh(`/repos/${repo}/git/commits`, {
    method: "POST",
    body: JSON.stringify({ message, tree: newTree.sha, parents: [baseCommitSha] }),
  });

  await gh(`/repos/${repo}/git/refs/heads/${branch}`, {
    method: "PATCH",
    body: JSON.stringify({ sha: newCommit.sha }),
  });

  return newCommit.sha;
}
