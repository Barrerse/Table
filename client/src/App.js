import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchGames from './pages/SearchGames';
import SavedGames from './pages/SavedGames';
import Navbar from './components/Navbar';
import { ApolloClient, InMemoryCache, createHttpLink, ApolloProvider } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Navbar />
          
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;