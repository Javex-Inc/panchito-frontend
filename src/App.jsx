import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SideBar from './components/SideBar';
import General from './pages/general';
import General2 from './pages/general2';
import General3 from './pages/general3';
import './App.css'

function App() {
  return (
    <div className='container'>
      <SideBar />
      <div className='content'>
        <div className='topBar'></div>
        <div className='router'>
          <Routes>
            <Route path='/Geral' element={<General />} />
            <Route path='/Pedidos' element={<General2 />} />
            <Route path='/Teste' element={<General3 />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;