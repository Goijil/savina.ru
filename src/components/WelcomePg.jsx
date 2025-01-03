export function WelcomePg() {
  return (
    <>
      <div className="px-10 lg:grid lg:grid-cols-2 flex flex-col gap-y-10">
        <div className=" flex justify-center">
          <img
            src="welcomePg.jpg"
            alt="#"
            className="object-cover max-lg:max-w-[350px] max-w-[450px] w-full h-full"
            style={{
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>

        <div className="bg-Beige p-10">
          <div className="2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-Sexsmith text-DarkGreen">
            <h1>Ассоциированный член Московской</h1>
            <h1>Психоаналитической Ассоциации</h1>
            <h1>Психоаналитический терапевт</h1>
          </div>
          <h1 className="2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-base text-base">
            Порой бывает сложно понять, что заставляет нас выбирать не то, чего,
            казалось бы, мы хотели. Смысл некоторых событий нашей жизни
            ускользает. Для того, чтобы открылись новые жизненные пути и
            возможности, чтобы почувствовать достаточно надëжную опору внутри
            себя, получать больше радости от общения с окружающими и наладить
            гармоничный контакт с внутренним миром, приглашаю вас совершить
            увлекательное путешествие к самому себе.
          </h1>
        </div>
      </div>
    </>
  );
}
