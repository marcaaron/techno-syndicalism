const graphql = require('graphql');

const {
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList
} = graphql;

// const { } = require('./types');


const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {

  }
});

module.exports = mutation;
