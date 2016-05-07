/* eslint-disable no-unused-vars, no-use-before-define */
import {
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString
} from 'graphql';

import {
  connectionArgs,
  connectionDefinitions,
  connectionFromArray,
  fromGlobalId,
  globalIdField,
  mutationWithClientMutationId,
  nodeDefinitions
} from 'graphql-relay';

import {
  User,
  getUser,
} from './dbUsers';

/**
 * We get the node interface and field from the Relay library.
 *
 * The first method defines the way we resolve an ID to its object.
 * The second defines the way we resolve an object to its GraphQL type.
 */
const { nodeInterface, nodeField } = nodeDefinitions(
  (globalId) => {
    const { type, id } = fromGlobalId(globalId);
    if (type === 'User') {
      return getUser(id);
    } else if (type === 'Other') {
      return getUser(id);
    }
    return null;
  },
  (obj) => {
    if (obj instanceof User) {
      return userType;
    }
    return null;
  }
);

/**
 * Define your own types here
 */
const userType = new GraphQLObjectType({
  name: 'User',
  description: 'A person who uses the app',
  fields: () => ({
    id: globalIdField('User'),
    username: {
      type: GraphQLString,
      description: 'User\'s username'
    },
    name: {
      type: GraphQLString,
      description: 'User\'s actual name'
    },
  }),
  interfaces: [nodeInterface]
});

/**
 * Define your own connection types here
 */
// const { connectionType: customerConnection } = connectionDefinitions({ name: 'Customer', nodeType: customerType });

const viewerType = new GraphQLObjectType({
  name: 'Viewer',
  description: 'This is the root of the primary query. This aggregates the disparate information a logged in user' +
    ' would need to know',
  fields: () => ({
    root: {
      type: new GraphQLNonNull(viewerType),
      resolve: () => ({})
    },
    user: {
      type: userType,
      resolve: () => getUser('1') // eventually replace with currently logged in user
    },
  })
});

/**
 * This is the type that will be the root of our query,
 * and the entry point into our schema.
 */
const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    node: nodeField,
    // Add your own root fields here
    viewer: {
      type: viewerType,
      resolve: () => ({})
    }
  })
});

const UserNameMutation = mutationWithClientMutationId({
  name: 'ChangeUserName',
  inputFields: {
    userId: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: new GraphQLNonNull(GraphQLString) }
  },
  outputFields: {
    result: {
      type: GraphQLString,
      resolve: (newThing) => newThing.newName
    },
  },
  mutateAndGetPayload: ({ userId, name }) => {
    const userIdLocal = fromGlobalId(userId).id;
    getUser(userIdLocal).name;
    return { 'newName': name };
  },
});


/**
 * This is the type that will be the root of our mutations,
 * and the entry point into performing writes in our schema.
 */
const mutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    // Add your own mutations here
    // mutationName: MutationName,
  })
});

/**
 * Finally, we construct our schema (whose starting query type is the query
 * type we defined above) and export it.
 */
export default new GraphQLSchema({
  query: queryType,
  // Uncomment the following after adding some mutation fields:
  // mutation: mutationType
});
