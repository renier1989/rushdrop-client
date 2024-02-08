import {
    CERRAR_SESION,
  LIMPIAR_ALERTAS,
  LISTA_ENLACES,
  LOGIN_ERROR,
  LOGIN_EXITO,
  USUARIO_AUTENTICADO,
  USUARIO_REGISTRO_ERROR,
  USUARIO_REGISTRO_EXITO,
} from "@/types";

const authReducer = (state, action) => {
  switch (action.type) {
    case USUARIO_AUTENTICADO:
      return {
        ...state,
        usuario: action.payload,
        autenticado: true,
      };
    case USUARIO_REGISTRO_EXITO:
      return {
        ...state,
        error: false,
        mensaje: action.payload,
      };
    case USUARIO_REGISTRO_ERROR:
      return {
        ...state,
        error: true,
        mensaje: action.payload,
      };
    case LIMPIAR_ALERTAS:
      return {
        ...state,
        error: false,
        mensaje: null,
      };
    case LOGIN_EXITO:
        localStorage.setItem('rd-token', action.payload);
      return {
        ...state,
        error: false,
        token: action.payload,
        autenticado: true,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        error: true,
        mensaje: action.payload,
      };
    case CERRAR_SESION:
        localStorage.removeItem('rd-token');
      return {
        ...state,
        usuario: null,
        token: null,
        autenticado: null,
        enlaces: [],
      };
    case LISTA_ENLACES:
      return {
        ...state,
        enlaces: action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;
