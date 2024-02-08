import { Alerta } from "@/components/Alerta";
import Layout from "@/components/Layout";
import clienteAxios from "@/config/axios";
import useRushDrop from "@/hooks/useRushDrop";
import React, { useState } from "react";

export async function getServerSideProps({ params }) {
  try {
    const { enlace } = params;
    const respuesta = await clienteAxios.get(`/api/enlaces/${enlace}`);
    return {
      props: {
        link: respuesta.data,
      },
    };
  } catch (error) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }

  // export async function getStaticProps({ params }) {
}
export async function getServerSidePaths() {
  // export async function getStaticPaths() {
  const enlaces = await clienteAxios.get("/api/enlaces");
  return {
    paths: enlaces.data.enlaces.map((enlace) => ({
      params: { enlace: enlace.url },
    })),
    fallback: false,
  };
}

const Enlace = ({ link }) => {
  // console.log(link)
  const [tienePassword, setTienePassword] = useState(link.password);
  const [password, setPassword] = useState("");
  const { mostrarAlerta, msg_archivo } = useRushDrop();
  const validarPassword = async (e) => {
    e.preventDefault();
    try {
      const data = {
        password,
      };

      const respuesta = await clienteAxios.post(
        `/api/enlaces/${link.enlace}`,
        data
      );
      setTienePassword(respuesta.data.password);
    } catch (error) {
      mostrarAlerta(error.response.data.msg);
    }
  };

  const handleDescarga = async () => {
    try {
      const respuesta = await clienteAxios.get(
        `/api/archivos/${link.archivo}`,
        { responseType: "blob" }
      );

      if(respuesta){
        // Crear un objeto Blob con el contenido del archivo recibido
        const blob = new Blob([respuesta.data], {
          type: respuesta.headers["content-type"],
        });
        // Crear una URL para el Blob y crear un enlace de descarga
        const url = window.URL.createObjectURL(blob);
        // Crear un enlace <a> para descargar el archivo
        const a = document.createElement("a");
        a.href = url;
        a.download = link.archivo; // Nombre del archivo que se descargará
        a.click();
        // Liberar la URL creada
        window.URL.revokeObjectURL(url);

      }else{
        mostrarAlerta('El archivo ya no se puede descargar.');
      }

    } catch (error) {
      mostrarAlerta(error.response.data.msg);
    }
  };

  return (
    <Layout>
      {tienePassword ? (
        <>
          <p className="text-center font-semibold">
            El archivo se encuentra protegido con un password, ingrésalo para
            continuar con la descarga.
          </p>
          {msg_archivo && <Alerta />}
          <div className="">
            <div className=" flex justify-center mt-5 ">
              <div className=" w-full max-w-lg ">
                <form
                  onSubmit={(e) => validarPassword(e)}
                  className="bg-white rounded-md shadow-md px-8 pt-6 pb-4 mb-4"
                >
                  <div className="mb-4">
                    <label
                      htmlFor="password"
                      className="block text-gray-900 mb-2 font-semibold"
                    >
                      <div className="flex justify-between">
                        <span>Password</span>
                      </div>
                    </label>
                    <input
                      type="password"
                      className={`shadow appearance-none  border  rounded w-full py-2 px-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline `}
                      placeholder="Password del Enlace"
                      id="password"
                      autoComplete="off"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <input
                    type="submit"
                    className="bg-sky-900 rounded-md px-3 py-2 text-white uppercase font-bold cursor-pointer w-full"
                    value="Validar Password"
                  />
                </form>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="text-center flex flex-col items-center justify-center font-bold text-sky-900 gap-8">
          <p className="text-4xl">Descarga tu archivo:</p>
          <a
            // href={`${process.env.backendURL}/api/archivos/${link.archivo}`}
            onClick={() => handleDescarga()}
            download
            className="cursor-pointer bg-rose-600 text-white px-4 text-2xl py-1 rounded-md uppercase font-bold hover:shadow-lg transition-all duration-300"
          >
            Descargar
          </a>
        </div>
      )}
    </Layout>
  );
};

export default Enlace;
