export function AboutMethod() {
  return (
    <>
      <div
        id="2"
        className="px-10 lg:grid lg:grid-cols-3 flex flex-col gap-y-10"
      >
        <div className="flex justify-center col-span-2 items-center">
          <img
            src="aboutMethod.jpg"
            alt="#"
            className="object-cover max-h-[650px] max-w-[650px] w-full h-full"
          />
        </div>

        <div className="bg-Beige p-10">
          <h1 className="2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-Sexsmith text-DarkGreen">
            О методе:
          </h1>
          <h1 className="mt-5 2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-base text-base">
            Психоаналитический подход основан на работе с бессознательным. Это
            бережный и постепенный процесс, в котором важно стремиться к
            свободным и спонтанным высказываниям во время сеанса. Любые мысли,
            идеи, чувства, воспоминания, сны имеют значение. Понадобится один
            или несколько ознакомительных сеансов, чтобы вы могли
            удостовериться, что я именно "ваш" специалист, а я имела возможность
            подумать о наиболее эффективном терапевтическом проекте, который
            смогу вам предложить.
          </h1>
        </div>
      </div>
    </>
  );
}
