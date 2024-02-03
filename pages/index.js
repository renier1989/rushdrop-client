import Layout from "@/components/Layout";
import useAuth from "@/hooks/useAuth";
import { useEffect } from "react";

const Home = () => {
  const { usuarioAutenticado } = useAuth()

  useEffect(() => {
    usuarioAutenticado()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return <Layout>

    <h1>Index pagina principal</h1>
  </Layout>;
};

export default Home;
