import ApolloClient, { InMemoryCache } from "apollo-boost";

console.log(ApolloClient);
const cache = new InMemoryCache();

// Set up Apollo Apollo Client
const client = new ApolloClient({
  uri: "https://api.graph.cool/simple/v1/cjkbae1k593u7019023n2fxpo",
  cache
});

export default client;
