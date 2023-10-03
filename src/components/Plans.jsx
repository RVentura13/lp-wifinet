export const Plans = () => {
  return (
    <section
      id="plans"
      className="w-full h-auto m-auto pb-10 flex flex-col justify-center items-center bg-gradient-to-b from-transparent via-principal-100/90 to-transparent"
    >
      <h2 className="w-[80%] text-center text-4xl shadow-text-white mt-32 mb-10 text-secondary-100 font-bold">
        Nuestros planes de internet
      </h2>
      <div className="w-full gap-5 flex flex-wrap justify-center items-center">
        <div className="w-[350px] min-w-[350px] h-[550px] bg-[#c678dd] flex flex-col justify-center items-center gap-5 p-5 rounded-lg shadow-lg shadow-secondary-100 ease-linear duration-150 hover:-translate-y-2">
          <h3 className="text-[#ffffff] text-2xl font-semibold shadow-text">
            Plan Básico
          </h3>
          <h2 className="text-[#ffffff] text-[64px] font-semibold shadow-text">
            5 Mbps
          </h2>
          <h3 className="text-[#ffffff] shadow-text text-4xl">Q150.00</h3>
          <p className="text-[#ffffff] shadow-text text-xl">
            Este plan podría ser suficiente para 1-2 dispositivos que navegan
            por las redes sociales y ven videos en calidad estándar en YouTube o
            Netflix al mismo tiempo.
          </p>

          <p className="flex gap-2 justify-center items-center bg-[#ffffff] px-4 rounded-xl text-secondary-100 font-bold shadow-md shadow-secondary-100 hover:bg-principal-100 hover:text-[#ffffff] hover:shadow-text">
            <a
              className="flex gap-2 justify-center items-center h-full py-3"
              href="https://wa.me/p/4189850064462447/50242510307"
              target="_blank"
            >
              <img src="./whatsapp.svg" width="30" height="auto" alt="icono" />
              Más información
            </a>
          </p>
        </div>
        <div className="w-[350px] min-w-[350px] h-[550px] bg-[#4caf50] flex flex-col justify-center items-center gap-5 p-5 rounded-lg  shadow-lg shadow-secondary-100 ease-linear duration-150 hover:-translate-y-2">
          <h3 className="text-[#ffffff] text-2xl font-semibold shadow-text">
            Plan Estándar
          </h3>
          <h2 className="text-[#ffffff] text-[64px] font-semibold shadow-text">
            20 Mbps
          </h2>
          <h3 className="text-[#ffffff] shadow-text text-4xl">Q200.00</h3>
          <p className="text-[#ffffff] shadow-text text-xl">
            Este plan debería ser adecuado para 3-4 dispositivos que navegan por
            las redes sociales y ven videos en calidad estándar o HD en YouTube
            o Netflix al mismo tiempo.
          </p>
          <p className="flex gap-2 justify-center items-center bg-[#ffffff] px-4 rounded-xl text-secondary-100 font-bold shadow-md shadow-secondary-100 hover:bg-principal-100 hover:text-[#ffffff] hover:shadow-text">
            <a
              className="flex gap-2 justify-center items-center h-full py-3"
              href="https://wa.me/p/4189850064462447/50242510307"
              target="_blank"
            >
              <img src="./whatsapp.svg" width="30" height="auto" alt="icono" />
              Más información
            </a>
          </p>
        </div>
        <div className="w-[350px] min-w-[350px] h-[550px] bg-[#ec9706] flex flex-col justify-center items-center gap-5 p-5 rounded-lg  shadow-lg shadow-secondary-100 ease-linear duration-150 hover:-translate-y-2">
          <h3 className="text-[#ffffff] text-2xl font-semibold shadow-text">
            Plan Avanzado
          </h3>
          <h2 className="text-[#ffffff] text-[64px] font-semibold shadow-text">
            30 Mbps
          </h2>
          <h3 className="text-[#ffffff] shadow-text text-4xl">Q250.00</h3>
          <p className="text-[#ffffff] shadow-text text-xl">
            Este plan podría soportar cómodamente 4-6 dispositivos que realizan
            actividades en redes sociales y vean contenido en calidad HD en
            YouTube o Netflix al mismo tiempo.
          </p>
          <p className="flex gap-2 justify-center items-center bg-[#ffffff] px-4 rounded-xl text-secondary-100 font-bold shadow-md shadow-secondary-100 hover:bg-principal-100 hover:text-[#ffffff] hover:shadow-text">
            <a
              className="flex gap-2 justify-center items-center h-full py-3"
              href="https://wa.me/p/4189850064462447/50242510307"
              target="_blank"
            >
              <img src="./whatsapp.svg" width="30" height="auto" alt="icono" />
              Más información
            </a>
          </p>
        </div>
        <div className="relative w-[350px] min-w-[350px] h-[550px] bg-[#6272a4] flex flex-col justify-center items-center gap-5 p-5 rounded-lg  shadow-lg shadow-secondary-100 ease-linear duration-150 hover:-translate-y-2">
          <h3 className="text-[#ffffff] text-2xl font-semibold shadow-text">
            Plan Premium
          </h3>
          <h2 className="text-[#ffffff] text-[64px] font-semibold shadow-text">
            40 Mbps
          </h2>
          <h3 className="text-[#ffffff] shadow-text text-4xl">Q300.00</h3>
          <p className="text-[#ffffff] shadow-text text-xl">
            Con este plan, podrías esperar que 6-8 dispositivos realicen
            actividades en redes sociales y vean contenido en alta calidad en
            YouTube o Netflix al mismo tiempo sin problemas de velocidad.
          </p>
          <p className="flex gap-2 justify-center items-center bg-[#ffffff] px-4 rounded-xl text-secondary-100 font-bold shadow-md shadow-secondary-100 hover:bg-principal-100 hover:text-[#ffffff] hover:shadow-text">
            <a
              className="flex gap-2 justify-center items-center h-full py-3"
              href="https://wa.me/p/4189850064462447/50242510307"
              target="_blank"
            >
              <img src="./whatsapp.svg" width="30" height="auto" alt="icono" />
              Más información
            </a>
          </p>
          <p className="absolute text-[#ffffff] text-base shadow-text bottom-0">
            *Sujeto a cobertura
          </p>
        </div>
      </div>
      <div className="w-[80%] flex gap-5 flex-col xl:flex-row justify-around items-start mt-10 pb-10">
        <div className="w-full mt-10 gap-10 flex flex-col justify-center items-center py-10">
          <h3 className="text-[#ffffff] text-4xl font-bold shadow-text text-center">
            Beneficios
          </h3>
          <div className="flex gap-5 flex-col md:flex-row justify-center items-center">
            <img
              src="./benefit.png"
              width="350"
              height="auto"
              className="rounded-lg shadow-lg shadow-secondary-100 min-w-[350px]"
              alt="Imagen"
            />

            <ul className="w-[300px]">
              <li className="text-secondary-100 text-2xl font-semibold shadow-text-white text-center">
                - Instalación gratis
              </li>
              <li className="text-secondary-100 text-2xl font-semibold shadow-text-white text-center">
                - Instalación inmediata
              </li>
              <li className="text-secondary-100 text-2xl font-semibold shadow-text-white text-center">
                - Sin contrato
              </li>
              <li className="text-secondary-100 text-2xl font-semibold shadow-text-white text-center">
                - Traslado gratis
              </li>
              <li className="text-secondary-100 text-2xl font-semibold shadow-text-white text-center">
                - Pagos en linea
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full mt-10 gap-10 flex flex-col justify-center items-center py-10">
          <h3 className="text-[#ffffff] text-4xl font-bold shadow-text text-center">
            Cobertura
          </h3>
          <div className="flex gap-5 flex-col md:flex-row justify-center items-center">
            <img
              src="./coverage.jpg"
              width="350"
              height="auto"
              className="rounded-lg shadow-lg shadow-secondary-100 min-w-[350px]"
              alt="Imagen"
            />

            <p className="w-[300px] text-secondary-100 text-2xl font-semibold shadow-text-white text-center">
              Te ofrecemos nuestro servicio de internet en los diferentes
              barrios, colonias y lotificaciones del area urbana de Morales,
              Izabal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
