import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { link } from "react-router-dom";
import { connect } from "react-redux";
import withAuth from "../axios/index";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

import { register } from "../../state/actions/authenticationActions";

const signUpForm = ({ userReducer, isSubmitting, errors, touched }) => {
  return (
    <>
    <h1>Sign Up Here</h1>
    <Form>
      <div>
        <Field
        type="text"
        name="" />
      </div>
    </Form>
    </>
  )

};

// const newUserAPI = "http://localhost:3000/api/auth/register";
// const initialFormValues = {
//   id: uuid(),
//   name: '',
//   user_name: '',
//   email: '',
//   password: '',
// }

// export default function AddUser(props) {
//   const [user, setUser] = useState(initialFormValues);

//   const handleChange = event => {
//     setUser({
//       ...user,
//       [event.target.name]: event.target.value
//     })
//   }

//   const onSubmit = event => {
//     withAuth().post(newUserAPI, user)
//     .then(res => {
//       setUser({
//         ...user,
//         initialFormValues
//       })
//     })
//     .catch(err => {
//       alert(err.response.data.message)
//     })
//   }

//   return(
//     <div>
//       <h2>Join Us</h2>
//       <form>
//       <input type='text' placeholder='Name' name='name' value={user.name} onChange={handleChange}/>
//       <input type='text' placeholder='Username' name='user_name' value={user.user_name} onChange={handleChange}/>
//       <input type='text'placeholder='Email' name='email' value={user.email} onChange={handleChange}/>
//       <input type='text'placeholder='Password' name='password' value={user.password} onChange={handleChange}/>
//       <button onClick={onSubmit}>Sign Up</button>
//       </form>
//     </div>
//   )
// }
