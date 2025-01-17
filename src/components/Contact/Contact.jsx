// components/Contact.js
import {Input, Button, Textarea} from "@nextui-org/react";
import emailjs from '@emailjs/browser';

//import { Link, NavLink } from 'react-router-dom'
import { FaFacebookSquare,
          FaInstagramSquare,
          FaSnapchatSquare,
          FaWhatsappSquare,
          FaLinkedin,
          FaGithubSquare } from "react-icons/fa";
import React, { useRef, useState } from 'react';

export const Contact = () => {
  const form = useRef();
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'contact_service',
      'contact_form',
       form.current,
      'YaPMLOMlIl9l4YzFx')
    .then(
      () => {
        alert('Message successfully sent!')
        window.location.reload(false)
      },
      () => {
        alert('Failed to send the message, please try again')
      }
    );
  };

  return (
    
    <section id="contact" class="h-screen">
      <h2>Get in touch for a chat</h2>
        <div className="flex w-full flex-col md:flex-nowrap gap-4">
          <form ref={form} onSubmit={sendEmail}>
          <div class="flex flex-col gap-4">
            <div class="flex gap-4">
              <input type="hidden" name="contact_number" value={count} />
              <Input 
              type="text"
              name="name"
              label="Name"
              placeholder="Full name"
            />
              <Input
              type="email"
              name="email"
              label="Email"
              placeholder="Email address"
            />
            </div>
            <div class="flex gap-4 z-0">
              <Input
              type="tel"
              label="Phone"
              name="phone"
              placeholder="Mobile number"
            />
              <Input 
              type="text"
              label="Company"
              name="company"
              placeholder="Company name"
            />
            </div>

            <div class="z-0">
              <Textarea 
            isRequired
            type="text"
            name="message"
            label="Message"
            placeholder="What's on your mind?"
            className=""
            />
            </div>

            <Button 
            radius="full" 
            type="submit"
            onClick={handleIncrement}
            className="w-9 bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
            Submit
            </Button>
          </div>
          </form>
      <div class="flex flex-row">
        <a 
          class="flex-auto"
          href="https://www.facebook.com/hiiteshh"
          rel="noreferrer"
          target="_blank"
        >
        <FaFacebookSquare size="60px" color='#cacfcc'/>
        </a>
         <a
          class="flex-auto"
          href="https://www.instagram.com/imhiteshc"
          rel="noreferrer"
          target="_blank"
          >
            <FaInstagramSquare  size="60px" color='#cacfcc'/>
          </a>
          <a
          class="flex-auto"
          href="https://wa.me/+610450625800"
          rel="noreferrer"
          target="_blank"
          >
            <FaWhatsappSquare  size="60px" color='#cacfcc'/>
          </a>
         <a
          class="flex-auto"
          href="https://github.com/ihiteshi"
          target="_blank"
          rel="noreferrer"
          >
            <FaGithubSquare  size="60px" color='#cacfcc'/>
          </a>
         <a
          href="https://www.linkedin.com/in/hitesh-choudhary-62386b10a/"
          target="_blank"
          rel="noreferrer"
          >
            <FaLinkedin size="60px" color='#cacfcc'/>
        </a>
      </div>
      </div>
      {/* Add a contact form or your contact information */}
    </section>
  );
};

export default Contact;
