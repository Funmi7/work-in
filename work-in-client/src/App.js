import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import { Route, NavLink, withRouter, Redirect, Switch } from "react-router-dom";
import SignUpForm from "./components/forms/signUp";
import HomePage from "./components/Home";
import Login from "./components/forms/Login";


// function withAthCheck(Component, props) {
//   if (localStorage.getItem('payload')) {
//     return <Component {...props} />
//   }
//   return <Redirect to='/' />;
// }

function App() {
  if (localStorage.getItem("token")) {
    return (
      <Switch>
        <Route path="/feed" component={HomePage} />
        <Redirect to="/feed" />
      </Switch>
    );
  }
  return (
    <div className="App">
     <Switch>
      <Route path="/signup" component={SignUpForm} />
      <Route exact path="/" component={Login} />
      <Redirect to='/' />
      </Switch>
    </div>
  );
}


const mapStateToProps = state => {
  return {
    isLoggedIn: state.userReducer.isLoggedIn,
  }
}
export default connect(mapStateToProps)(App);
