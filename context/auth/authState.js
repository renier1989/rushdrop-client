import authContext from "./authContext";
import { useReducer } from "react";
import authReducer from "./authReducer";
import {
  LIMPIAR_ALERTAS,
  USUARIO_AUTENTICADO,
  USUARIO_REGISTRO_ERROR,
  USUARIO_REGISTRO_EXITO,
} from "@/types";
import clienteAxios from "@/config/axios";

const AuthState = ({ children }) => {
  // definir un initialState
  const initialState = {
    token: "Renier Vargas Token",
    autenticado: null,
    usaurio: null,
    mensaje: null,
    error: false,
  };

  // definir el reducer
  const [state, dispatch] = useReducer(authReducer, initialState);

  //   registrar el usuario
  const registrarUsuario = async (datos) => {
    try {
      const respuesta = await clienteAxios.post("/api/usuarios", datos);
      dispatch({
        type: USUARIO_REGISTRO_EXITO,
        payload: respuesta.data.msg,
      });
    } catch (error) {
      dispatch({
        type: USUARIO_REGISTRO_ERROR,
        payload: error.response.data.msg,
      });
    }
    setTimeout(() => {
      dispatch({
        type: LIMPIAR_ALERTAS,
      });
    }, 3000);
  };

  //   obtener el usuario autenticado
  const usuarioAutenticado = (nombre) => {
    dispatch({
      type: USUARIO_AUTENTICADO,
      payload: nombre,
    });
  };

  return (
    <authContext.Provider
      value={{
        token: state.token,
        autenticado: state.autenticado,
        usuario: state.usuario,
        mensaje: state.mensaje,
        error: state.error,
        registrarUsuario,
        usuarioAutenticado,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthState;
