import { neo4jgraphql } from 'neo4j-graphql-js';

export default {
  Query: {
    Brand(object, params, ctx, resolveInfo) {
      return neo4jgraphql(object, params, ctx, resolveInfo);
    }
  }
};
