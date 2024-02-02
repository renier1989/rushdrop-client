import authContext from "./authContext";
import { useReducer } from "react";
import authReducer from "./authReducer";
const AuthState = ({ children }) => {
  // definir un initialState
  const initialState = {
    token: "",
    autenticado: null,
    usaurio: null,
    mensaje: null,
  };

  // definir el reducer
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <authContext.Provider
      value={{
        token: state.token,
        autenticado: state.autenticado,
        usuario: state.usuario,
        mensaje: state.mensaje,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthState;
