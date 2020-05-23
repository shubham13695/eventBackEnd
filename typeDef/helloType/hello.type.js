
const {gql} = require('apollo-server-express');
const HelloTypeDefs = gql`
  type Query {
    hello(name:String!): String
  }
  input TypeInput {
    name:String
  }
`;

exports.HelloTypeDefs = HelloTypeDefs