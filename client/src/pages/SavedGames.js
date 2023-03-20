import React, { useState, useEffect } from "react";
import {
  Jumbotron,
  Container,
  CardColumns,
  Card,
  Button,
} from "react-bootstrap";

import { removeGameId } from "../utils/localStorage";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import Auth from "../utils/auth";
import { REMOVE_GAME } from "../utils/mutations";

const SavedGames = () => {
  const { loading, data } = useQuery(QUERY_ME);
  const [removeGame, { error }] = useMutation(REMOVE_GAME);
  const userData = data?.me || {};

  const handleDeleteGame = async (gameId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const { data } = await removeGame({
        variables: { gameId },
      });
      // Remove gameid from localStorage
      removeGameId(gameId);
    } catch (err) {
      console.error(err);
    }
  };

  // Error handling
  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      <Jumbotron fluid className="text-light bg-dark">
        <Container>
          <h1>Viewing saved games!</h1>
        </Container>
      </Jumbotron>
      <Container>
        <h2>
          {userData.savedGames.length
            ? `Viewing ${userData.savedGames.length} saved ${
                userData.savedGames.length === 1 ? "game" : "games"
              }:`
            : "You have no saved games!"}
        </h2>
        <CardColumns>
          {userData.savedGames.map((game) => {
            return (
              <Card key={game.gameId} border="dark">
                {game.image ? (
                  <Card.Link href={game.link} target="_blank" rel="noreferrer">
                    <Card.Img
                      src={game.image}
                      alt={`The cover for ${game.title}`}
                      variant="top"
                    />
                  </Card.Link>
                ) : null}
                <Card.Body>
                  <Card.Title>{game.title}</Card.Title>
                  <p className="small">Authors: {game.price}</p>
                  <Card.Text>{game.description}</Card.Text>
                  <Button
                    className="btn-block btn-danger"
                    onClick={() => handleDeleteGame(game.gameId)}
                  >
                    Delete this Game!
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default SavedGames;
