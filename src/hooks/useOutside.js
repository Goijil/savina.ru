import { useEffect, useRef } from "react";

export const useOutside = (isOpen, setIsOpen) => {
  const ref = useRef(null); // Ссылка на элемент

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false); // Закрываем меню
        console.log("handleClickOutside");
      }
    };

    if (isOpen) {
      // Если сайдбар открыт, добавляем обработчик события
      document.addEventListener("mousedown", handleClickOutside);
      console.log("isOpen");
    }

    return () => {
      // Удаляем обработчик при размонтировании или изменении isOpen
      document.removeEventListener("mousedown", handleClickOutside);
      console.log("removeEventListener");
    };
  }, [isOpen, setIsOpen]); // Следим за состоянием isOpen

  return { ref };
};
