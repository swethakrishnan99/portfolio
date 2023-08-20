import React, { useState } from "react";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import logo from "../../logo.svg";
function Navbar() {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  return (
    <div className="w-full lg:!h-20 h-16 overflow-hidden bg-[#000000]/60 text-[#E5E3E3] flex sticky top-0 right-0 z-[5000]">
      {navOpen ? (
        <div className="w-full fixed flex lg:!flex-row flex-col items-center justify-start lg:!justify-center pb-5">
          <div className="w-full flex justify-between items-center py-3 md:!px-20 px-10">
            <div className="">
              <img
                src={logo}
                alt=""
                className="lg:!w-[60px] md:!w-[50px] w-[40px] h-[40px] lg:!h-[60px]md:!h-[50px]"
              />
            </div>
            <button
              className="flex justify-center items-center"
              onClick={() => setNavOpen(false)}
            >
              <p className="pr-2 text-base">Close</p> <CloseOutlined />
            </button>
          </div>
          <div className="flex justify-end items-end font-roboto font-normal md:!text-[18px] text-base px-10 w-full">
            <ol className="flex lg:!flex-row flex-col justify-center items-center w-full lg:!gap-10 gap-2">
              <li
                key={1}
                className="py-[5px] border-[#162AB0] border-[1px] w-full"
              >
                <a href="#home" onClick={() => setNavOpen(false)}>
                  Home
                </a>
              </li>
              <li
                key={2}
                className="py-[5px] border-[#162AB0] border-[1px] w-full"
              >
                <a href="#about" onClick={() => setNavOpen(false)}>
                  About
                </a>
              </li>
              <li
                key={3}
                className="py-[5px] border-[#162AB0] border-[1px] w-full"
              >
                <a href="#skills" onClick={() => setNavOpen(false)}>
                  Skills
                </a>
              </li>
              <li
                key={4}
                className="py-[5px] border-[#162AB0] border-[1px] w-full"
              >
                <a href="#work" onClick={() => setNavOpen(false)}>
                  Work
                </a>
              </li>
              <li
                key={5}
                className="py-[5px] border-[#162AB0] border-[1px] w-full"
              >
                <a href="#resume" onClick={() => setNavOpen(false)}>
                  Resume
                </a>
              </li>
              <li
                key={6}
                className="py-[5px] border-[#162AB0] border-[1px] w-full"
              >
                <a href="#contact" onClick={() => setNavOpen(false)}>
                  Contact
                </a>
              </li>
            </ol>
          </div>
        </div>
      ) : (
        <div className="w-full h-full md:!px-20 px-10 flex justify-between items-center font-roboto">
          <div className="">
            <img
              src={logo}
              alt=""
              className="lg:!w-[60px] md:!w-[50px] w-[40px] h-[40px] lg:!h-[60px]md:!h-[50px]"
            />
          </div>
          <div className="flex items-center xl:!min-w-[900px] lg:!min-w-[700px]">
            <button onClick={() => setNavOpen(true)} className="lg:hidden flex">
              <MenuOutlined />
            </button>
            <ol className="lg:!flex justify-evenly w-full hidden">
              <li key={1} className="hover:text-[#162AB0] hover:font-bold">
                <a href="#home">Home</a>
              </li>
              <li key={2} className="hover:text-[#162AB0] hover:font-bold">
                <a href="#about">About</a>
              </li>
              <li key={3} className="hover:text-[#162AB0] hover:font-bold">
                <a href="#skills">Skills</a>
              </li>
              <li key={4} className="hover:text-[#162AB0] hover:font-bold">
                <a href="#work">Work</a>
              </li>
              <li key={5} className="hover:text-[#162AB0] hover:font-bold">
                <a href="#resume">Resume</a>
              </li>
              <li key={6} className="hover:text-[#162AB0] hover:font-bold">
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
