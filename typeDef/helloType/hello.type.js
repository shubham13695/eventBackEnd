
const {gql} = require('apollo-server-express');
const HelloTypeDefs = gql`
  type Query {
    hello: String
  }
`;

exports.HelloTypeDefs = HelloTypeDefs