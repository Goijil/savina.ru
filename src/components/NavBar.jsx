import { Sidebar } from "./sidebar/Sidebar";

export function NavBar() {
  return (
    <>
      <div className="max-lg:hidden 2xl:text-5xl xl:text-4xl lg:text-3xl md:text-3xl sm:text-2xl text-xl border-b-2 border-LightGreen text-LightGreen font-Sexsmith grid grid-cols-5 ">
        <a
          href="#1"
          className="duration-500 hover:text-Beige text-center align-middle p-6"
        >
          Обо мне
        </a>
        <a
          href="#2"
          className="hover:text-Beige duration-500 text-center align-middle p-6"
        >
          О методе
        </a>
        <a
          href="#3"
          className="hover:text-Beige duration-500 text-center align-middle p-6"
        >
          Для кого
        </a>
        <a
          href="#4"
          className="hover:text-Beige duration-500 text-center align-middle p-6"
        >
          Виды помощи
        </a>

        <a
          href="#5"
          className="hover:text-Beige duration-500 text-center align-middle p-6"
        >
          Контакты
        </a>
      </div>
      <div className="lg:hidden">
        <Sidebar />
      </div>
    </>
  );
}
