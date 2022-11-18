const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');

const mongodb = "mongodb://localhost:27017";

// Apollo Server
// typeDefs: GrapQl Type Definitions
// resolvers: How do we resolve queries / mutations

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers
});

mongoose.connect(mongodb, {useNewUrlParser:true})
        .then(()=>{
          console.log('mongo db connection successful');
          return server.listen({port: 5000});
        })
        .then((res)=>{
          console.log(`Server running at ${res.url}`);
        })