import { LIMPIAR_ALERTAS, MOSTRAR_ALETAS } from "@/types";
import appContext from "./appContext";
import { useReducer } from "react";
import appReducer from "./appReducer";

const AppState = ({ children }) => {
  const initialState = {
    msg_archivo: null,
    msg_archivo_error: false,
  };

  const [state, dispatch] = useReducer(appReducer, initialState);

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

  return (
    <appContext.Provider
      value={{
        msg_archivo: state.msg_archivo,
        msg_archivo_error: state.msg_archivo_error,
        mostrarAlerta,
      }}
    >
      {children}
    </appContext.Provider>
  );
};

export default AppState;
