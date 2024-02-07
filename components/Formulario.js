const Formulario = () => {
  return (
    <div className="w-full mt-2 text-center mx-5">
      <div>
        <label
          htmlFor="descargas"
          className="text-lg text-sky-900 font-semibold"
        >
          Eliminar archivo despues de:
        </label>
        <select
          name="descargas"
          id="descargas"
          className="appearance-none w-3/4 text-center mt-2 mb-10 bg-white border-2 font-semibold border-rose-900 text-black py3 focus:outline-none rounded-md"
        >
          <option value="" selected disabled>-- Cantidad de descargas --</option>
          <option value="1">1 Descarga</option>
          <option value="5">5 Descargas</option>
          <option value="10">10 Descargas</option>
          <option value="20">20 Descargas</option>
        </select>
      </div>
    </div>
  );
};

export default Formulario;
