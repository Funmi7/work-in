import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, NavLink, withRouter, Redirect } from 'react-router-dom';
import SignUpForm from './components/forms/signUp';

// function withAthCheck(Component, props) {
//   if (localStorage.getItem('payload')) {
//     return <Component {...props} />
//   }
//   return <Redirect to='/' />;
// }

function App() {
 
  return (
    <div className="App">
      <nav>
        <NavLink to ='/signup'>Register</NavLink> 
      </nav>
      <Route path='/signup' component={SignUpForm} />
    </div>
  );
}

export default App;
