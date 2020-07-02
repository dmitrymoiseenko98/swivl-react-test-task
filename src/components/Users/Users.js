import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { fetchUsers } from '../../store/actions';
import { withRouter } from 'react-router-dom';
import Loader from '../Loader';
import './Users.css';

class Users extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  onUserClick(event, userLogin) {
    if (!event.target.href) {
      this.props.history.push(`/user/${userLogin}`);
    }
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
                onClick={(event) => this.onUserClick(event, user.login)}
              >
                <div className="Users-item__col">
                  <p className="Users-item__login">{user.login}</p>
                </div>
                <div className="Users-item__col">
                  <a className="Users-item__github-link" href={user.html_url}>Open on github</a>
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

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Users);
