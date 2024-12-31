import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css'

import SideBar from './components/SideBar';
import Overview from './pages/Overview';
import Orders from './pages/Orders';
import TopBar from './components/TopBar';


function App() {
  return (
    <div className='appContainer'>
      <SideBar />
      <div className='appContent'>
        <TopBar />
        <div className='router'>
          <Routes >
            <Route path='/' element={<Overview />} />
            <Route path='/orders' element={<Orders />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;