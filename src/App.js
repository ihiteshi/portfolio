// App.js

import React from 'react';
import NavBar from './components/Navbar/Navbar'
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';
import AppTabs from './components/NavbarTest';
import { Route, Routes, useNavigate, useHref } from 'react-router-dom';
import {NextUIProvider} from '@nextui-org/react';

function App() {
  const navigate = useNavigate();

  return (
    <NextUIProvider navigate={navigate} useHref={useHref}>
    <div className="App">
    <Routes>
      <Route path="#home" element={<Home />} />
      <Route path="#about" element={<About />} />
      <Route path="#contact" element={<Contact />} />
    </Routes>
    <Home />
    <About />
    <Contact />
    <Footer />
    </div>
    </NextUIProvider>
  );
}

export default App;
