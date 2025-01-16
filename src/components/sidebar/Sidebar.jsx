import { AlignJustify, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Menu } from "./Menu";

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false); // Управление состоянием сайдбара
  const sidebarRef = useRef(null); // Ссылка на сайдбар

  const toggleSidebar = () => setIsCollapsed((prev) => !prev);

  // Обработчик кликов вне сайдбара
  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsCollapsed(false); // Закрываем меню
    }
  };

  // Добавляем/удаляем обработчик глобального события клика
  useEffect(() => {
    if (isCollapsed) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isCollapsed]);

  return (
    <div className="relative h-full w-full bg-transparent">
      <aside
        ref={sidebarRef} // Привязываем ссылку к сайдбару
        className={`absolute w-full p-5 flex flex-col gap-5 transition-transform ${
          isCollapsed ? "bg-FooterColor3 text-Beige" : "bg-transparent"
        }`}
      >
        {/* Кнопка открытия/закрытия */}
        <button
          className={`absolute flex items-center justify-center bg-Beige border-solid border-2 rounded-lg w-10 h-10 ${
            isCollapsed
              ? "text-Beige bg-FooterColor3 border-Beige"
              : "text-Beige bg-FooterColor3 border-Beige"
          }`}
          onClick={(e) => {
            e.stopPropagation(); // Останавливаем всплытие клика
            toggleSidebar();
          }}
        >
          {isCollapsed ? <X /> : <AlignJustify />}
        </button>
        {/* Содержимое меню */}
        {isCollapsed && <Menu />}
      </aside>
    </div>
  );
}
