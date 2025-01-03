export function MenuItem({ item }) {
  return (
    <a href={item.link} rel="norererrer noopener">
      <p>{item.name}</p>
    </a>
  );
}
