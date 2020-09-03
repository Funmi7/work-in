import React from "react";

const Logout = (props) => {
  const onLogout = () => {
    localStorage.clear();
    props.history.replace("/login");
  };

  const onCancel = () => {
    props.history.push("/");
  };

  return (
    <div>
      <p>Are you sure you want to log out?</p>
      <button onClick={onLogout}>Logout</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default Logout;
