import React from "react";
import {
  StyledForm,
  StyledLink,
  StyledFormText,
  StyledFormError
} from "styles";
import { FormItem } from "components/molecules";
import { ButtonSubmit } from "components/atoms";
import { withFormik } from "formik";
import { validateLogin, catchGqlErrors } from "util/functions";
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
}) => {
  return (
    <StyledForm key="login_form" onSubmit={handleSubmit}>
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
      <ButtonSubmit text="Log In" />
      <StyledFormText>
        Don't have an account? <StyledLink to="/signin">Register</StyledLink>
      </StyledFormText>
    </StyledForm>
  );
};

const LoginForm = withFormik({
  mapPropsToValues: props => ({
    email: "",
    password: ""
  }),
  validate: validateLogin,
  handleSubmit: ({ password, email }, { props, setSubmitting, setErrors }) => {
    console.log("submitting");
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
  }
})(InnerForm);

export default withRouter(withApollo(LoginForm));
