import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Users from '../Users';
import User from '../User';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          path="/"
          component={Users}
          exact
        />
        <Route
          path="/user/:login"
          component={User}
        />
      </Switch>
    </div>
  );
}

export default App;
