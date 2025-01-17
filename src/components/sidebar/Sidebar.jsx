import { AlignJustify, X } from "lucide-react";
import { Menu } from "./Menu";
import { useOutside } from "../../hooks/useOutside";

export function Sidebar() {
  const { ref, isCollapsed, toggleSidebar } = useOutside();
  const mouseEvent = (e) => {
    e.stopPropagation(); // Останавливаем всплытие клика
    toggleSidebar();
  };
  return (
    <div className="absolute w-full">
      <aside
        ref={ref} // Привязываем ссылку к сайдбару
        className="flex flex-col gap-5 transition-transform bg-FooterColor3"
      >
        {/* Кнопка открытия/закрытия */}
        <button
          className="mt-5 ml-5 absolute flex items-center justify-center border-solid border-2 rounded-lg w-10 h-10 text-Beige bg-FooterColor3 border-Beige"
          onClick={mouseEvent}
        >
          {isCollapsed ? <X /> : <AlignJustify />}
        </button>
        {isCollapsed && <Menu />}
      </aside>
    </div>
  );
}
