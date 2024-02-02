import Layout from "@/components/Layout";
import { useFormik } from "formik";
import * as Yup from "yup";

const Registrate = () => {
  // validacion del formulario con Formik y Yup
  const formik = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      nombre: Yup.string().required("El Nombre es Requerido!"),
      email: Yup.string()
        .email("El Email no es válido!")
        .required("El Email es Requerido!"),
      password: Yup.string()
        .required("El Password es Requerido!")
        .min(6, "Ingrese minimo 6 caracteres!"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <Layout>
      <div className="md:w-4/5 lg:w-3/5 mx-auto mb-32">
        <h2 className="text-gray-900 font-bold text-center text-4xl">
          Registrate
        </h2>
        <div className="flex justify-center mt-5">
          <div className=" w-full max-w-lg">
            <form
              className="bg-white rounded-md shadow-md px-8 pt-6 pb-4 mb-4"
              onSubmit={formik.handleSubmit}
            >
              <div className="mb-4">
                <label
                  htmlFor="nombre"
                  className="block text-gray-900 mb-2 font-semibold"
                >
                  <div className="flex justify-between">
                    <span>Nombre</span>
                    {formik.touched.nombre && formik.errors.nombre ? (
                      <span className="text-sm font-normal text-red-500">
                        {formik.errors.nombre}
                      </span>
                    ) : null}
                  </div>
                </label>
                <input
                  type="text"
                  className={`shadow appearance-none  border  rounded w-full py-2 px-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                    formik.touched.nombre && formik.errors.nombre
                      ? "outline outline-red-600"
                      : ""
                  } `}
                  placeholder="Nombre de usuario"
                  id="nombre"
                  autoComplete="off"
                  value={formik.values.nombre}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-900 mb-2 font-semibold"
                >
                  <div className="flex justify-between">
                    <span>Email</span>
                    {formik.touched.email && formik.errors.email ? (
                      <span className="text-sm font-normal text-red-500">
                        {formik.errors.email}
                      </span>
                    ) : null}
                  </div>
                </label>
                <input
                  type="email"
                  className={`shadow appearance-none  border  rounded w-full py-2 px-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                    formik.touched.email && formik.errors.email
                      ? "outline outline-red-600"
                      : ""
                  } `}
                  placeholder="Email de usuario"
                  id="email"
                  autoComplete="off"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-gray-900 mb-2 font-semibold"
                >
                  <div className="flex justify-between">
                    <span>Password</span>
                    {formik.touched.password && formik.errors.password ? (
                      <span className="text-sm font-normal text-red-500">
                        {formik.errors.password}
                      </span>
                    ) : null}
                  </div>
                </label>
                <input
                  type="password"
                  className={`shadow appearance-none  border  rounded w-full py-2 px-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                    formik.touched.password && formik.errors.password
                      ? "outline outline-red-600"
                      : ""
                  } `}
                  placeholder="Password de usuario"
                  id="password"
                  autoComplete="off"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>

              <input
                type="submit"
                className="bg-sky-900 rounded-md px-3 py-2 text-white uppercase font-bold cursor-pointer w-full"
                value="Registrarme"
              />
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Registrate;
