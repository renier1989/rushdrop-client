import { formatearFecha } from "@/helpers/formatearFecha.js";
import useAuth from "@/hooks/useAuth";
import React from "react";

export const LlistaEnlacesTabla = () => {
  const { enlaces, eliminarEnlace } = useAuth();

  const copiarUrl = (url) => {
    let urlCopiar = `${process.env.frontendURL}/enlaces/${url}`;
    navigator.clipboard.writeText(urlCopiar);
  };
  return (
    <table className="table-auto w-full text-center">
      <thead>
        <tr>
          <th></th>
          <th>Url</th>
          <th>Descargas</th>
          <th>Creado</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {enlaces.map((enlace) => (
          <tr key={enlace._id}>
            <td className="flex items-center">
              {enlace.password ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  
                  className="bi bi-lock-fill fill-rose-700"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  className="bi bi-unlock-fill fill-sky-900"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2" />
                </svg>
              )}
            </td>
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
            <td>{formatearFecha(enlace.creado)}</td>
            <td>
              <div className="flex gap-1 justify-center">
                <button
                  onClick={() => eliminarEnlace(enlace.url)}
                  className="bg-rose-700 px-2 py-1 rounded text-white text-sm"
                >
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
