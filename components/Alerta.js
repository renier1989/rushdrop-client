import useAuth from "@/hooks/useAuth";
import useRushDrop from "@/hooks/useRushDrop";
import React from "react";

export const Alerta = () => {
  const { mensaje,error } = useAuth();
  const {msg_archivo,msg_archivo_error} = useRushDrop()
  return (
    <div className={`${error || msg_archivo_error ? 'bg-red-600':' bg-sky-800'} text-white py-2 px-3 w-full my-3 max-w-lg text-center mx-auto rounded-sm`}>
      {mensaje || msg_archivo}
    </div>
  );
};
