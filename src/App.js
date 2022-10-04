import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './views/Login';
import Profile from './views/Profile';
import Workouts from './views/Workouts';
import Exercises from './views/Exercises';
import Dashboard from './views/Dashboard';
import Programs from './views/Programs';
import Contributors from './views/Contributors';
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
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/exercises" element={<Exercises />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/contributors" element={<Contributors />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
