// App.js

import React from 'react';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';
import AppTabs from './components/NavbarTest';
import { Route, Routes, useNavigate } from 'react-router-dom';
import {NextUIProvider} from '@nextui-org/react';

function App() {
  const navigate = useNavigate();

  return (
    <NextUIProvider navigate={navigate}>
    <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <About />
    <Contact />
    </div>
    </NextUIProvider>
  );
}

export default App;
