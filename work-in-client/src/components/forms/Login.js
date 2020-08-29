import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { login } from "../../state/actions/authenticationActions";

const LoginForm = ({ userReducer, errors, touched, isSubmitting }) => {
  return (
    <div>
      <h1>Welcome Back!</h1>
      <Form>
        <div>
          <Field type="email" name="email" placeholder="Email" />
          {errors.email && touched.email && (
            <div>{errors.email}</div>
          )}
        </div>
        <div>
          <Field type="password" name="password" placeholder="Password" />
          {errors.password && touched.password && <div>{errors.password}</div>}
        </div>
        <button type="submit" disabled={isSubmitting}>
          sign in to your account
        </button>
        <p>Don't have an account?</p>
        <Link to="/signup">Sign up here</Link>
      </Form>
    </div>
  );
};

const FormikLoginForm = withFormik({
  mapPropsToValues({ email, password }) {
    return {
      email: email || "",
      password: password || "",
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .required("Please enter your username")
      .email("Please enter a valid email"),
    password: Yup.string().required("please enter your password"),
  }),
  handleSubmit(values, { props, resetForm, setSubmitting }) {
    resetForm();
    setSubmitting(false);
    props.login(props, values);
  },
})(LoginForm);

export default connect((state) => state, { login })(FormikLoginForm);
