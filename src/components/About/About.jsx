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
      className="lg:h-screen flex items-center justify-center"
    >
      <div className="lg:w-4/5">
        <h2 className="lg:text-5xl">About Me</h2>
        <p class="lg:text-2xl">
          I am a dynamic and results-driven professional with a passion for
          technology and a proven track record in software engineering and
          network administration. Operating seamlessly across diverse operating
          systems, including MacOS, Windows, and Linux, I have honed my skills
          in C#.Net, Java, Python 3.0, JavaScript ES6, HTML5, and CSS3.
        </p>
        <div class="flex p-4">
          <RiReactjsLine class="flex-auto" size="150px" color="#cacfcc" />
          <RiJavascriptLine class="flex-auto" size="150px" color="#cacfcc" />
          <FaPython class="flex-auto mt-2" size="130px" color="#cacfcc" />
        </div>
        <div class="flex p-4">
          <FaNode class="flex-auto p-3" size="150px" color="#cacfcc" />
          <SiDotnet class="flex-auto p-3 mt-2" size="150px" color="#cacfcc" />
        </div>
        <p class="lg:text-2xl">
          My educational background includes a Master's degree in Information
          Technology from Queensland University of Technology, where I
          specialized in network management, coupled with a Bachelor's degree in
          Computer Application from Jain University, focusing on mobile
          application development and computer security.
        </p>
        <p class="lg:text-2xl">
          Certified in{" "}
          <a
            href="https://learn.microsoft.com/en-us/users/hiteshchoudhary-6988/credentials/5e0930dedf32d1a1"
            class="flex-auto underline"
            rel="noreferrer"
            target="_blank"
          >
            Microsoft Azure Fundamentals
          </a>{" "}
          and skilled in{" "}
          <a
            href="https://learn.microsoft.com/en-us/users/hiteshchoudhary-6988/credentials/33275301692cc018"
            class="flex-auto underline"
            rel="noreferrer"
            target="_blank"
          >
            Microsoft Power BI Data Analyst
          </a>
          , I bring a comprehensive understanding of cloud computing and data
          analytics to the table.
        </p>
        <div class="flex p-2">
          <SiMicrosoftazure
            class="flex-auto p-3 mt-2"
            size="150px"
            color="#cacfcc"
          />
          <SiAmazonaws
            class="flex-auto p-3 mt-2"
            size="150px"
            color="#cacfcc"
          />
          <SiGit class="flex-auto p-3 mt-2" size="150px" color="#cacfcc" />
        </div>
      </div>
    </section>
  );
};

export default About;
