import { gql } from "@apollo/client";

export const QUERY_ME = gql`
    {
        me {
            _id
            username
            email
            gameCount
            savedGames {
                gameId
                title
                description
                image
                link
                price
            }
        }
    }
`;