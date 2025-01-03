import { Svg } from "./Svg";

export function Footer() {
  return (
    <>
      <div
        id="5"
        className="w-full bg-FooterColor3 p-16 border-t-2 border-t-Beige flex justify-evenly gap-20"
      >
        <div className="flex flex-col items-center">
          <iframe
            className="2xl:h-[320px] 2xl:w-[320px] xl:h-[288px] xl:w-[288px] lg:h-[256px] lg:w-[256px] md:h-[224px] md:w-[224px] sm:h-[192px] sm:w-[192px] h-[160px] w-[160px] rounded-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2246.053725070917!2d37.52685619999998!3d55.74019549999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54be44ad610f1%3A0x74fefdbb14217164!2z0JrRg9GC0YPQt9C-0LLRgdC60LjQuSDQv9GA0L7RgdC_LiwgMzYg0YHRgtGA0L7QtdC90LjQtSAzLCAxMNC5INC_0L7QtNGK0LXQt9C0LCA00Lkg0Y3RgtCw0LYsINCc0L7RgdC60LLQsCwgMTIxMTcw!5e0!3m2!1sru!2sru!4v1735918753765!5m2!1sru!2sru"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <h1 className="text-center align-bottom text-Beige 2xl:text-xl xl:text-lg lg:text-base md:text-sm sm:text-xs text-xs  2xl:w-[320px] xl:w-[288px] lg:w-[256px] md:w-[224px] sm:w-[192px] w-[160px]">
            Адрес: Кутузовский проспект, д. 36, стр. 3
          </h1>
        </div>

        <div className="flex flex-col items-center justify-center gap-10 flex-wrap">
          <a href="https://t.me/SAVINA_PSY" className="w-12 ">
            <Svg id="telegram" />
          </a>

          <a href="https://wa.me/qr/7RKALZEMIBODA1" className="w-12">
            <Svg id="whatsapp" />
          </a>

          <a href="mailto:savina.psy@gmail.com" className="w-12">
            <Svg id="envelope" />
          </a>
        </div>
      </div>
    </>
  );
}
