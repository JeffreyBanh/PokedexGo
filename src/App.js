import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages'
import pokedexgo from './pokedexgo'


function App() {
  return (
    <Router>
      <Routes>
      <Route path= '/' element = {<Home />}/>
      <Route path = '/pokedexgo' element = {<pokedexgo />}/>
      </Routes>
    </Router>
  );
}

export default App;
