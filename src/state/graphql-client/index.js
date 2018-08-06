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
  },
  clientState: {
    defaults: {
      // clientInfo: {
      //   __typename: "ClientInfo",
      //   token: "",
      //   id: ""
      // }
    },
    resolvers: {
      Query: {},
      Mutation: {
        // updateClientInfo: (
        //   _,
        //   { id, token },
        //   { cache }
        // ) => {
        //   cache.writeData({
        //     data: {
        //       clientInfo: {
        //         __typename: "ClientInfo",
        //         token,
        //         id
        //       }
        //     }
        //   });
        //   return null;
        // }
        // End Mutation
      }
      // End Resolver
    }
  }
});

export default client;
