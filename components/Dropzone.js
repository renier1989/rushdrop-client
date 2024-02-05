import { useDropzone } from "react-dropzone";

import React, { useCallback } from "react";
import Image from "next/image";
import clienteAxios from "@/config/axios";
import useRushDrop from "@/hooks/useRushDrop";

export const Dropzone = () => {
  const { mostrarAlerta, subirArchivo, subiendo,crearEnlace } = useRushDrop();

  const onDropRejected = () => {
    mostrarAlerta(
      "No se pudo cargar el archivo. El limite es de 1MB, crea un cuenta para subir archivos con un peso mayor!"
    );
  };

  // funcion para manejar los archivos cargados.
  const onDropAccepted = useCallback(async (acceptedFiles) => {
    // creo un formdata para poder pasarle el archivo
    const formData = new FormData();
    formData.append("archivo", acceptedFiles[0]); // solo le pasamos un archivo a la vez
    const nombre_archivo = acceptedFiles[0].path;
    subirArchivo(formData, nombre_archivo);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // estos hooks son del mismo dropzone , son para extraer el contenido del dropzone
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({ onDropAccepted, onDropRejected, maxSize: 1000000 });

  // muesto el archivo que se cargo
  const archivos = acceptedFiles.map((archivo) => (
    <li
      key={archivo.lastModified}
      className="text-center bg-sky-200/80 p-2 rounded shadow-lg"
    >
      <p className="font-bold">{archivo.path}</p>
      <p className="font-semibold text-sky-900 text-sm">
        {(archivo.size / Math.pow(1024, 2)).toFixed(2)} MB
      </p>
    </li>
  ));

  

  return (
    <div className="bg-[url('/folder-icon.svg')] md:flex-1 mb-3 mx-2 mt-16 lg:mt-10 flex flex-col items-center justify-center  border-dashed border-2 border-rose-200 rounded">
      {acceptedFiles.length > 0 ? (
        <div className="mt-5  w-full justify-center flex flex-col items-center gap-2">
          <ul>{archivos}</ul>

          {subiendo ? (
            <Image src="/loading.svg" alt="loading" width={100} height={100} />
          ) : (
            <button
              onClick={crearEnlace}
              className="bg-sky-800 text-white px-4 py-1 rounded-md uppercase font-bold"
              type="button"
            >
              Crear enlace
            </button>
          )}
        </div>
      ) : (
        <div
          {...getRootProps({
            className:
              "dropzone w-full h-full flex items-center justify-center ",
          })}
        >
          <input className="h-100" {...getInputProps()} />

          {!isDragActive ? (
            <div className=" text-center bg-sky-200/80 p-5 rounded cursor-pointer">
              <p className=" text-xl   text-sky-800">
                Selecciona o Arrastra un archivo aqui
              </p>
            </div>
          ) : (
            <div className=" text-center bg-sky-200/80 p-5 rounded cursor-pointer">
              <p className=" text-xl   text-sky-800">Deja Caer el archivo.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
