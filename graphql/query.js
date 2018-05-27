const graphql = require('graphql');
const axios = require('axios');

const { PostType, CommentType } = require('./types');

const {
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLSchema,
  GraphQLList
} = graphql;

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    allPosts: {
      type: new GraphQLList(PostType),
      resolve(parentValue, args){
        return axios.get('https://jsonplaceholder.typicode.com/posts')
          .then(res=>res.data);
      }
    },
    postById: {
      type: PostType,
      args: { id: { type: GraphQLInt }},
      resolve(parentValue, args){
        return axios.get(`https://jsonplaceholder.typicode.com/posts/${args.id}`)
        .then(res=>res.data);
      }
    },
    commentsById: {
      type: new GraphQLList(CommentType),
      args: { id: { type: GraphQLInt }},
      resolve(parentValue, args){
        return axios.get(`https://jsonplaceholder.typicode.com/posts/${args.id}/comments`)
        .then(res => res.data);
      }
    }

  }
});

module.exports = RootQuery;
