import React, { useState } from "react";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import logo from "../../logo.svg";
function Navbar() {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  return (
    <div className="w-full lg:!h-20 overflow-hidden bg-[#fff] opacity-90 text-[#6f6f6f] flex sticky top-0 right-0 z-[5000]">
      {/* <img src={logo} alt="" /> */}

      {navOpen ? (
        <div className="w-full fixed bg-white flex lg:!flex-row flex-col items-center justify-start lg:!justify-center pb-5">
          <div className="flex h-20 justify-end items-center px-9 text-lg font-medium font-poppins w-full lg:!hidden">
            <button
              className="flex justify-center items-center"
              onClick={() => setNavOpen(false)}
            >
              <p className="pr-2 text-base">CLOSE</p> <CloseOutlined />
            </button>
          </div>
          <div className="flex justify-end items-end font-poppins font-normal md:!text-[18px] text-base px-10 w-full">
            <ol className="flex lg:!flex-row flex-col justify-center items-center w-full lg:!gap-10 gap-5">
              <li key={1} className="py-1">
                <a href="#home" onClick={() => setNavOpen(false)}>
                  HOME
                </a>
              </li>
              <li key={2} className="py-1">
                <a href="#about" onClick={() => setNavOpen(false)}>
                  ABOUT
                </a>
              </li>
              <li key={3} className="py-1">
                <a href="#skills" onClick={() => setNavOpen(false)}>
                  SKILLS
                </a>
              </li>
              <li key={4} className="py-1">
                <a href="#work" onClick={() => setNavOpen(false)}>
                  WORK
                </a>
              </li>
              <li key={5} className="py-1">
                <a href="#resume" onClick={() => setNavOpen(false)}>
                  RESUME
                </a>
              </li>
              <li key={6} className="py-1">
                <a href="#contact" onClick={() => setNavOpen(false)}>
                  CONTACT
                </a>
              </li>
            </ol>
          </div>
        </div>
      ) : (
        <div className="w-full h-full flex lg:!flex-row flex-col items-center justify-start lg:!justify-center">
          <div className="flex h-20 justify-end items-center px-9 text-lg font-medium font-poppins w-full lg:!hidden">
            <button onClick={() => setNavOpen(true)}>
              <MenuOutlined />
            </button>
          </div>
          <div className="lg:!flex justify-end items-end font-poppins font-normal md:!text-[18px] text-base px-10 w-full hidden ">
            <ol className="flex lg:!flex-row flex-col justify-center items-center w-full lg:!gap-10 gap-5">
              <li key={1} className="py-1">
                <a href="#home">HOME</a>
              </li>
              <li key={2} className="py-1">
                <a href="#about">ABOUT</a>
              </li>
              <li key={3} className="py-1">
                <a href="#skills">SKILLS</a>
              </li>
              <li key={4} className="py-1">
                <a href="#work">WORK</a>
              </li>
              <li key={5} className="py-1">
                <a href="#resume">RESUME</a>
              </li>
              <li key={6} className="py-1">
                <a href="#contact">CONTACT</a>
              </li>
            </ol>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
