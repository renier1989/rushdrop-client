import authContext from "./authContext";
import { useReducer } from "react";
import authReducer from "./authReducer";
import { USUARIO_AUTENTICADO } from "@/types";
import clienteAxios from "@/config/axios";

const AuthState = ({ children }) => {
  // definir un initialState
  const initialState = {
    token: "Renier Vargas Token",
    autenticado: null,
    usaurio: null,
    mensaje: null,
  };

  // definir el reducer
  const [state, dispatch] = useReducer(authReducer, initialState);

//   registrar el usuario
const registrarUsuario = async datos => {
    try {
        const respuesta = await clienteAxios.post('/api/usuarios', datos);
        console.log(respuesta);
    } catch (error) {
        console.log(error);
    }
}

  //   obtener el usuario autenticado
  const usuarioAutenticado = (nombre) => {
    dispatch({
        type: USUARIO_AUTENTICADO,
        payload: nombre
    });
  };

  return (
    <authContext.Provider
      value={{
        token: state.token,
        autenticado: state.autenticado,
        usuario: state.usuario,
        mensaje: state.mensaje,
        registrarUsuario,
        usuarioAutenticado,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthState;
