// App.js

import React from 'react';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ContactUs from './components/ContactUs/ContactUs';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
