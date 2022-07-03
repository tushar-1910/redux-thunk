export const IS_LOADING = "IS_LOADING";
export const GET_USERS_SUCESS = "GET_USERS_SUCESS";
export const IS_ERROR = "IS_ERROR";

export const isLoading = () => {
  return {
    type: IS_LOADING
  };
};

export const isError = () => {
  return {
    type: IS_ERROR
  };
};

export const getUsersSuccess = (payload) => {
  return {
    type: GET_USERS_SUCESS,
    payload
  };
};

export const getUsers = (query, page) => async (dispatch) => {
  // console.log(query, page);
  try {
    dispatch(isLoading());
    let res = await fetch(
      `https://api.github.com/search/users?q=${query}&page=${page}&per_page=5`
    );
    let data = await res.json();
    dispatch(getUsersSuccess(data.items));
  } catch (error) {
    dispatch(isError());
  }
};
