export const Payments = () => {
  return (
    <section
      id="payments"
      className="w-full m-auto h-auto mb-16 flex justify-center items-center bg-gradient-to-b from-transparent via-principal-100/90"
    >
      <div className="w-[80%] flex gap-6 mt-32 flex-col justify-center items-center">
        <h2 className="w-full text-center shadow-text-white text-4xl text-secondary-100 font-bold">
          Pagos
        </h2>
        <div className="w-full m-auto flex gap-5 flex-wrap justify-around">
          <div>
            <h3 className="text-center text-xl shadow-text-white my-4 text-secondary-100 font-bold">
              Número de cuenta
            </h3>
            <img
              src="./cuenta.jpeg"
              className="rounded-lg m-auto shadow-lg shadow-secondary-100"
              width="520"
              height="auto"
              alt="Número de cuenta"
            />
          </div>

          <div className="flex flex-col justify-center items-center">
            <h3 className="text-center text-xl shadow-text-white my-4 text-secondary-100 font-bold">
              Pagos en línea con tarjeta
            </h3>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 justify-center items-center">
              <div className="w-[300px] bg-[#ffffff] flex flex-col justify-start items-center gap-5 p-5 rounded-lg border duration-300 ease-linear shadow-custom">
                <h3 className="text-[#c678dd] text-2xl font-semibold shadow-text-white">
                  Plan Básico
                </h3>
                <h2 className="text-secondary-100 text-4xl font-semibold shadow-text-white">
                  5 Mbps
                </h2>
                <h3 className="text-principal-100 font-bold text-4xl">
                  Q150.00
                </h3>
                <a
                  href="#"
                  className="flex gap-2 justify-center items-center bg-principal-100 py-3 px-4 rounded-xl text-[#ffffff] font-bold shadow-md shadow-secondary-100 hover:bg-[#0056b3] hover:shadow-text"
                  target="_blank"
                >
                  Pagar ahora
                </a>
              </div>
              <div className="w-[300px]  bg-[#ffffff] flex flex-col justify-start items-center gap-5 p-5 rounded-lg border duration-300 ease-linear shadow-custom">
                <h3 className="text-[#4caf50] text-2xl font-semibold shadow-text-white">
                  Plan Estándar
                </h3>
                <h2 className="text-secondary-100 text-4xl font-semibold shadow-text-white">
                  20 Mbps
                </h2>
                <h3 className="text-principal-100 font-bold text-4xl">
                  Q200.00
                </h3>
                <a
                  href="#"
                  className="flex gap-2 justify-center items-center bg-principal-100 py-3 px-4 rounded-xl text-[#ffffff] font-bold shadow-md shadow-secondary-100 hover:bg-[#0056b3] hover:shadow-text"
                  target="_blank"
                >
                  Pagar ahora
                </a>
              </div>
              <div className="w-[300px]  bg-[#ffffff] flex flex-col justify-start items-center gap-5 p-5 rounded-lg border duration-300 ease-linear shadow-custom hover:shadow-secondary-100">
                <h3 className="text-[#ec9706] text-2xl font-semibold shadow-text-white">
                  Plan Avanzado
                </h3>
                <h2 className="text-secondary-100 text-4xl font-semibold shadow-text-white">
                  30 Mbps
                </h2>
                <h3 className="text-principal-100 font-bold text-4xl">
                  Q250.00
                </h3>
                <a
                  href="#"
                  className="flex gap-2 justify-center items-center bg-principal-100 py-3 px-4 rounded-xl text-[#ffffff] font-bold shadow-md shadow-secondary-100 hover:bg-[#0056b3] hover:shadow-text"
                  target="_blank"
                >
                  Pagar ahora
                </a>
              </div>
              <div className="w-[300px]  bg-[#ffffff] flex flex-col justify-start items-center gap-5 p-5 rounded-lg border duration-300 ease-linear shadow-custom">
                <h3 className="text-[#6272a4] text-2xl font-semibold shadow-text-white">
                  Plan Premium
                </h3>
                <h2 className="text-secondary-100 text-4xl font-semibold shadow-text-white">
                  40 Mbps
                </h2>
                <h3 className="text-principal-100 font-bold text-4xl">
                  Q300.00
                </h3>
                <a
                  href="#"
                  className="flex gap-2 justify-center items-center bg-principal-100 py-3 px-4 rounded-xl text-[#ffffff] font-bold shadow-md shadow-secondary-100 hover:bg-[#0056b3] hover:shadow-text"
                  target="_blank"
                >
                  Pagar ahora
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 mt-5">
          <p className="text-center text-xl shadow-text-white text-secondary-100 font-semibold">
            * No olvides reportar tu comprobante de pago al número de oficinas
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=50242510307"
            className="flex justify-center shadow-text-white items-center text-center text-3xl text-principal-100 font-bold ease-linear duration-200 hover:-translate-y-1 hover:scale-110"
            target="_blank"
          >
            42510307
            <img width="40" src="./whatsapp.svg" alt="whatsapp" />
          </a>
        </div>
      </div>
    </section>
  );
};
