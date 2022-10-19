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
import Exercisepage from './views/Exercisepage';
//import Contributors from './views/Contributors';
import PrivateRoute from './helpers/PrivateRoute';
import * as React from 'react';
import ResponsiveAppBar from './components/NavBar/ReponsiveAppbar';
import ContributorRoute from './helpers/ContributorRoute';
import LoggedInRoute from './helpers/LoggedInRoute';
import NotFound from './components/NotFound/NotFound';
import HandleLogin from './views/HandleLogin';
import Workoutpage from './views/Workoutpage';
import Programpage from './views/Programpage';
import Contributorpage from './views/ContributersPage';

function App() {

  return (
    <ReactKeycloakProvider
      authClient={keycloak}
      initOptions={{
        onLoad: "check-sso",
        promiseType: 'native',
        checkLoginIframe: false,
      }}
      onEvent={(ev, err) => console.log(ev + '   ' + err)
      }
    >
      <BrowserRouter>
        <ResponsiveAppBar />
        <div className='App'>
          <Routes>
            <Route path="/" element={
              <LoggedInRoute>
                <Login />
              </LoggedInRoute>
            } />
            <Route path="/handlelogin" element={
              <PrivateRoute>
                <HandleLogin />
              </PrivateRoute>
            }
            />
            <Route path="/profile" element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
            />
            <Route path="/workouts" element={
              <PrivateRoute>
                <Workouts />
              </PrivateRoute>
            }
            />
            <Route path="/workout/:id" element={
              <PrivateRoute>
                <Workoutpage />
              </PrivateRoute>
            }
            />
            <Route path="/program/:id" element={
              <PrivateRoute>
                <Programpage />
              </PrivateRoute>
            }
            />
            <Route path="/exercises" element={
              <PrivateRoute>
                <Exercises />
              </PrivateRoute>
            }
            />
            <Route path="/dashboard" element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
            />
            <Route path="/programs" element={
              <PrivateRoute>
                <Programs />
              </PrivateRoute>
            }
            />
            <Route path="/exercise/:id" element={
              <PrivateRoute>
                <Exercisepage />
              </PrivateRoute>
            }
            />
            <Route path="/contributors" element={
              <PrivateRoute>
                <ContributorRoute> 
                  <Contributorpage />
                </ContributorRoute> 
              </PrivateRoute>
            }
            />
            
            <Route path="/*" element={
              <NotFound />
            }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </ReactKeycloakProvider>
  );
}

export default App;


//programs[] = json.parse("mefit-backend-api.com/api/programs/{keykloakid}" + { keycloak.tokenParsed.user.id })