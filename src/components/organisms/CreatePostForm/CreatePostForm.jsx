import React from "react";
import { StyledForm, StyledFormText, StyledFormError } from "styles";
import { FormItem } from "components/molecules";
import { ButtonSubmit } from "components/atoms";
import { withFormik } from "formik";
import { validateGroupForm, catchGqlErrors } from "util/functions";
import { withRouter } from "react-router-dom";
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
    <StyledForm key="createPost_form" onSubmit={handleSubmit}>
      <FormItem
        labelText="Title: "
        value={values.title}
        name="title"
        type="text"
        onBlur={handleBlur}
        handleChange={handleChange}
      />
      {touched.title &&
        errors.title && <StyledFormError>{errors.title}</StyledFormError>}
      <FormItem
        labelText="Content: "
        value={values.content}
        name="content"
        type="textarea"
        onBlur={handleBlur}
        handleChange={handleChange}
      />
      {touched.content &&
        errors.content && <StyledFormError>{errors.content}</StyledFormError>}
      <ButtonSubmit text="Create New Post" />
      <StyledFormText>Create Post Placeholder Text</StyledFormText>
    </StyledForm>
  );
};

const CreatePostForm = withFormik({
  mapPropsToValues: props => ({
    title: "",
    content: ""
  }),
  validate: validateGroupForm,
  handleSubmit: ({ title, content }, { props, setSubmitting, setErrors }) => {
    const userId = props.user.id;
    const groupId = props.match.params.id;
    props
      .createPost({
        variables: {
          title,
          content,
          userId,
          groupId
        },
        refetchQueries: ["groupBySlug"]
      })
      .then(data => {
        props.history.push(`/groups/`);
      })
      .catch(err => setErrors(catchGqlErrors(err)));
  }
})(InnerForm);

export default withRouter(withApollo(CreatePostForm));
