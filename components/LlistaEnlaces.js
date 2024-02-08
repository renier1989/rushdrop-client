import useAuth from "@/hooks/useAuth";
import React from "react";

export const LlistaEnlacesTabla = () => {
  const { enlaces } = useAuth();

  const copiarUrl = (url) => {
    let urlCopiar = `${process.env.frontendURL}/enlaces/${url}`;
    navigator.clipboard.writeText(urlCopiar);
  };
  return (
    <table className="table-auto w-full text-center">
      <thead>
        <tr>
          <th>Url</th>
          <th>Descargas</th>
          <th>Creado</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {enlaces.map((enlace) => (
          <tr key={enlace._id}>
            <td>
              <button
                onClick={() => copiarUrl(enlace.url)}
                className="bg-sky-800 px-2 py-1 rounded text-white text-sm"
              >
                Copiar
              </button>
              {/* {enlace.url} */}
            </td>
            <td>{enlace.descargas}</td>
            <td>{enlace.creado}</td>
            <td>
              <div className="flex gap-1 justify-center">
                <button className="bg-rose-700 px-2 py-1 rounded text-white text-sm">
                  Eliminar
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
