const graphql = require('graphql');
const { SomeType } = require('./types');
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

  }
});

module.exports = RootQuery;
