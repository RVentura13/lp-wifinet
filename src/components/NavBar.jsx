import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export const NavBar = () => {
  const [showNavBar, setShowNavBar] = useState(false);

  const handleNav = () => {
    setShowNavBar(!showNavBar);
  };
  return (
    <nav className="fixed w-full bg-principal-100 z-20 ">
      <div className="w-[90%] md:h-24 h-20 m-auto flex justify-between items-center">
        <a href="/">
          <img
            className="bg-[#ffffff] py-1 px-3 rounded-lg shadow-md shadow-secondary-100 ease-linear duration-200 hover:scale-105"
            width="150"
            src="/logo.svg"
            alt="Logotipo"
          />
        </a>
        <div className="hidden md:flex justify-center items-center gap-1">
          <a
            href="#home"
            className="text-[#ffffff] text-center font-semibold shadow-text px-2 rounded-lg ease-linear duration-150 hover:-translate-y-[2px] hover:bg-[#ffffff] hover:text-principal-100 hover:shadow-sm hover:shadow-secondary-100"
          >
            Inicio
          </a>
          <a
            href="#services"
            className="text-[#ffffff] text-center font-semibold shadow-text px-2 rounded-lg ease-linear duration-150 hover:-translate-y-[2px] hover:bg-[#ffffff] hover:text-principal-100 hover:shadow-sm hover:shadow-secondary-100"
          >
            Servicios
          </a>
          <a
            href="#plans"
            className="text-[#ffffff] text-center font-semibold shadow-text px-2 rounded-lg ease-linear duration-150 hover:-translate-y-[2px] hover:bg-[#ffffff] hover:text-principal-100 hover:shadow-sm hover:shadow-secondary-100"
          >
            Planes
          </a>
          <a
            href="#tester"
            className="text-[#ffffff] text-center font-semibold shadow-text px-2 rounded-lg ease-linear duration-150 hover:-translate-y-[2px] hover:bg-[#ffffff] hover:text-principal-100 hover:shadow-sm hover:shadow-secondary-100"
          >
            Prueba tu Wifi
          </a>
          <a
            href="#payments"
            className="text-[#ffffff] text-center font-semibold shadow-text px-2 rounded-lg ease-linear duration-150 hover:-translate-y-[2px] hover:bg-[#ffffff] hover:text-principal-100 hover:shadow-sm hover:shadow-secondary-100"
          >
            Pagos
          </a>
          <a
            href="#contact"
            className="text-[#ffffff] text-center font-semibold shadow-text px-2 rounded-lg ease-linear duration-150 hover:-translate-y-[2px] hover:bg-[#ffffff] hover:text-principal-100 hover:shadow-sm hover:shadow-secondary-100"
          >
            Contáctanos
          </a>
        </div>
        <div
          className={
            showNavBar
              ? "md:hidden text-[#ffffff] ease-linear duration-300 scale-75"
              : "md:hidden text-[#ffffff] ease-linear duration-300 hover:scale-110"
          }
          onClick={() => {
            handleNav();
          }}
          title="Menu"
        >
          <AiOutlineMenu size={40} />
        </div>
      </div>

      <div
        className={
          showNavBar
            ? "md:hidden fixed left-0 top-0 w-full h-screen z-30 ease-in-out duration-500 text-[#eee] bg-gradient-to-r from-principal-100/95 from-[97%] to-transparent to-[100%]"
            : "fixed -left-[100%] top-0 w-[90%] h-screen ease-in-out duration-500 text-[#eee] bg-gradient-to-r from-principal-100/95 from-[97%] to-transparent to-[100%]"
        }
      >
        <div className="flex flex-col justify-around gap-1">
          <div className="flex justify-between items-center my-8 mx-5">
            <a href="/">
              <img
                className="bg-[#ffffff] py-1 px-3 rounded-lg shadow-md shadow-secondary-100 ease-linear duration-200 hover:scale-105"
                width="200"
                src="/logo.svg"
                alt="Logotipo"
              />
            </a>

            <AiOutlineClose
              className="shadow-md shadow-[#ffffff] p-2 cursor-pointer rounded-full ease-linear duration-150"
              size={40}
              onClick={() => {
                handleNav();
              }}
              title="Close"
            />
          </div>
          <h3 className="text-xl text-center text-[#ffffff] font-semibold shadow-text mb-10">
            ¡Tu mejor opción en internet residencial!
          </h3>
          <div className="flex flex-col justify-center items-start text-4xl gap-5 ml-5">
            <a
              href="#home"
              className="text-[#ffffff] font-semibold shadow-text px-2 rounded-lg ease-linear duration-150 hover:-translate-y-[2px] hover:bg-[#ffffff] hover:text-principal-100 hover:shadow-sm hover:shadow-secondary-100"
              onClick={() => {
                handleNav();
              }}
            >
              Inicio
            </a>

            <a
              href="#services"
              className="text-[#ffffff] font-semibold shadow-text px-2 rounded-lg ease-linear duration-150 hover:-translate-y-[2px] hover:bg-[#ffffff] hover:text-principal-100 hover:shadow-sm hover:shadow-secondary-100"
              onClick={() => {
                handleNav();
              }}
            >
              Servicios
            </a>
            <a
              href="#plans"
              className="text-[#ffffff] font-semibold shadow-text px-2 rounded-lg ease-linear duration-150 hover:-translate-y-[2px] hover:bg-[#ffffff] hover:text-principal-100 hover:shadow-sm hover:shadow-secondary-100"
              onClick={() => {
                handleNav();
              }}
            >
              Planes
            </a>
            <a
              href="#tester"
              className="text-[#ffffff] font-semibold shadow-text px-2 rounded-lg ease-linear duration-150 hover:-translate-y-[2px] hover:bg-[#ffffff] hover:text-principal-100 hover:shadow-sm hover:shadow-secondary-100"
              onClick={() => {
                handleNav();
              }}
            >
              Prueba tu Wifi
            </a>
            <a
              href="#payments"
              className="text-[#ffffff] font-semibold shadow-text px-2 rounded-lg ease-linear duration-150 hover:-translate-y-[2px] hover:bg-[#ffffff] hover:text-principal-100 hover:shadow-sm hover:shadow-secondary-100"
              onClick={() => {
                handleNav();
              }}
            >
              Pagos
            </a>
            <a
              href="#contact"
              className="text-[#ffffff] font-semibold shadow-text px-2 rounded-lg ease-linear duration-150 hover:-translate-y-[2px] hover:bg-[#ffffff] hover:text-principal-100 hover:shadow-sm hover:shadow-secondary-100"
              onClick={() => {
                handleNav();
              }}
            >
              Contáctanos
            </a>
          </div>
          <div className="flex flex-col gap-5 justify-center items-center mt-20 bottom-0">
            <p className="text-center text-[#ffffff] shadow-text text-base font-semibold">
              ¡Siguenos!
            </p>
            <div className="flex gap-5 justify-center items-center">
              <a
                href="https://www.facebook.com/WifiNet.Morales/"
                className="bg-[#ffffff] rounded-md p-[2px] ease-linear duration-200 hover:-translate-y-1 hover:scale-110"
                target="_blank"
              >
                <img
                  width="50"
                  height="auto"
                  src="./facebook.svg"
                  alt="Facebook"
                />
              </a>
              <a
                href="https://www.instagram.com/wifi.networks/?igshid=MmU2YjMzNjRlOQ%3D%3D"
                className="rounded-xl p-[2px] ease-linear duration-200 hover:-translate-y-1 hover:scale-110"
                target="_blank"
              >
                <img
                  width="50"
                  height="auto"
                  src="./instagram.svg"
                  alt="Instagram"
                />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=50242510307"
                className="rounded-md p-[2px] ease-linear duration-200 hover:-translate-y-1 hover:scale-110"
                target="_blank"
              >
                <img
                  width="50"
                  height="auto"
                  src="./whatsapp.svg"
                  alt="whatsapp"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
