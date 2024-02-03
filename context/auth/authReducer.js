import { LIMPIAR_ALERTAS, USUARIO_AUTENTICADO, USUARIO_REGISTRO_ERROR, USUARIO_REGISTRO_EXITO } from "@/types";

const authReducer = (state, action) =>{
    switch (action.type) {
        case USUARIO_AUTENTICADO :
            return {
                ...state,
                usuario: action.payload
            }
        case USUARIO_REGISTRO_EXITO :
            return {
                ...state,
                error:false,
                mensaje: action.payload,
            }
        case USUARIO_REGISTRO_ERROR :
            return {
                ...state,
                error:true,
                mensaje: action.payload,
            }
        case LIMPIAR_ALERTAS :
            return {
                ...state,
                error:false,
                mensaje: null,
            }

        default:
            return state;
    }
} 

export default authReducer