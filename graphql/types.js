const graphql = require('graphql');

const {
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLSchema
} = graphql;

const SomeType = new GraphQLObjectType({
  name: 'Some',
  fields: () => ({

  })
});

module.exports = { SomeType };
