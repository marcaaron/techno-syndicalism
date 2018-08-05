export default function validateSignup(values, props) {
  const valuesKeys = Object.keys(values);
  const errors = {};
  // If email is not present or badly formatted then return error
  if (valuesKeys.includes("email") && !values.email) {
    errors.email = "Email Address is Required";
  } else if (
    valuesKeys.includes("email") &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = "Invalid email address";
  }
  if (valuesKeys.includes("password") && !values.password)
    errors.password = "Password is Required";
  if (valuesKeys.includes("passwordConf") && !values.passwordConf)
    errors.passwordConf = "Password Confirmation is Required";
  if (
    valuesKeys.includes("passwordConf") &&
    valuesKeys.includes("password") &&
    values.passwordConf &&
    values.password &&
    values.passwordConf !== values.password
  ) {
    errors.password = "Password and Password Confirmation Must Match";
    errors.passwordConf = "";
  }
  return errors;
}
