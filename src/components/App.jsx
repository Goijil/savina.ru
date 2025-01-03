import { NavBar } from "./NavBar";
import { Block_3 } from "./Block_3";
import { Block_4 } from "./Block_4";
import { Block_5 } from "./Block_5";
import { Block_6 } from "./Block_6";
import { Footer } from "./footer/Footer";
import { WelcomePg } from "./WelcomePg";

export function App() {
  return (
    <>
      <div className="bg-DarkGreen h-full w-full font-times-new-roman flex flex-col 2xl:gap-60 xl:gap-52 lg:gap-40 md:gap-36 sm:gap-28 gap-20">
        <NavBar />
        <WelcomePg />
        <Block_3 />
        <Block_4 />
        <Block_6 />
        <Block_5 />
        <Footer />
      </div>
    </>
  );
}
