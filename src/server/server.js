import { ApolloServer } from 'apollo-server';
import {v1 as neo4j} from 'neo4j-driver';
import typeDefs from './schemas';
import resolvers from './resolvers';
import config from './config';

// const schema = makeExecutableSchema({
//   typeDefs,
//   resolvers
// });

const driver = neo4j.driver(
  config.neo4j_URI,
  neo4j.auth.basic(
    config.neo4j_USER,
    config.neo4j_PASSWORD
  )
);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { driver }
});

server.listen().then(({ url }) => {
  console.log(`GraphQL API read at ${url}`);
});
