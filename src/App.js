import React from 'react';
import './App.css';
import Homepage from './page/Homepage';
import About from './page/About';
import { Route, Routes } from 'react-router-dom';
import CharactersNavLinks from './page/CharactersNavLinks';

const App = () => (
  <div className="App">
    <h1>House M.D.</h1>
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/characters/*" element={<CharactersNavLinks/>} />
    </Routes>
  </div>
);

export default App;
