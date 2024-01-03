// components/Header.js

import './Header.css'
import React from 'react';
import Logo from '../../assets/me.png';
import { TypeAnimation } from 'react-type-animation';
import NavBar from '../../components/Navbar/Navbar'
import {Image} from "@nextui-org/react";

// h-screen flex flex-row items-center justify-center 
//<div class='flex justify-center'>
//  <NavBar />
//</div>
const Header = () => {
  return (
    <header class='h-screen'>


      <div class='flex flex-row items-center justify-center'>
        <section id='animatedText'>
          <h1 class="flex-auto text-3xl font-bold">Hi 👋, I'm Hitesh Choudhary</h1>
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
            style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={Infinity}
          />
          {/* Add navigation links if needed */}
        </section>
        <div class='z-0'>
          <Image 
            src={Logo} 
            class="flex-auto" 
            width='450' 
            height='530' 
            alt="Hitesh Choudhary" 
          />
        </div> 
      </div>
    </header>
  );
};

export default Header;
