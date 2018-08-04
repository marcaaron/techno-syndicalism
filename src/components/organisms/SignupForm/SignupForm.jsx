import React, { Component } from "react";
import {
  StyledForm,
  StyledLink,
  StyledFormText,
  StyledFormError
} from "styles";
import { FormItem } from "components/molecules";
import { ButtonSubmit } from "components/atoms";
import { withFormik } from "formik";
import { validateSignup, catchGqlErrors } from "util/functions";
import { withRouter } from "react-router-dom";
import { signIn } from "util/loginUtils";
import { withApollo } from "react-apollo";

const InnerForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleSubmit,
  handleBlur,
  isSubmitting
}) => (
  <StyledForm onSubmit={handleSubmit}>
    <FormItem
      labelText="Username: "
      value={values.username}
      name="username"
      type="text"
      onBlur={handleBlur}
      handleChange={handleChange}
    />
    {touched.username &&
      errors.username && <StyledFormError>{errors.username}</StyledFormError>}
    <FormItem
      labelText="Email: "
      value={values.email}
      name="email"
      type="email"
      onBlur={handleBlur}
      handleChange={handleChange}
    />
    {touched.email &&
      errors.email && <StyledFormError>{errors.email}</StyledFormError>}
    <FormItem
      labelText="Password: "
      value={values.password}
      name="password"
      type="password"
      onBlur={handleBlur}
      handleChange={handleChange}
    />
    {touched.password &&
      errors.password && <StyledFormError>{errors.password}</StyledFormError>}
    <FormItem
      labelText="Password Confirmation: "
      value={values.passwordConf}
      name="passwordConf"
      type="password"
      onBlur={handleBlur}
      handleChange={handleChange}
    />
    {touched.passwordConf &&
      errors.passwordConf && (
        <StyledFormError>{errors.passwordConf}</StyledFormError>
      )}
    <ButtonSubmit text="Register" />
    <StyledFormText>
      Already have an account? <StyledLink to="/login">Log In</StyledLink>
    </StyledFormText>
  </StyledForm>
);

const SignupForm = withFormik({
  mapPropsToValues: props => ({
    username: "",
    email: "",
    password: "",
    passwordConf: ""
  }),
  validate: validateSignup,
  handleSubmit: (
    { username, password, email },
    { props, setSubmitting, setErrors }
  ) => {
    props
      .signupUser({
        variables: {
          username,
          email,
          password
        }
      })
      .then(() => {
        props
          .loginUser({
            variables: {
              email,
              password
            }
          })
          .then(data => {
            signIn(data.data.signinUser.token);
            props.client.resetStore();
            props.history.push("/home");
          })
          .catch(err => setErrors(catchGqlErrors(err)));
      })
      .catch(err => setErrors(catchGqlErrors(err)));
  }
})(InnerForm);

export default withRouter(withApollo(SignupForm));
