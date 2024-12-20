import { Block_2 } from "./Block_2";

export function Block_1() {
  return (
    <>
      <div className="flex flex-col 2xl:gap-40 xl:gap-36 lg:gap-32 md:gap-28 sm:gap-24 gap-20">
        <h1 className=" text-white text-center font-Czizh absolute w-full  2xl:text-9xl 2xl:mt-[-6rem] xl:text-8xl xl:mt-[-4rem] lg:text-8xl lg:mt-[-4rem] md:text-7xl md:mt-[-3rem] sm:text-6xl sm:mt-[-2.5rem] text-5xl mt-[-2rem] ">
          Психоаналитика
        </h1>

        <div className="w-full absolute flex justify-center 2xl:gap-96 xl:gap-80 lg:gap-72 md:gap-64 sm:gap-52 gap-40">
          <div className="2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-sm text-sm  2xl:mt-24 xl:mt-20 lg:mt-16 md:mt-14 sm:mt-12 mt-10  min-w-max  text-white font-Cruinn">
            <h1>Ассоциированный член Московской</h1>
            <h1>Психоаналитической Ассоциации</h1>
          </div>

          <div className="2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-sm text-sm  2xl:mt-80 xl:mt-72 lg:mt-64 md:mt-56 sm:mt-48 mt-40 text-white font-Cruinn">
            <h1>Психоаналитический терапевт</h1>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div
            className="2xl:w-[500px] 2xl:h-[625px] xl:w-[450px] xl:h-[562px] lg:w-[400px] lg:h-[500px] md:w-[350px] md:h-[438px] sm:w-[300px] sm:h-[376px] w-[250px] h-[314px] flex flex-col justify-end p-2"
            style={{
              backgroundImage: `url(public/test.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="text-white font-extralight font-Sexsmith ">
              <h1 className="2xl:text-4xl xl:text-4xl lg:text-3xl md:text-3xl sm:text-2xl text-xl ">
                Савина Татьяна Александровна
              </h1>
              <h1 className="2xl:text-3xl xl:text-3xl lg:text-2xl md:text-2xl sm:text-xl text-lg ">
                Клинический психолог
              </h1>
            </div>
          </div>
        </div>

        <Block_2 />
      </div>
    </>
  );
}
