import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR
} from '../types';

const fetchUsersRequest = () => {
  return ({
    type: FETCH_USERS_REQUEST
  });
};

const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  };
};

const fetchUsersError = (error) => {
  return {
    type: FETCH_USERS_ERROR,
    payload: error
  };
};

export const fetchUsers = () => dispatch => {
  dispatch(fetchUsersRequest());

  try {
    fetch('https://api.github.com/users?per_page=100')
      .then(res => res.json())
      .then(res => {
        dispatch(fetchUsersSuccess(res))
      });
  } catch(err) {
    console.error(err);
    dispatch(fetchUsersError());
  }
}
