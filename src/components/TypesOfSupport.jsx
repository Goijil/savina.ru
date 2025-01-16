export function TypesOfSupport() {
  return (
    <>
      <div
        id="4"
        className="px-10 lg:grid lg:grid-cols-2 flex flex-col-reverse gap-y-10"
      >
        <div className="bg-Beige p-10 flex flex-col justify-evenly gap-5">
          <h1 className="2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-Sexsmith text-DarkGreen">
            Какую помощь я могу предложить:
          </h1>
          <div className="mt-5 flex flex-col gap-5 2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-base text-base">
            <div>
              <h1>
                -Глубинная психотерапевтическая работа с открытой датой
                завершения
              </h1>
              <h1 className="">(45 мин. 1-3 раза в неделю)</h1>
            </div>
            <div>
              <h1>
                -Психологическое консультирование, работа с текущим состоянием и
                ситуацией
              </h1>
              <h1 className="">
                (50 мин. 1 раз в неделю, возможна в онлайн-формате)
              </h1>
            </div>
            <div>
              <h1>
                -Супервизии для начинающих коллег и специалистов, практикующих в
                не-психоаналитических подходах
              </h1>
              <h1 className="">(50 мин.)</h1>
            </div>
          </div>

          <h1 className="font-Sexsmith text-DarkGreen text-right align-bottom 2xl:text-3xl xl:text-2xl lg:text-xl md:text-xl sm:text-lg text-lg">
            Актуальную стоимость уточняйте при обращении
          </h1>
        </div>

        <div className="flex justify-center">
          <img
            src="typesOfSupport.jpg"
            alt="#"
            className="object-cover max-lg:max-w-[350px] max-w-[450px] w-full h-full"
            style={{
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
      </div>
    </>
  );
}
