import Layout from "@/components/Layout";
import { LlistaEnlacesTabla } from "@/components/LlistaEnlaces";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const ListaEnlaces = () => {
  const { autenticado, enlaces, usuarioAutenticado } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("rd-token");
    if (token) {
      usuarioAutenticado();
    } else {
      router.push("/login");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <Layout>
      {autenticado ? (
        <div className="md:w-4/5 xl:w-3/5 mx-auto mb-32">
          <p className="text-center font-semibold text-4xl text-sky-900">
            Lista de mis enlaces creados
          </p>

          <div className="mt-2 py-5 mx-5 bg-white/70 rounded-md shadow-md">
            <div className="mx-5">
              {enlaces.length > 0 ? (
                <LlistaEnlacesTabla />
              ) : (
                <p>No has creado enlaces</p>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="md:w-4/5 xl:w-3/5 mx-auto mb-32">
          <p className="text-center font-semibold text-4xl text-sky-900">
            Inicia sesion para ver tus enlaces creados.
          </p>
        </div>
      )}
    </Layout>
  );
};

export default ListaEnlaces;
