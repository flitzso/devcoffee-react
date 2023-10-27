import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Coffee from './components/Coffee';
import Cadastro from './components/Cadastro';
import Home from './components/Home';
import Pesquisar from './components/Pesquisar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Coffee />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/home" element={<Home />} />
        <Route path="/pesquisar" element={<Pesquisar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
