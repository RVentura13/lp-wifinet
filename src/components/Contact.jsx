import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { LiaDirectionsSolid } from "react-icons/lia";
import { TbWorldWww } from "react-icons/tb";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full flex gap-10 flex-col justify-center items-center py-10 mb-20"
    >
      <h2 className="text-4xl text-secondary-100 font-bold mt-20">
        Contáctanos
      </h2>
      <div className="w-[80%] flex flex-col md:flex-row gap-5 justify-center items-center md:justify-around md:items-start">
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-2xl text-principal-100 font-bold text-center">
            Información de contacto
          </h3>
          <div className="flex flex-col justify-center items-start">
            <p className="flex gap-2 justify-center items-center text-xl text-secondary-100 font-semibold">
              <LiaDirectionsSolid size={20} />
              Morales, Izabal
            </p>
            <p className="flex gap-2 justify-center items-center text-xl text-secondary-100 font-semibold">
              <AiOutlinePhone size={20} />
              +502 42510307
            </p>
            <p className="flex gap-2 justify-center items-center text-xl text-secondary-100 font-semibold">
              <AiOutlineMail size={20} />
              <a href="mailto:wifinet@smartpcgt.com">wifinet@smartpcgt.com</a>
            </p>
            <p className="flex gap-2 justify-center items-center text-xl text-secondary-100 font-semibold">
              <TbWorldWww size={20} />
              <a href="https://www.pruebatuwifi.net/" target="_blank">
                www.pruebatuwifi.net
              </a>
            </p>
          </div>
        </div>

        <img src="./logo.svg" alt="Logotipo" width="350" height="auto" />

        <div className="flex flex-col gap-2 justify-center items-center">
          <h3 className="text-2xl text-principal-100 font-bold text-center">
            Redes Sociales
          </h3>
          <p className="text-secondary-100 text-center font-semibold">
            ¡Siguenos!
          </p>
          <div className="flex gap-5 justify-center items-center">
            <a
              href="https://www.facebook.com/WifiNet.Morales/"
              className="bg-[#ffffff] rounded-md p-[2px] ease-linear duration-200 hover:-translate-y-1 hover:scale-110"
              target="_blank"
            >
              <img
                width="40"
                height="auto"
                src="./facebook.svg"
                alt="Facebook"
              />
            </a>
            <a
              href="https://www.instagram.com/wifi.networks/?igshid=MmU2YjMzNjRlOQ%3D%3D"
              className="rounded-md p-[2px] ease-linear duration-200 hover:-translate-y-1 hover:scale-110"
              target="_blank"
            >
              <img
                width="40"
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
                width="40"
                height="auto"
                src="./whatsapp.svg"
                alt="whatsapp"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
