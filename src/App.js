import React from "react";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Home from "./pages/Home.js";
import "./styles/Header.css";
import "./styles/Footer.css";
import "./styles/Home.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;