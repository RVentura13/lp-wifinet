export const Home = () => {
  return (
    <header
      id="home"
      className="w-full h-screen flex flex-col justify-start items-center gap-6 bg-gradient-to-b from-transparent via-principal-100/90 to-transparent"
    >
      <img
        className="hidden md:block mt-20 rounded-lg w-[1640px] h-[624px]"
        width="1640"
        src="./banner.jpeg"
        alt="Imagen representa internet"
      />
      <img
        className="md:hidden mt-20 w-[500px] h-[400px]"
        width="500"
        height="400"
        src="./banner2.jpg"
        alt="Imagen header"
      />

      <div className="w-[90%] flex flex-col gap-1 justify-center items-center">
        <h1 className="text-[3.25rem] text-center text-principal-100 shadow-text-white font-bold">
          Bienvienido a Wifinetworks
        </h1>
        <h2 className="text-3xl text-center text-secondary-100 font-semibold shadow-text-white">
          ¡Tu mejor opción en internet residencial!
        </h2>
      </div>
    </header>
  );
};
