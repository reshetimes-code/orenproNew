export default function RibbonBadge({ label, color = "#e63946" }: { label: string; color?: string }) {
  return (
    <div className="absolute -right-10 top-4 z-10 w-40 rotate-45 overflow-hidden">
      <span
        className="block py-1 text-center text-[11px] font-bold uppercase text-white shadow-md"
        style={{ backgroundColor: color }}
      >
        {label}
      </span>
    </div>
  );
}
