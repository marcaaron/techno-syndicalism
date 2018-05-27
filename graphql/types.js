const graphql = require('graphql');
const axios = require('axios');

const {
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLSchema
} = graphql;

const CommentType = new GraphQLObjectType({
  name: 'Comment',
  fields: () => ({
    postId: { type: GraphQLInt },
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    body: { type: GraphQLString }
  })
});

const PostType = new GraphQLObjectType({
  name: 'Post',
  fields: () => ({
    userId:{ type: GraphQLInt },
    id:{ type: GraphQLInt },
    title:{ type: GraphQLString },
    body:{ type: GraphQLString },
    comments: {
      type: GraphQLList(CommentType),
      resolve(parentValue, args){
        return axios.get(`https://jsonplaceholder.typicode.com/posts/${parentValue.id}/comments`)
        .then(res=>res.data);
      }
    }
  })
});

module.exports = { PostType, CommentType };
