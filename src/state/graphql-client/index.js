import ApolloClient, { InMemoryCache } from "apollo-boost";

const cache = new InMemoryCache();

// Set up Apollo Apollo Client
const client = new ApolloClient({
  cache,
  uri: "https://api.graph.cool/simple/v1/cjkbae1k593u7019023n2fxpo",
  clientState: {
    defaults: {
      userInfo: {
        __typename: "UserInfo",
        username: "",
        imageUrl: "http://placekitten.com/g/50/50",
        messages: 0,
        notifications: 0,
        isAuthenticated: false
      }
    },
    resolvers: {
      Query: {},
      Mutation: {
        toggleTestAuth: (
          _,
          { username, imageUrl, messages, notifications, isAuthenticated },
          { cache }
        ) => {
          cache.writeData({
            data: {
              userInfo: {
                __typename: "UserInfo",
                isAuthenticated,
                username,
                imageUrl,
                messages,
                notifications
              }
            }
          });
          return null;
        }
        // End Mutation
      }
      // End Resolver
    }
  }
});

export default client;
