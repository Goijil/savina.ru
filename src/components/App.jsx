import { NavBar } from "./NavBar";
import { AboutMe } from "./AboutMe";
import { AboutMethod } from "./AboutMethod";
import { TypesOfSupport } from "./TypesOfSupport";
import { WhoWillBenefit } from "./WhoWillBenefit";
import { Footer } from "./footer/Footer";
import { WelcomePg } from "./WelcomePg";

export function App() {
  return (
    <>
      <div className="bg-DarkGreen h-full w-full font-times-new-roman flex flex-col 2xl:gap-60 xl:gap-52 lg:gap-40 md:gap-36 sm:gap-28 gap-20">
        <NavBar />
        <WelcomePg />
        <AboutMe />
        <AboutMethod />
        <WhoWillBenefit />
        <TypesOfSupport />
        <Footer />
      </div>
    </>
  );
}
