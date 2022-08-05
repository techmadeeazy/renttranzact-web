import React from 'react';
import Login from './containers/Login/Login';
import Signup from './containers/Signup/Signup';
import { Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
        <Switch>
          <Route path="/signup" component={Signup}/>
          <Route path="/" component={Login}/>
        </Switch>
  );
}

export default App;
