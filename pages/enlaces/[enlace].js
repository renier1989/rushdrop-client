import Layout from "@/components/Layout";
import clienteAxios from "@/config/axios";
import React from "react";

export async function getServerSideProps({ params }) {
  // export async function getStaticProps({ params }) {
  const { enlace } = params;
  const respuesta = await clienteAxios.get(`/api/enlaces/${enlace}`);

  return {
    props: {
      link: respuesta.data,
    },
  };
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
  console.log(link);
  return (
    <Layout>
      <div className="text-center flex flex-col items-center justify-center font-bold text-sky-900 gap-8">
        <p className="text-4xl">Descarga tu archivo:</p>
        <a 
        href={`${process.env.backendURL}/api/archivos/${link.archivo}`} 
        download
        className="bg-rose-600 text-white px-4 text-2xl py-1 rounded-md uppercase font-bold hover:shadow-lg transition-all duration-300">
          Descargar
        </a>
      </div>
    </Layout>
  );
};

export default Enlace;
