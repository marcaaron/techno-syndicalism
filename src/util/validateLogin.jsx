export default function validateLogin(values, props) {
  const errors = {};
  // If email is not present or badly formatted then return error
  if (!values.email) {
    errors.email = "Email Address is Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) errors.password = "Password is Required";
  return errors;
}
