import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages'
import Pokedexgo from './pages/pokedexGo'
import SigninPage from './pages/signin';
import SignupPage from './pages/signup';


function App() {
  return (
    <Router>
      <Routes>
      <Route path= '/' element = {<Home />}/>
      <Route path= '/signin' element = {<SigninPage />}/>
      <Route path= '/signup' element = {<SignupPage />}/>
      <Route path = '/pokedexgo' element = {<Pokedexgo />}/>
      </Routes>
    </Router>
  );
}

export default App;

