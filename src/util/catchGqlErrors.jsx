const catchGqlErrors = err => {
  const { graphQLErrors } = err;
  console.log(graphQLErrors);
  console.log(typeof graphQLErrors[0].code);
  switch (graphQLErrors[0].code) {
    case 3023:
      return { username: "A user already exists with that information" };
      break;
    default:
      return { username: "There was an unknown error." };
  }
  return null;
};

export default catchGqlErrors;
