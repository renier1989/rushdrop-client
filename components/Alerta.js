import useAuth from "@/hooks/useAuth";
import React from "react";

export const Alerta = () => {
  const { mensaje,error } = useAuth();
  return (
    <div className={`${error ? 'bg-red-600':' bg-sky-800'} text-white py-2 px-3 w-full my-3 max-w-lg text-center mx-auto rounded-sm`}>
      {mensaje}
    </div>
  );
};
