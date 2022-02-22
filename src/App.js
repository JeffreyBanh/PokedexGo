import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages'
import Pokedexgo from './pages/pokedexGo'
import SigninPage from './pages/signin';
import SignupPage from './pages/signup';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';
import { PokemonsContainer } from './containers/PokemonsContainer';
import PokedexListPage from './pages/pokedexList'
import PokemonPage from './components/PokemonPage/PokemonPage';

function App() {
  const client = new ApolloClient({
    uri: 'https://graphql-pokemon2.vercel.app'
  });

  return (
        <ApolloProvider client = {client}>
      <Router>
        <Routes>
        <Route path= '/' element = {<Home />}/>
        <Route path= '/signin' element = {<SigninPage />}/>
        <Route path= '/signup' element = {<SignupPage />}/>
        <Route path = '/pokedexgo' element = {<Pokedexgo />}/>
        <Route path = '/pokedexgo/pokedexList' element = {<PokemonPage />}/>
        <Route path = '/pokedexgo/pokemon/:pokemonId' element =  {<PokemonsContainer />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;

