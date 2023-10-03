import { useEffect, useState } from "react";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { NavBar } from "./components/NavBar";
import { Payments } from "./components/Payments";
import { Plans } from "./components/Plans";
import { Services } from "./components/Services";
import { Tester } from "./components/Tester";

export const App = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleVisible = () => {
      if (window.scrollY >= 150) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleVisible);
    return () => {
      window.removeEventListener("scroll", handleVisible);
    };
  }, []);

  return (
    <>
      <NavBar />
      <Home />
      <Services />
      <Plans />
      <Tester />
      <Payments />
      <Contact />
      <Footer />

      <div
        className={`fixed flex justify-center items-center bottom-8 right-5 bg-[#29a71a] rounded-full hover:scale-110 shadow-lg shadow-secondary-100 ${
          visible ? "w-[200px] h-[50px] rounded-full" : "w-[50px] h-[50px]"
        } transition-width duration-300 overflow-hidden`}
      >
        <a
          href="https://api.whatsapp.com/send?phone=50242510307"
          className="flex gap-1 justify-center items-center text-[#ffffff] text-sm"
          target="_blank"
        >
          <img width="30" height="auto" src="./whatsapp.svg" alt="Whatsapp" />

          <p
            className={`text-[#ffffff] text-sm ${
              visible ? "block opacity-100" : "hidden opacity-0"
            } transition-opacity duration-1000`}
          >
            ¿Necesitas ayuda?
          </p>
        </a>
      </div>
    </>
  );
};
