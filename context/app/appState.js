import { LIMPIAR_ALERTAS, MOSTRAR_ALETAS, SUBIENDO_ARCHIVO, SUBIR_ARCHIVO_ERROR, SUBIR_ARCHIVO_EXITO } from "@/types";
import appContext from "./appContext";
import { useReducer } from "react";
import appReducer from "./appReducer";
import clienteAxios from "@/config/axios";

const AppState = ({ children }) => {
  const initialState = {
    msg_archivo: null,
    msg_archivo_error: false,
    nombre_original: null,
    nombre:null,
    subiendo : false,
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
  const subirArchivo = async (formData,nombreArchivo) =>{
    dispatch({
        type: SUBIENDO_ARCHIVO
    })
    try {
        // aqui  la logica para cargar el archivo al server
    const resultado = await clienteAxios.post("/api/archivos", formData);
        
        dispatch({
            type: SUBIR_ARCHIVO_EXITO,
            payload: {
                nombre: resultado.data.archivo,
                nombre_original:nombreArchivo
            }
        })

    } catch (error) {
        dispatch({
            type: SUBIR_ARCHIVO_ERROR,
            payload: error.response.data.msg
        })
    }
  }


  return (
    <appContext.Provider
      value={{
        msg_archivo: state.msg_archivo,
        msg_archivo_error: state.msg_archivo_error,
        nombre: state.nombre,
        nombre_original:state.nombre_original,
        subiendo: state.subiendo,
        mostrarAlerta,
        subirArchivo
      }}
    >
      {children}
    </appContext.Provider>
  );
};

export default AppState;
