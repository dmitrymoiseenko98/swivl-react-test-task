
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../store/actions';
import Loader from '../Loader';
import './User.css';

function User(props) {
  useEffect(() => props.fetchUser(props.match.params.login), []);

  return (
    <div className="User">
      {props.loading ? (
        <div className="User-loading">
          <Loader />
        </div>
      ) : props.error ? (
        <div className="User-error">Loading error</div>
      ) : (
        <div className="User-content">
          <img className="User-avatar" src={props.user.avatar_url} alt="Avatar"/>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  loading: state.user.loading,
  error: state.user.error,
  user: state.user.data
});

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (username) => dispatch(fetchUser(username))
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
