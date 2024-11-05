// src/App.js
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import UserProfile from './pages/UserProfile';
import Contact from './pages/Contact';
import BuscarArtistas from './pages/BuscarArtistas';
import ArtistaDetalle from './pages/ArtistaDetalle';

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
              <Route path="/buscar-artistas" component={BuscarArtistas} />
              <Route path="/artista/:id" component={ArtistaDetalle} />
            </Switch>
          </div>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;