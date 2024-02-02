import Layout from "@/components/Layout";

const Registrate = () => {
  return (
    <Layout>
      <div className="md:w-4/5 lg:w-3/5 mx-auto mb-32">
        <h2 className="text-gray-900 font-bold text-center text-4xl">
          Registrate
        </h2>
        <div className="flex justify-center mt-5">
          <div className=" w-full max-w-lg">
            <form className="bg-white rounded-md shadow-md px-8 pt-6 pb-4 mb-4">
              <div className="mb-4">
                <label
                  htmlFor="nombre "
                  className="block text-gray-900 mb-2 font-semibold"
                >
                  Nombre
                </label>
                <input type="text" className=" shadow appearance-none  border  rounded w-full py-2 px-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                placeholder="Nombre de usuario" id="nombre" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Registrate;
