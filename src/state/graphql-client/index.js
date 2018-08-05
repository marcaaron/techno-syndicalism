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
  uri: "https://api.graph.cool/simple/v1/cjkbae1k593u7019023n2fxpo",
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
