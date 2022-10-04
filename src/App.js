import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './views/Login';
import Profile from './views/Profile';
import * as React from 'react';
import ResponsiveAppBar from './components/NavBar/ReponsiveAppbar';

function App() {

  return (
    <BrowserRouter>
      <div className='App'>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
