import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, NavLink, withRouter, Redirect } from 'react-router-dom';
import register from './components/add-user';

function withAthCheck(Component, props) {
  if (localStorage.getItem('payload')) {
    return <Component {...props} />
  }
  return <Redirect to='/' />;
}

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink exact to ='/'>Register</NavLink> 
      </nav>
      <Route exact path='/' component={register} />
    </div>
  );
}

export default App;
