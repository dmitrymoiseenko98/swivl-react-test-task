
import React from 'react';
import './User.css';

function User(props) {
  return (
    <div className="User">
      {props.match.params.login}
    </div>
  );
}

export default User;
