import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages'
import Pokedexgo from './pages/pokedexGo'
import SigninPage from './pages/signin';
import SignupPage from './pages/signup';
import Pokemon from "./pages/pokemon"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
      <Route path= '/' element = {<Home />}/>
      <Route path= '/signin' element = {<SigninPage />}/>
      <Route path= '/signup' element = {<SignupPage />}/>
      <Route path = '/pokedexgo' element = {<Pokedexgo />}/>
      <Route path = '/pokemon' element = {<Pokemon />}/>
      </Routes>
    </Router>
  );
}

export default App;

