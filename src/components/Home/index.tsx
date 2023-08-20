// import {
//   FacebookOutlined,
//   GithubOutlined,
//   InstagramOutlined,
//   LinkedinOutlined,
// } from "@ant-design/icons";
import React from "react";
import IntroComponent from "../Intro";
import Navbar from "../Navbar";
import About from "../About";
import Experience from "../Experience";
import Contact from "../Contact";
import Projects from "../Projects";
import Skills from "../Skills";
import Background from "../../Images/background.svg";

function Home() {
  return (
    <>
      <div className="w-full min-h-screen z-10">
        <div className="w-full h-full -z-10">
          <img
            src={Background}
            className="w-full h-full object-cover object-top absolute top-0"
            alt=""
          />
        </div>

        <Navbar />

        <div className="w-full max-w-[1550px] mx-auto z-50">
          <IntroComponent />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </div>
        <div className="relative bg-black/50">
          <footer className="w-full flex items-center justify-center h-[80px] md:!text-base text-sm text-[#E5E3E3]/80">
            <p>© 2023 Swetha Krishnan. All Rights Reserved.</p>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Home;
