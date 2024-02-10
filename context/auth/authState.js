import authContext from "./authContext";
import { useReducer } from "react";
import authReducer from "./authReducer";
import {
  CERRAR_SESION,
  LIMPIAR_ALERTAS,
  LISTA_ENLACES,
  LISTA_ENLACES_ELIMINAR_EXITO,
  LOGIN_ERROR,
  LOGIN_EXITO,
  USUARIO_AUTENTICADO,
  USUARIO_REGISTRO_ERROR,
  USUARIO_REGISTRO_EXITO,
} from "@/types";
import clienteAxios from "@/config/axios";
import tokenAuth from "@/config/tokenAuth";
import Swal from "sweetalert2"

const AuthState = ({ children }) => {
  // definir un initialState
  const initialState = {
    // esto es para que en caso que haya un token en el LS lo tome de alli pero solo del lado del cliente usando el typeof window
    token:
      typeof window !== "undefined" ? localStorage.getItem("rd-token") : "",
    autenticado: null,
    usuario: null,
    mensaje: null,
    error: false,
    enlaces: [],
  };

  // definir el reducer
  const [state, dispatch] = useReducer(authReducer, initialState);

  // ############## SECCION PARA EL REGISTRO DE USUARIOS ##############
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

  // ############## SECCION PARA LA AUTENTICACION DE LOS USUARIOS ##############

  const iniciarSesion = async (datos) => {
    try {
      const respuesta = await clienteAxios.post("/api/auth", datos);

      dispatch({
        type: LOGIN_EXITO,
        payload: respuesta.data.token,
      });
    } catch (error) {
      dispatch({
        type: LOGIN_ERROR,
        payload: error.response.data.msg,
      });
    }

    setTimeout(() => {
      dispatch({
        type: LIMPIAR_ALERTAS,
      });
    }, 3000);
  };

  //   obtener el usuario autenticado y obtener los enlaces que ese usuario ha creado
  const usuarioAutenticado = async () => {
    const token = localStorage.getItem("rd-token");
    if (token) {
      tokenAuth(token);
    }

    try {
      const respuesta = await clienteAxios.get("/api/auth");
      const enlaces = await clienteAxios.get("/api/lista-enlaces");
      
      if (respuesta.data.usuario) {
        // se asingna el usuario autenticado al state.
        dispatch({
          type: USUARIO_AUTENTICADO,
          payload: respuesta.data.usuario,
        });

        // si tiene enlaces el usuairo se asignan al state
        if (enlaces) {
          dispatch({
            type: LISTA_ENLACES,
            payload: enlaces.data,
          });
        }

        // si el usuario autenticado tiene enlaces creados se los asigno al state
      }
    } catch (error) {
      console.log(error);
    }
  };

  const cerrarSesion = () => {
    dispatch({
      type: CERRAR_SESION,
    });
  };

  // funcion para eliminar los enlaces que un usuario ha creado
  const eliminarEnlace = async (url) => {
    try {
      Swal.fire({
        title: "Segur@ que desea eliminar este enlace?",
        text: "No será posible revertir esta accion!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si , Eliminar!"
      }).then(async (result) => {
        if (result.isConfirmed) {
          const respuesta = await clienteAxios.post('/api/lista-enlaces/eliminar', {url});
          if(respuesta.status === 200){
            // ejecuto el dispatch para modificar el state en le reducer
            dispatch({
              type: LISTA_ENLACES_ELIMINAR_EXITO,
              payload: url
            })
          }
        }
      });

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <authContext.Provider
      value={{
        token: state.token,
        autenticado: state.autenticado,
        usuario: state.usuario,
        mensaje: state.mensaje,
        error: state.error,
        enlaces: state.enlaces,
        registrarUsuario,
        iniciarSesion,
        usuarioAutenticado,
        cerrarSesion,
        eliminarEnlace,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthState;
