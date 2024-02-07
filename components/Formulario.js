import useRushDrop from "@/hooks/useRushDrop";
import { useState } from "react";

const Formulario = () => {
  const [asignarPass, setAsignarPass] = useState(false);
    const { agregarPassword ,agregarDescargas } = useRushDrop()
  return (
    <div className="mt-2 py-5 mx-5 bg-white/70 rounded-md">
      <div className="mx-5">
        <label
          htmlFor="descargas"
          className="text-lg text-sky-900 font-semibold"
        >
          Eliminar archivo despues de:
        </label>
        <select
          name="descargas"
          id="descargas"
          className="appearance-none w-full text-center mt-2 bg-white border-2 font-semibold border-rose-900 text-black py3 focus:outline-none rounded-md"
          onChange={e => agregarDescargas(e.target.value)}
        >
          <option defaultValue  disabled>
            -- Cantidad de descargas --
          </option>
          <option value="1">1 Descarga</option>
          <option value="5">5 Descargas</option>
          <option value="10">10 Descargas</option>
          <option value="20">20 Descargas</option>
        </select>
      </div>
      <div className="mt-4 mx-5">
        <div className="flex items-center justify-between">
          <label
            htmlFor="password"
            className="text-lg text-sky-900 font-semibold"
          >
            Asignar Password al Archivo:
          </label>
          <input type="checkbox" onChange={()=>setAsignarPass(!asignarPass)} />
        </div>
        {asignarPass ? (
          <input
          onChange={e => agregarPassword(e.target.value)}
            type="password"
            className="appearance-none w-full text-center mt-2 bg-white border-2 font-semibold border-rose-900 text-black py3 focus:outline-none rounded-md"
          />
        ) : null}
      </div>
    </div>
  );
};

export default Formulario;
