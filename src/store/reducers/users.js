import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
  CLEAR_USERS
} from '../types';

const initialState = {
  loading: false,
  error: false,
  data: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        loading: true,
        error: false,
        data: []
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case FETCH_USERS_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case CLEAR_USERS:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
