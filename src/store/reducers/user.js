import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
  CLEAR_USER
} from '../types';

const initialState = {
  loading: false,
  error: false,
  data: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        loading: true,
        error: false,
        data: []
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case FETCH_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case CLEAR_USER:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
