export function NavBar() {
  return (
    <>
      <div className="2xl:text-5xl xl:text-4xl lg:text-3xl md:text-3xl sm:text-2xl text-2xl border-b-2 border-LightGreen text-LightGreen font-Sexsmith grid grid-cols-4 ">
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
          Виды услуг
        </a>
        <a
          href="#4"
          className="hover:text-Beige duration-500 text-center align-middle p-6"
        >
          Для кого
        </a>
      </div>
    </>
  );
}
