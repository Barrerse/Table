Board Game Atlas API Full Stack Application
===========================================

This is a full-stack web application built using the MERN (MongoDB, Express, React, and Node.js) stack, which utilizes the Board Game Atlas API to provide users with a platform to search for and purchase board games. The application is styled using Tailwind CSS.

Table of Contents
-----------------

-   [Getting Started](#getting-started)
-   [Features](#features)
-   [Dependencies](#dependencies)
-   [API Reference](#api-reference)
-   [Contributing](#contributing)
-   [License](#license)

Getting Started
---------------

To run this application on your local machine, follow these steps:

1.  Clone the repository to your local machine
2.  Navigate to the project root directory in your terminal
3.  Run `npm install` to install all the necessary dependencies
4.  Create a `.env` file in the root directory and add the following environment variables:
    -   `PORT` (optional): The port number to run the server on. Defaults to `5000`.
    -   `MONGO_URI`: The URI to your MongoDB database.
    -   `JWT_SECRET`: A secret string used to sign and verify JSON Web Tokens (JWTs).
    -   `BOARD_GAME_ATLAS_API_KEY`: Your Board Game Atlas API key.
5.  Run `npm run dev` to start the application in development mode.

Features
--------

This application provides the following features:

-   Search for board games by name, category, mechanics, or designer
-   View details about each board game, including images, description, rating, and price
-   Add board games to your cart
-   Checkout and purchase board games using Stripe

Dependencies
------------

This application uses the following main dependencies:

### Server-side

-   Express: A fast and minimal web framework for Node.js.
-   MongoDB: A popular NoSQL database used to store application data.
-   Mongoose: A MongoDB object modeling tool designed to work in an asynchronous environment.
-   JSON Web Token (JWT): A standard for creating JSON-based access tokens that can be used for authentication and authorization.
-   bcrypt: A library for hashing and salting passwords.
-   Stripe: A payment processing platform that allows you to accept payments securely and easily.

### Client-side

-   React: A JavaScript library for building user interfaces.
-   React Router: A routing library for React.
-   Axios: A promise-based HTTP client for the browser and Node.js.
-   Redux: A predictable state container for JavaScript apps.
-   React-Redux: A library that provides bindings between React and Redux.
-   Redux Thunk: A middleware that allows you to write action creators that return a function instead of an action.
-   Tailwind CSS: A utility-first CSS framework for rapidly building custom user interfaces.

API Reference
-------------

This application uses the Board Game Atlas API to search for board games and retrieve details about each game. You can find more information about the API at <https://www.boardgameatlas.com/api/docs>.

Contributing
------------

If you would like to contribute to this project, please follow these steps:

1.  Fork the repository
2.  Create a new branch (`git checkout -b feature/your-feature`)
3.  Make your changes and commit them (`git commit -am 'Add some feature'`)
4.  Push to the branch (`git push origin feature/your-feature`)
5.  Create a new pull request

License
-------

This project is licensed under the MIT License. See the `LICENSE` file for more information.
