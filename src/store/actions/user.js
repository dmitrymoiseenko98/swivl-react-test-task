import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR
} from '../types';

const fetchUserRequest = () => {
  return ({
    type: FETCH_USER_REQUEST
  });
};

const fetchUserSuccess = (users) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users
  };
};

const fetchUserError = (error) => {
  return {
    type: FETCH_USER_ERROR,
    payload: error
  };
};

export const fetchUser = (username) => dispatch => {
  dispatch(fetchUserRequest());

  try {
    fetch(`https://api.github.com/users/${username}`)
      .then(res => res.json())
      .then(res => {
        dispatch(fetchUserSuccess(res))
      });
  } catch(err) {
    console.error(err);
    dispatch(fetchUserError());
  }
}
