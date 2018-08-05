import React from "react";
import slugify from "slugify";
import {
  StyledForm,
  StyledLink,
  StyledFormText,
  StyledFormError
} from "styles";
import { FormItem } from "components/molecules";
import { ButtonSubmit } from "components/atoms";
import { withFormik } from "formik";
import { validateGroupForm, catchGqlErrors } from "util/functions";
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
        labelText="Name: "
        value={values.name}
        name="name"
        type="text"
        onBlur={handleBlur}
        handleChange={handleChange}
      />
      {touched.name &&
        errors.name && <StyledFormError>{errors.name}</StyledFormError>}
      <ButtonSubmit text="Create Group" />
      <StyledFormText>Create Group Placeholder Text</StyledFormText>
    </StyledForm>
  );
};

const CreateGroupForm = withFormik({
  mapPropsToValues: props => ({
    name: ""
  }),
  validate: validateGroupForm,
  handleSubmit: ({ name }, { props, setSubmitting, setErrors }) => {
    const slug = slugify(name).toLowerCase();
    props
      .createGroup({
        variables: {
          name,
          slug
        }
      })
      .then(data => {
        props.history.push(`/groups/${slug}`);
      })
      .catch(err => setErrors(catchGqlErrors(err)));
  }
})(InnerForm);

export default withRouter(withApollo(CreateGroupForm));
