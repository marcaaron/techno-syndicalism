import ApolloClient, { InMemoryCache, ApolloLink } from "apollo-boost";

const cache = new InMemoryCache();

// Set up Apollo Apollo Client
const client = new ApolloClient({
  uri: "https://api.graph.cool/simple/v1/cji7x698u1upt0166iyh55ieq",
  link: ApolloLink.from([]),
  cache
});

export default client;
