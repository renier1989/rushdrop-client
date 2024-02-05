import { LIMPIAR_ALERTAS, MOSTRAR_ALETAS } from "@/types";

const appReducer = (state, action) => {
  switch (action.type) {
    case MOSTRAR_ALETAS:
      return {
        ...state,
        msg_archivo: action.payload,
        msg_archivo_error: true,
      };
    case LIMPIAR_ALERTAS:
      return {
        ...state,
        msg_archivo: null,
        msg_archivo_error: null,
      };

    default:
      return state;
  }
};

export default appReducer;
