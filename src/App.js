import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import keycloak from './Keycloak';
import Login from './views/Login';
import Profile from './views/Profile';
import Workouts from './views/Workouts';
import Exercises from './views/Exercises';
import Dashboard from './views/Dashboard';
import Programs from './views/Programs';
import Contributors from './views/Contributors';
import PrivateRoute from './helpers/PrivateRoute';
import * as React from 'react';
import ResponsiveAppBar from './components/NavBar/ReponsiveAppbar';

function App() {

  return (
    <ReactKeycloakProvider authClient={keycloak}>
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
            <Route path="/contributors" element={
              <PrivateRoute>
                <Contributors />
              </PrivateRoute>
            }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </ReactKeycloakProvider>
  );
}

export default App;
