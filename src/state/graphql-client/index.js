import ApolloClient, { InMemoryCache } from "apollo-boost";
import { getToken } from "util/loginUtils";

const cache = new InMemoryCache();

const getHeaders = async () => {
  const token = await getToken();
  return token ? `Bearer ${token}` : null;
};

// Set up Apollo Apollo Client
const client = new ApolloClient({
  cache,
  uri: "http://localhost:4000/",
  request: async operation => {
    operation.setContext({
      headers: {
        authorization: await getHeaders()
      }
    });
  }
});

export default client;
