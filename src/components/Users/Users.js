import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from '../Loader';
import { fetchUsers } from '../../store/actions';
import './Users.css';

class Users extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    return (
      <div className="Users">
        {this.props.loading ? (
          <div className="Users-loading">
            <Loader />
          </div>
        ) : this.props.error ? (
          <div className="Users-error">Loading error</div>
        ) : (
          <ul className="Users-list">
            {this.props.users.map(user => (
              <li
                className="Users-item"
                key={user.id}
              >
                <div className="Users-item__col">
                  <p className="Users-item__login">{user.login}</p>
                </div>
                <div className="Users-item__col">
                  <a className="Users-item__link" href={user.html_url}>Open profile</a>
                </div>
                <div className="Users-item__col">
                  <img
                    className="Users-item__avatar"
                    src={user.avatar_url}
                    alt="Avatar"
                  />
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.users.loading,
  error: state.users.error,
  users: state.users.data
});

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
