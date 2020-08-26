import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { link } from "react-router-dom";
import { connect } from "react-redux";
import withAuth from "../../utils/axiosWithAuth";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

import { register } from "../../state/actions/authenticationActions";

const signUpForm = ({ userReducer, isSubmitting, errors, touched }) => {
  return (
    <>
      <h1>Sign Up Here</h1>
      <Form>
        <div>
          <Field type="text" name="name" placeholder="Full Name" />
          {errors.name && touched.name && <div>{errors.name}</div>}
        </div>
        <div>
          <Field type="text" name="user_name" placeholder="Username" />
          {errors.user_name && touched.user_name && (
            <div>{errors.user_name}</div>
          )}
        </div>
        <div>
          <Field type="email" name="email" placeholder="Email" />
          {errors.email && touched.email && <div>{errors.email}</div>}
        </div>
        <div>
          <Field type="password" name="password" placeholder="Password" />
          {errors.password && touched.password && <div>{errors.password}</div>}
        </div>
        <div>
          <Field
            type="password"
            name="confirm_password"
            placeholder="Confirm Password"
          />
          {errors.confirm_password && touched.confirm_password && (
            <div>{errors.confirm_password}</div>
          )}
        </div>
        <div>
          <button disabled={isSubmitting} type="submit">
            Sign Up
          </button>
        </div>
      </Form>
    </>
  );
};

const FormikSignUpForm = withFormik({
  mapPropsToValues({ name, user_name, email, password, confirm_password }) {
    return {
      name: name || "",
      user_name: user_name || "",
      email: email || "",
      password: password || "",
      confirm_password: confirm_password || "",
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required("Please enter full name"),
    user_name: Yup.string().required("Please enter a username"),
    email: Yup.string()
      .required("Please enter your email")
      .email("Please enter a valid email"),
    password: Yup.string()
      .required("Please enter your password")
      .min(6, "must be at least 6 characters"),
    confirm_password: Yup.string()
      .required("Please confirm your password")
      .oneOf([Yup.ref("password"), null], "Your passwords do not match"),
  }),

  handleSubmit(values, { props, setSubmitting, resetForm }) {
    resetForm();
    setSubmitting(false);

    props.register(props, values);
  },
})(signUpForm);

export default connect((state) => state, { register })(FormikSignUpForm);

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
