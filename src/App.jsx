import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Registrar from './pages/Registrar';
import Perfil from './pages/Perfil';
import React from 'react';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/registrar" element={<Registrar />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;