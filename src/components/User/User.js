
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser, clearUser } from '../../store/actions';
import Loader from '../Loader';
import './User.css';

class User extends Component {
  componentDidMount() {
    this.props.fetchUser(this.props.match.params.login);
  }

  componentWillUnmount() {
    this.props.clearUser();
  }

  renderUserInfo() {
    const info = [
      {
        id: 0,
        label: 'Name',
        value: this.props.user.name
      },
      {
        id: 1,
        label: 'Followers',
        value: this.props.user.followers
      },
      {
        id: 2,
        label: 'Following',
        value: this.props.user.following
      },
      {
        id: 3,
        label: 'Created at',
        value: this.props.user.created_at
      },
      {
        id: 4,
        label: 'Company',
        value: this.props.user.company
      },
      {
        id: 5,
        label: 'Email',
        value: this.props.user.email
      },
      {
        id: 6,
        label: 'Location',
        value: this.props.user.location
      },
      {
        id: 7,
        label: 'Blog',
        value: this.props.user.blog
      },
      {
        id: 8,
        label: 'Bio',
        value: this.props.user.bio
      }
    ];

    return (
      <ul className="User-info">
        {info.map(item => (
          item.value !== null ? (
            <li
              className="User-info-item"
              key={item.id}
            >
              {item.label}: {item.value}
            </li>
          ) : (
            null
          )
        ))}
      </ul>
    );
  }  

  render() {
    return (
      <div className="User">
        {this.props.loading ? (
          <div className="User-loading">
            <Loader />
          </div>
        ) : this.props.error ? (
          <div className="User-error">Loading error</div>
        ) : (
          <div className="User-content">
            <img className="User-avatar" src={this.props.user.avatar_url} alt="Avatar"/>
            {this.renderUserInfo()}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.user.loading,
  error: state.user.error,
  user: state.user.data
});

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (username) => dispatch(fetchUser(username)),
  clearUser: () => dispatch(clearUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
