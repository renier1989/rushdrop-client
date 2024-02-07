import Layout from "@/components/Layout";
import useAuth from "@/hooks/useAuth";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Dropzone } from "@/components/Dropzone";
import useRushDrop from "@/hooks/useRushDrop";
import { Alerta } from "@/components/Alerta";
const Home = () => {
  const { usuarioAutenticado } = useAuth();
  const { msg_archivo, url } = useRushDrop();

  const [copiado, setCopiado] = useState(false);
  const enlace = `${process.env.frontendURL}/enlaces/${url}`;
  const handleCopiado = () => {
    setCopiado(true);
    navigator.clipboard.writeText(enlace);
  };

  useEffect(() => {
    const token = localStorage.getItem("rd-token");
    if (token) {
      usuarioAutenticado();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <div className="md:w-4/5 xl:w-3/5 mx-auto mb-32">
        {url ? (
          <div className="flex items-center justify-center flex-col gap-3 lg:flex md:shadow-lg bg-white p-5 rounded-lg py-10">
            <span className="text-3xl font-bold text-sky-900">
              Tu enlace esta listo:
            </span>
            <p className="text-xl text-gray-700">{enlace}</p>
            <button
              onClick={handleCopiado}
              className={`${
                copiado ? "bg-sky-900" : "bg-rose-600"
              }  text-white px-4 py-1 rounded-md uppercase font-bold mt-5 hover:shadow-lg`}
            >
              {copiado ? "Enlace Copiado" : "Copiar Enlace"}
            </button>
          </div>
        ) : (
          <>
            {msg_archivo && <Alerta />}
            <div className="lg:flex md:shadow-lg bg-white p-5 rounded-lg py-10">
              <Dropzone />
              <div className="md:flex-1 mb-3 mx-2 mt-16 lg:mt-10">
                <h2 className="text-4xl font-bold text-sky-900 text-justify">
                  Comparte tus Archivos Facil y Rapido
                </h2>
                <p className="text-xl leading-snug mt-4 text-justify">
                  <span className="font-Anton text-2xl mr-2">
                    <span className="text-sky-800">Rush</span>
                    <span className="text-rose-700">Drop</span>
                  </span>
                  <span>
                    es una app simple que te permite compartir fácil y
                    rápidamente archivos con otras personas, estos archivos
                    están cifrados de extremo a extremo y serán eliminados una
                    vez se haya descargado. Si deseas expandir las opciones como
                    proteger lo que compartes con una contraseña, aumentar el
                    tamaño de los archivos que compartes o incluso permitir más
                    descargas, puedes
                    <Link
                      href="/registrate"
                      className="text-rose-700 font-bold hover:text-sky-900 hover:shadow-lg transition-all duration-200"
                    >
                      {" "}
                      crear una cuenta
                    </Link>{" "}
                    y disfrutar de estos beneficios{" "}
                  </span>
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default Home;
