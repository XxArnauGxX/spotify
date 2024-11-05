import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const UserProfile = lazy(() => import('./pages/UserProfile'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <div className="content">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/perfil" component={UserProfile} />
              <Route path="/contacto" component={Contact} />
            </Switch>
          </div>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;