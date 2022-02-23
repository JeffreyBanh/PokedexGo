import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages'
import Pokedexgo from './pages/pokedexGo'
import SigninPage from './pages/signin';
import SignupPage from './pages/signup';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';
import { PokemonsContainer, PokemonContainer } from './containers/PokemonsContainer';
import PokedexListPage from './pages/pokedexList'
import PokemonPage from './components/PokemonPage/PokemonPage'
function App() {


  // const client2 = new ApolloClient({
  //   uri: 'https://graphql-pokemon2.vercel.app'
  // });

  const client = new ApolloClient({
    request: (operation) => {
      const token = localStorage.getItem("id_token");
  
      operation.setContext({
        headers: {
          authorization: token ? `Bearer ${token}` : "",
        },
      });
    },
    uri: "/graphql",
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
          <Route path = '/pokedexgo/pokemon/:pokemonId' element =  {<PokedexListPage />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
