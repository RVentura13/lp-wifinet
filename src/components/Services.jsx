export const Services = () => {
  return (
    <section
      id="services"
      className="w-[80%] m-auto h-auto flex flex-col justify-center items-center mb-10"
    >
      <h2 className=" text-center text-4xl shadow-text-white mt-32 mb-10 text-secondary-100 font-bold">
        Nuestros servicios
      </h2>
      <div className="w-full gap-5 flex flex-wrap justify-center items-center">
        <div className="w-[350px] min-w-[350px] h-[450px] bg-[#ffffff] flex flex-col justify-start items-center gap-5 p-5 rounded-lg shadow-lg shadow-secondary-100">
          <img
            className="w-[150px] h-[200px]"
            src="/internet.svg"
            alt="Imagen antena"
          />
          <h3 className="text-secondary-100 text-2xl font-semibold">
            Internet residencial
          </h3>
          <p className="text-secondary-100 text-xl">
            Ofrecemos conexiones de Internet de alta velocidad y confiables con
            planes que se acomodan a tu necesidad.
          </p>
        </div>
        <div className="w-[350px] min-w-[350px] h-[450px] bg-[#ffffff] flex flex-col justify-start items-center gap-5 p-5 rounded-lg shadow-lg shadow-secondary-100">
          <img
            className="w-[150px] h-[200px]"
            src="/camera.svg"
            alt="Imagen antena"
          />
          <h3 className="text-secondary-100 text-2xl font-semibold">
            Cámaras de seguridad
          </h3>
          <p className="text-secondary-100 text-xl">
            Brindamos servicios de instalación y mantenimiento de cámaras de
            seguridad para tu hogar o negocio.
          </p>
        </div>
        <div className="w-[350px] min-w-[350px] h-[450px] bg-[#ffffff] flex flex-col justify-start items-center gap-5 p-5 rounded-lg shadow-lg shadow-secondary-100">
          <img
            className="w-[150px] h-[200px]"
            src="/repair.svg"
            alt="Imagen antena"
          />
          <h3 className="text-secondary-100 text-2xl font-semibold">
            Equipos de red
          </h3>
          <p className="text-secondary-100 text-xl">
            Nuestros expertos en redes pueden ayudarte con la configuración y el
            mantenimiento de equipos de red para garantizar el funcionamiento
            óptimo.
          </p>
        </div>
      </div>
    </section>
  );
};
