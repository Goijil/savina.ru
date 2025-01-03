import { AlignJustify, X } from "lucide-react";
import { useState } from "react";
import { Menu } from "./Menu";

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => setIsCollapsed((prev) => !prev);

  const closeSidebar = () => setIsCollapsed(false);

  const handleClick = (event) => event.stopPropagation(); // Останавливаем всплытие, чтобы меню не закрывалось при клике внутри него

  return (
    <div
      onClick={closeSidebar} // Закрывает меню при клике за пределами
      className="absolute h-full w-full bg-transparent"
    >
      <aside
        onClick={handleClick} // Не дает закрыть меню при клике внутри
        className={`absolute w-full p-5 flex flex-col gap-5 ${
          isCollapsed ? "bg-FooterColor3 text-Beige" : "bg-transparent"
        }`}
      >
        <button
          className={`absolute flex items-center justify-center bg-Beige border-solid border-2 rounded-lg w-10 h-10 ${
            isCollapsed
              ? "text-Beige bg-FooterColor3 border-Beige"
              : "text-Beige bg-FooterColor3 border-Beige"
          }`}
          onClick={(e) => {
            e.stopPropagation(); // Останавливаем всплытие клика, чтобы меню не закрылось сразу
            toggleSidebar();
          }}
        >
          {isCollapsed ? <X /> : <AlignJustify />}
        </button>
        {isCollapsed && <Menu />}
      </aside>
    </div>
  );
}
