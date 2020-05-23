const express = require('express');
const { ApolloServer } = require('apollo-server-express');
require('dotenv').config();
var mongoose = require('mongoose');

//load all resolver and typeDef 
const resolvers = require('./resolver');
const typeDefs = require('./typeDef/typeDef');


mongoose.connect('mongodb://localhost/stackHack', {useNewUrlParser: true,useUnifiedTopology:true});

mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

mongoose.connection.once('open', function() {
  console.log(`Data-base is connected`)
});

const server = new ApolloServer({typeDefs,resolvers});

const app = express();

server.applyMiddleware({ app });

app.listen(process.env.APP_PORT, () =>
    console.log(`Now browse to http://localhost:${process.env.APP_PORT}${server.graphqlPath}`)
);