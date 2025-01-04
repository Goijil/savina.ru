export function SvgItem({ item }) {
  return (
    <a href={item.href} className="w-14" rel="noreferrer noopener">
      <svg viewBox={item.viewBox}>
        <path d={item.path} />
      </svg>
    </a>
  );
}
