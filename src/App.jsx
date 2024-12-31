import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css'

import SideBar from './components/SideBar';
import General2 from './pages/general2';
import General3 from './pages/general3';
import Overview from './pages/Overview';


function App() {
  return (
    <div className='appContainer'>
      <SideBar />
      <div className='appContent'>
        <div className='topBar'></div>
        <div className='router'>
          <Routes>
            <Route path='/Geral' element={<Overview />} />
            <Route path='/Pedidos' element={<General2 />} />
            <Route path='/Teste' element={<General3 />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;