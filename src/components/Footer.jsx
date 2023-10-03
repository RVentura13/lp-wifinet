export const Footer = () => {
  const fechaActual = new Date();
  const añoActual = fechaActual.getFullYear();
  return (
    <footer className="w-full h-auto m-auto py-5 flex justify-center items-center bg-principal-100">
      <div>
        <p className="w-full text-base text-[#ffffff] text-center font-medium">
          Todos los derechos reservados Wifinetworks © {añoActual}
        </p>
      </div>
    </footer>
  );
};
