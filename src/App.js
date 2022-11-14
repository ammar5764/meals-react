import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Acceuil from './pages/Acceuil';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Acceuil />} />
        </Routes>
      </BrowserRouter>
  
    </div>
  );
};

export default App;