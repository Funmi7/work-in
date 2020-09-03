import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Headers = () => {
  return (
    <>
      <NavLink to="/">Pictures</NavLink>
      <NavLink to="/upload">Upload a picture</NavLink>
      <NavLink to="/logout">Logout</NavLink>
      <h1>Pictures Gallery Website</h1>
      <p>A place where you can upload random pictures for others to see</p>
    </>
  );
};

export default Headers;
