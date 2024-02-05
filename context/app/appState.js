import { MOSTRAR_ALETAS } from "@/types";
import appContext from "./appContext";
import { useReducer } from "react";
import appReducer from "./appReducer";

const AppState = ({ children }) => {
  const initialState = {
    msg_archivo: '',
  };

  const [state, dispatch] = useReducer(appReducer, initialState);

  const mostrarAlerta = (msg) => {
    console.log(msg);
    dispatch({
      type: MOSTRAR_ALETAS,
      payload: msg,
    });
  };

  return (
    <appContext.Provider
      value={{
        msg_archivo: state.msg_archivo,
        mostrarAlerta,
      }}
    >
      {children}
    </appContext.Provider>
  );
};

export default AppState;
