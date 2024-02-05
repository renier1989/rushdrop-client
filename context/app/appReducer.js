import { LIMPIAR_ALERTAS, MOSTRAR_ALETAS, SUBIENDO_ARCHIVO, SUBIR_ARCHIVO_ERROR, SUBIR_ARCHIVO_EXITO } from "@/types";

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
    case SUBIENDO_ARCHIVO:
      return {
        ...state,
        subiendo: true,
      };
    case SUBIR_ARCHIVO_EXITO:
      return {
        ...state,
        nombre: action.payload.nombre,
        nombre_original: action.payload.nombre_original,
        subiendo:false
      };
    case SUBIR_ARCHIVO_ERROR:
      return {
        ...state,
        msg_archivo: action.payload,
        msg_archivo_error: true,
        subiendo:false
      };

    default:
      return state;
  }
};

export default appReducer;
