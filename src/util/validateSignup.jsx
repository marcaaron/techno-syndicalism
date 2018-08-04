export default function validateSignup(values, props) {
  const errors = {};
  if (!values.username) errors.username = "Username is Required";
  // If email is not present or badly formatted then return error
  if (!values.email) {
    errors.email = "Email Address is Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) errors.password = "Password is Required";
  if (!values.passwordConf)
    errors.passwordConf = "Password Confirmation is Required";
  if (
    values.passwordConf &&
    values.password &&
    values.passwordConf !== values.password
  ) {
    errors.password = "Password and Password Confirmation Must Match";
    errors.passwordConf = "";
  }
  return errors;
}
