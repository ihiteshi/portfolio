// components/About.js

import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { RiJavascriptLine } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { SiDotnet } from "react-icons/si";
import { SiPowerbi } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { SiMicrosoftazure } from "react-icons/si";
import { SiAmazonaws } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { FaFacebookSquare } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-2" // add px-2 for mobile padding
    >
      <div className="w-full max-w-4xl">
        {" "}
        {/* responsive width */}
        <h2 className="text-3xl lg:text-5xl text-center mb-4">About Me</h2>
        <p className="text-base sm:text-lg lg:text-2xl text-center break-words mb-4 px-2">
          {/* break-words and px-2 for mobile, text size responsive */}I am a
          dynamic and results-driven professional with a passion for technology
          and a proven track record in software engineering and network
          administration. Operating seamlessly across diverse operating systems,
          including MacOS, Windows, and Linux, I have honed my skills in C#.Net,
          Java, Python 3.0, JavaScript ES6, HTML5, and CSS3.
        </p>
        <div className="flex p-2 flex-wrap justify-center gap-4">
          <RiReactjsLine
            className="flex-auto w-16 h-16 sm:w-24 sm:h-24 lg:w-[150px] lg:h-[150px]"
            color="#cacfcc"
          />
          <RiJavascriptLine
            className="flex-auto w-16 h-16 sm:w-24 sm:h-24 lg:w-[150px] lg:h-[150px]"
            color="#cacfcc"
          />
          <FaPython
            className="flex-auto w-14 h-14 sm:w-20 sm:h-20 mt-2 lg:w-[130px] lg:h-[130px]"
            color="#cacfcc"
          />
        </div>
        <div className="flex p-2 flex-wrap justify-center gap-4">
          <FaNode
            className="flex-auto w-16 h-16 sm:w-24 sm:h-24 p-2 lg:w-[150px] lg:h-[150px]"
            color="#cacfcc"
          />
          <SiDotnet
            className="flex-auto w-16 h-16 sm:w-24 sm:h-24 p-2 mt-2 lg:w-[150px] lg:h-[150px]"
            color="#cacfcc"
          />
        </div>
        <p className="text-base sm:text-lg lg:text-2xl text-center break-words mb-4 px-2">
          My educational background includes a Master's degree in Information
          Technology from Queensland University of Technology, where I
          specialized in network management, coupled with a Bachelor's degree in
          Computer Application from Jain University, focusing on mobile
          application development and computer security.
        </p>
        <p className="text-base sm:text-lg lg:text-2xl text-center break-words mb-4 px-2">
          Certified in{" "}
          <a
            href="https://learn.microsoft.com/en-us/users/hiteshchoudhary-6988/credentials/5e0930dedf32d1a1"
            className="underline"
            rel="noreferrer"
            target="_blank"
          >
            Microsoft Azure Fundamentals
          </a>{" "}
          and skilled in{" "}
          <a
            href="https://learn.microsoft.com/en-us/users/hiteshchoudhary-6988/credentials/33275301692cc018"
            className="underline"
            rel="noreferrer"
            target="_blank"
          >
            Microsoft Power BI Data Analyst
          </a>
          , I bring a comprehensive understanding of cloud computing and data
          analytics to the table.
        </p>
        <div className="flex p-2 flex-wrap justify-center gap-4">
          <SiMicrosoftazure
            className="flex-auto w-16 h-16 sm:w-24 sm:h-24 lg:w-[150px] lg:h-[150px] p-2 mt-2"
            color="#cacfcc"
          />
          <SiAmazonaws
            className="flex-auto w-16 h-16 sm:w-24 sm:h-24 lg:w-[150px] lg:h-[150px] p-2 mt-2"
            color="#cacfcc"
          />
          <SiGit
            className="flex-auto w-16 h-16 sm:w-24 sm:h-24 lg:w-[150px] lg:h-[150px] p-2 mt-2"
            color="#cacfcc"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
