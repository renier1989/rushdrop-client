import {
  AGREGAR_DESCARGAS,
  AGREGAR_PASSWORD,
  CREAR_ENLACE_ERROR,
  CREAR_ENLACE_EXITO,
  LIMPIAR_ALERTAS,
  LIMPIAR_STATE,
  MOSTRAR_ALETAS,
  SUBIENDO_ARCHIVO,
  SUBIR_ARCHIVO_ERROR,
  SUBIR_ARCHIVO_EXITO,
} from "@/types";
import appContext from "./appContext";
import { useReducer } from "react";
import appReducer from "./appReducer";
import clienteAxios from "@/config/axios";

const AppState = ({ children }) => {
  const initialState = {
    msg_archivo: null,
    msg_archivo_error: false,
    nombre_original: null,
    nombre: null,
    subiendo: false,
    descargas: 1,
    password: "",
    autor: null,
    url: null,
  };

  //   se crea el state y dispatch con el usereducer
  const [state, dispatch] = useReducer(appReducer, initialState);

  //   funcion para mostrar u oculatar las alertas
  const mostrarAlerta = (msg) => {
    dispatch({
      type: MOSTRAR_ALETAS,
      payload: msg,
    });

    setTimeout(() => {
      dispatch({
        type: LIMPIAR_ALERTAS,
      });
    }, 4000);
  };

  //   funcion para subir el archivo
  const subirArchivo = async (formData, nombreArchivo) => {
    dispatch({
      type: SUBIENDO_ARCHIVO,
    });
    try {
      // aqui  la logica para cargar el archivo al server
      const resultado = await clienteAxios.post("/api/archivos", formData);

      dispatch({
        type: SUBIR_ARCHIVO_EXITO,
        payload: {
          nombre: resultado.data.archivo,
          nombre_original: nombreArchivo,
        },
      });
    } catch (error) {
      dispatch({
        type: SUBIR_ARCHIVO_ERROR,
        payload: error.response.data.msg,
      });
    }
  };

  //   funcion para crear el enlace con la url de descarga
  const crearEnlace = async () => {
    const data = {
      nombre_original: state.nombre_original,
      nombre: state.nombre,
      subiendo: state.subiendo,
      descargas: state.descargas,
      password: state.password,
      autor: state.autor,
      url: state.url,
    };

    try {
      const respuesta = await clienteAxios.post("/api/enlaces", data);
      dispatch({
        type: CREAR_ENLACE_EXITO,
        payload: respuesta.data.msg,
      });
    } catch (error) {
      dispatch({
        type: CREAR_ENLACE_ERROR,
        payload: error.response.data.msg,
      });
    }
  };

  // funcion para limpiar el state y redireccionar a la vista de inicio
  const limpiarState = () => {
    dispatch({
      type: LIMPIAR_STATE,
    });
  };

  const agregarPassword = (pass) => {
    dispatch({
      type: AGREGAR_PASSWORD,
      payload: pass,
    });
  };

  const agregarDescargas = (descargas) => {
    dispatch({
      type: AGREGAR_DESCARGAS,
      payload: descargas,
    });
  };

  return (
    <appContext.Provider
      value={{
        msg_archivo: state.msg_archivo,
        msg_archivo_error: state.msg_archivo_error,
        nombre: state.nombre,
        nombre_original: state.nombre_original,
        subiendo: state.subiendo,
        descargas: state.descargas,
        password: state.password,
        autor: state.autor,
        url: state.url,
        mostrarAlerta,
        subirArchivo,
        crearEnlace,
        limpiarState,
        agregarPassword,
        agregarDescargas,
      }}
    >
      {children}
    </appContext.Provider>
  );
};

export default AppState;
