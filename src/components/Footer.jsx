import { Svg } from "./Svg";

export function Footer() {
  return (
    <>
      <div className="w-full bg-FooterColor3 p-16 border-t-2 border-t-Beige flex flex-col gap-20">
        <div className="flex justify-around">
          <div className="">
            <iframe
              className="2xl:h-[160px] 2xl:w-[320px] xl:h-[144px] xl:w-[288px] lg:h-[128px] lg:w-[256px] md:h-[112px] md:w-[224px] sm:h-[96px] sm:w-[192px] h-[80px] w-[160px]"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d17991.928956168347!2d37.807718400000006!3d55.689142149999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1734460672391!5m2!1sru!2sru"
            ></iframe>
            <h1 className="text-center align-bottom text-Beige 2xl:text-xl xl:text-lg lg:text-base md:text-sm sm:text-xs text-xs">
              пр-т Мира, 119, Москва, 129223
            </h1>
          </div>

          <div className="flex justify-center">
            <iframe
              className="2xl:h-[160px] 2xl:w-[320px] xl:h-[144px] xl:w-[288px] lg:h-[128px] lg:w-[256px] md:h-[112px] md:w-[224px] sm:h-[96px] sm:w-[192px] h-[80px] w-[160px]"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d17991.928956168347!2d37.807718400000006!3d55.689142149999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1734460672391!5m2!1sru!2sru"
            ></iframe>
          </div>
        </div>

        <div className="flex justify-center gap-10">
          <a
            href="#"
            className="2xl:w-[48px] 2xl:h-[48px] xl:w-[40px] xl:h-[40px] lg:w-[32px] lg:h-[32px] md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] w-[20px] h-[20px]"
          >
            <Svg id="envelope" />
          </a>
          <a
            href="#"
            className="2xl:w-[48px] 2xl:h-[48px] xl:w-[40px] xl:h-[40px] lg:w-[32px] lg:h-[32px] md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] w-[20px] h-[20px]"
          >
            <Svg id="facebook" />
          </a>
          <a
            href="#"
            className="2xl:w-[48px] 2xl:h-[48px] xl:w-[40px] xl:h-[40px] lg:w-[32px] lg:h-[32px] md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] w-[20px] h-[20px]"
          >
            <Svg id="instagram" />
          </a>
          <a
            href="#"
            className="2xl:w-[48px] 2xl:h-[48px] xl:w-[40px] xl:h-[40px] lg:w-[32px] lg:h-[32px] md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] w-[20px] h-[20px]"
          >
            <Svg id="telegram" />
          </a>
          <a
            href="#"
            className="2xl:w-[48px] 2xl:h-[48px] xl:w-[40px] xl:h-[40px] lg:w-[32px] lg:h-[32px] md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] w-[20px] h-[20px]"
          >
            <Svg id="twitter" />
          </a>
          <a
            href="#"
            className="2xl:w-[48px] 2xl:h-[48px] xl:w-[40px] xl:h-[40px] lg:w-[32px] lg:h-[32px] md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] w-[20px] h-[20px]"
          >
            <Svg id="whatsapp" />
          </a>
        </div>
      </div>
    </>
  );
}
