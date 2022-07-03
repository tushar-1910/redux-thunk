import { GET_USERS_SUCESS, IS_ERROR, IS_LOADING } from "./action";

const initState = {
  users: [],
  loading: false,
  error: false
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case IS_LOADING: {
      return {
        ...state,
        users: [],
        loading: true,
        error: false
      };
    }
    case GET_USERS_SUCESS: {
      return {
        ...state,
        users: payload,
        loading: false,
        error: false
      };
    }
    case IS_ERROR: {
      return {
        ...state,
        users: [],
        loading: false,
        error: true
      };
    }

    default: {
      return state;
    }
  }
};
