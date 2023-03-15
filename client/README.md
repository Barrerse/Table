Board Game Atlas API Full Stack Application - React
===================================================

This is the React front-end portion of the full-stack Board Game Atlas API application. This application is built using React and Redux, and utilizes Tailwind CSS for styling.

Table of Contents
-----------------

-   [Getting Started](#getting-started)
-   [Features](#features)
-   [Dependencies](#dependencies)
-   [Contributing](#contributing)
-   [License](#license)

Getting Started
---------------

To run this application on your local machine, follow these steps:

1.  Clone the repository to your local machine
2.  Navigate to the `client` directory in your terminal
3.  Run `npm install` to install all the necessary dependencies
4.  Create a `.env` file in the `client` directory and add the following environment variable:
    -   `REACT_APP_API_BASE_URL`: The base URL of the back-end API. For example, `http://localhost:5000/api`.
5.  Run `npm start` to start the application in development mode.

Features
--------

This React application provides the following features:

-   Search for board games by name, category, mechanics, or designer
-   View details about each board game, including images, description, rating, and price
-   Add board games to your cart
-   Checkout and purchase board games using Stripe

Dependencies
------------

This application uses the following main dependencies:

-   React: A JavaScript library for building user interfaces.
-   React Router: A routing library for React.
-   Axios: A promise-based HTTP client for the browser and Node.js.
-   Redux: A predictable state container for JavaScript apps.
-   React-Redux: A library that provides bindings between React and Redux.
-   Redux Thunk: A middleware that allows you to write action creators that return a function instead of an action.
-   Tailwind CSS: A utility-first CSS framework for rapidly building custom user interfaces.

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
