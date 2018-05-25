const express = require('express');
const app = express();
const expressGraphQL = require('express-graphql');
const cors = require('cors');
const path = require('path');
const schema = require('./graphql/schema');

app.use(cors());

app.use('/graphql', expressGraphQL({
  schema: schema,
  graphiql: true
}));

app.listen(4000, () => console.log( 'Running GraphQL Server...' ));
