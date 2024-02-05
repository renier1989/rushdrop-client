import { useDropzone } from "react-dropzone";

import React from "react";
import Image from "next/image";

export const Dropzone = () => {
  // estos hooks son del mismo dropzone , son para extraer el contenido del dropzone
  const { getRootProps, getInputProps, isDragActive } = useDropzone();

  return (
    <div className="bg-[url('/folder-icon.svg')] md:flex-1 mb-3 mx-2 mt-16 lg:mt-10 flex flex-col items-center justify-center  border-dashed border-2 border-rose-200 rounded">
      <div
        {...getRootProps({
          className: "dropzone w-full h-full flex items-center justify-center ",
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
    </div>
  );
};
