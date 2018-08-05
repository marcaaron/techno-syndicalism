const catchGqlErrors = err => {
  const { graphQLErrors } = err;
  switch (graphQLErrors[0].code) {
    case 3023:
      return { username: "A user already exists with that information" };
      break;
    case 3022:
      return {
        email:
          "No user with that email exists or password has been entered incorrectly"
      };
    default:
      return { username: "There was an unknown error." };
  }
  return null;
};

export default catchGqlErrors;
