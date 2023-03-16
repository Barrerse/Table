const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String
        gameCount: Int
        savedgames: [game]
    }
    
    type game {
        gameId: ID!
        authors: [String]
        description: String
        title: String!
        image: String
        link: String
    }
    input gameInput {
        gameId: String!
        authors: [String]
        title: String!
        description: String!
        image: String
        link: String
    }
    type Auth {
        token: ID!
        user: User
    }
    type Query {
        me: User
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        savegame(gameData: gameInput!): User
        removegame(gameId: ID!): User
    }
`;

module.exports = typeDefs;