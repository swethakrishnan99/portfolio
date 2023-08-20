import React, { useState } from "react";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import logo from "../../logo.svg";
function Navbar() {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  return (
    <div className="w-full lg:!h-20 h-16 overflow-hidden bg-[#000000]/60 text-[#E5E3E3] flex sticky top-0 right-0 z-[5000]">
      {navOpen ? (
        <div className="w-full fixed flex lg:!flex-row flex-col items-center justify-start lg:!justify-center pb-5">
          {/* <div>
            <img src={logo} alt="" />
          </div>
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
          </div> */}
        </div>
      ) : (
        <div className="w-full h-full px-20 flex justify-between items-center font-roboto">
          <div className="">
            <img
              src={logo}
              alt=""
              className="lg:!w-[60px] w-[50px] lg:!h-[60px] h-[50px]"
            />
          </div>
          <div className="flex items-center xl:!min-w-[900px] lg:!min-w-[700px]">
            <button onClick={() => setNavOpen(true)} className="lg:hidden flex">
              <MenuOutlined />
            </button>
            <ol className="lg:!flex justify-evenly w-full hidden">
              <li key={1} className="">
                <a href="#home">Home</a>
              </li>
              <li key={2} className="">
                <a href="#about">About</a>
              </li>
              <li key={3} className="">
                <a href="#skills">Skills</a>
              </li>
              <li key={4} className="">
                <a href="#work">Work</a>
              </li>
              <li key={5} className="">
                <a href="#resume">Resume</a>
              </li>
              <li key={6} className="">
                <a href="#contact">Contact</a>
              </li>
            </ol>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;

//  <div className="flex h-20 justify-end items-center px-9 text-lg font-medium font-poppins w-full lg:!hidden">
//             <div className="bg-slate-500">
//               <img src={logo} alt="" />
//             </div>
//             <button onClick={() => setNavOpen(true)}>
//               <MenuOutlined />
//             </button>
//           </div>
//           <div className="lg:!flex justify-end items-end font-poppins font-normal md:!text-[18px] text-base px-10 w-full hidden "></div>
