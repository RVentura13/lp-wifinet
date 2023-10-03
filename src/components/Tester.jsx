export const Tester = () => {
  return (
    <section
      id="tester"
      className="w-[80%] m-auto h-auto flex flex-col justify-center items-center"
    >
      <h2 className="text-center text-4xl shadow-text-white mt-32 mb-10 text-secondary-100 font-bold">
        Prueba la velocidad de tu internet
      </h2>

      <div className="text-center">
        <iframe
          className="rounded-xl w-[350px] h-[500px] md:w-[800px]"
          src="//openspeedtest.com/speedtest"
          title="Tester"
        ></iframe>
        <a
          href="https://openspeedtest.com"
          className="text-center text-lg mb-10 text-secondary-100 font-bold"
        >
          Provided by OpenSpeedtest.com
        </a>
      </div>
    </section>
  );
};
