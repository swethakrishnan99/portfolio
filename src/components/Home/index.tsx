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
import Background from "../../Images/bghome.jpg";
import Skills from "../Skills";

function Home() {
  return (
    <div className="relative">
      {/* <div className="fixed hidden flex-col items-center bottom-5 gap-3 px-4 text-2xl text-[#DDD0C8] md:!flex">
        <a href="" className="hover:!text-[#e14678]/50 cursor-none">
          <GithubOutlined />
        </a>
        <a href="" className="hover:!text-[#e14678]/50 cursor-none">
          <FacebookOutlined />
        </a>
        <a href="" className="hover:!text-[#e14678]/50 cursor-none">
          <InstagramOutlined />
        </a>
        <a href="" className="hover:!text-[#e14678]/50 cursor-none">
          <LinkedinOutlined />
        </a>
        <div className="h-[200px] border-[1px] border-[#DDD0C8] w-0"></div>
      </div> */}
      <div className="w-[200px] border-[1px] border-[#DDD0C8] h-0 fixed bottom-5 left-7 md:block hidden"></div>
      <Navbar />
      <IntroComponent />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <footer className="w-full flex items-center justify-center h-[80px] md:!text-base text-sm bg-white text-[#6f6f6f]">
        <p>© 2023 Swetha Krishnan. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
