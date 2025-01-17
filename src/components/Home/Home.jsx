// components/Header.js

import './Home.css'
import React from 'react';
import Logo from '../../assets/IMG_1517.PNG';
import { TypeAnimation } from 'react-type-animation';
import NavBar from '../Navbar/Navbar'
import NavBarTest from '../NavbarTest'
import {Image, Navbar} from "@nextui-org/react";
import Footer from '../Footer/Footer';

// h-screen flex flex-row items-center justify-center 
//<div class='flex justify-center'>
//  <NavBar />
//</div>
const Home = () => {
  return (
    <header id='home' class='h-screen flex flex-col items-center pt-6'>
      
      <div class='md:flex md:flex-row md:space-x-10 sm:flex-col items-center container mx-auto'>
        <div class="basis-1/2 lg:text-3xl md:text-2xl inline-block text-xl pt-4">
          <h1 class="items-center">Hi 👋, I'm Hitesh Choudhary</h1>
          <div id='animatedText'>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                1000,
                ' Network Administrator',
                1000,
                ' Web Designer',
                1000,
                ' FullStack Developer',
                1000,
                ' React Developer',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                ' .NET Developer',
                1000,
                ' Python Developer',
                1000,
                ' Data Analyst',
                1000
              ]}
              wrapper="span"
              speed={20}
              className=''
              style={{ display: 'inline-block', marginLeft: '73px' }}
              repeat={Infinity}
            />
            {/* Add navigation links if needed */}
          </div>
        </div>
        <div class='basis-1/2 z-0 inline-block pt-10'>
          <Image 
            isZoomed
            src={Logo} 
            className='2xl:w-unit-8xl md:w-unit-7xl w-unit-6xl lg:m-10 md:m-0 mt-10 flex justify-center'
            radius='lg' 
            alt="Hitesh Choudhary" 
          />
        </div> 
      </div>
      <Footer/>
    </header>
  );
};

export default Home;
