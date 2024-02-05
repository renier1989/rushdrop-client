import { MOSTRAR_ALETAS } from "@/types";

const appReducer = (state, action) => {
  switch (action.type) {
    case MOSTRAR_ALETAS:
      return {
        ...state,
        msg_archivo: action.payload,
      };

    default:
      return state;
  }
};

export default appReducer;
