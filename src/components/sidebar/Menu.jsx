import { MENU } from "./menu.data";
import { MenuItem } from "./MenuItem";

export function Menu() {
  return (
    <div className="bg-FooterColor3 text-3xl text-Beige font-Sexsmith flex flex-col items-center gap-5">
      {MENU.map((item) => (
        <MenuItem item={item} key={item.link} />
      ))}
    </div>
  );
}
