import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages'
import Pokedexgo from './pages/pokedexGo'

function App() {
  return (
    <Router>
      <Routes>
      <Route path= '/' element = {<Home />}/>
      <Route path = '/pokedexgo' element = {<Pokedexgo />}/>
      </Routes>
    </Router>
  );
}

export default App;

