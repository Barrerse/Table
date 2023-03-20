const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String
        gameCount: Int
        savedGames: [Game]
    }
    
    type Game {
        gameId: ID!
        authors: [String]
        description: String
        title: String!
        image: String
        link: String
    }
    input GameInput {
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
        saveGame(gameData: GameInput!): User
        removeGame(gameId: ID!): User
    }
`;

module.exports = typeDefs;