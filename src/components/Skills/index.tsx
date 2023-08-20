import React from "react";
import html from "../../Images/html5.svg";
import css from "../../Images/css3.svg";
import bootstrap from "../../Images/bootstrap.svg";
import wordpress from "../../Images/wordpress.svg";
import antd from "../../Images/ant-design.svg";
import tailwind from "../../Images/tailwind-css.svg";
import react from "../../Images/react.svg";
import javascript from "../../Images/javascript.svg";
import redux from "../../Images/redux.svg";
import jQuery from "../../Images/jquery.svg";
import responsivedesign from "../../Images/responsive-design.svg";
import git from "../../Images/git.svg";
import MongoDB from "../../Images/mongodb.svg";
import linux from "../../Images/linux.svg";
import sass from "../../Images/sass.svg";
import nodejs from "../../Images/nodejs.svg";
import FTP from "../../Images/ftp.svg";
import database from "../../Images/database.svg";

function Skills() {
  return (
    <div
      id="skills"
      className="w-full font-roboto overflow-hidden pt-10 xl:!pb-10 pb-5 flex flex-col justify-center items-center z-50"
    >
      <h5 className="text-center xl:!py-5 w-full">
        <span className="font-vidaloka text-[#E5E3E3] md:!text-3xl text-2xl text-left">
          {/* I’M FAMIL with */}
          SKILLS
        </span>
      </h5>
      <div className="xl:!py-10 py-3 px-10 md:!px-20 flex justify-center">
        <div className="rounded-3xl sm:!py-10 py-2 flex flex-col justify-center max-w-[1000px] z-50">
          <div className="flex flex-wrap gap-5 justify-center py-5">
            <div className="bg-gradient-to-b from-[#162AB0]/80 to-black hover:bg-gradient-to-t text-[#E5E3E3] w-[180px] h-[70px] flex justify-center items-center gap-2 rounded-lg">
              HTML
              <img src={html} alt="HTML5" className="w-[60px] h-[60px]" />
            </div>
            <div className="bg-gradient-to-b from-[#162AB0]/80 to-black hover:bg-gradient-to-t text-[#E5E3E3] w-[180px] h-[70px] flex justify-center items-center gap-2 rounded-lg">
              CSS
              <img src={css} alt="CSS3" className="w-[60px] h-[60px]" />
            </div>
            <div className="bg-gradient-to-b from-[#162AB0]/80 to-black hover:bg-gradient-to-t text-[#E5E3E3] w-[180px] h-[70px] flex justify-center items-center gap-2 rounded-lg">
              JavaScript
              <img
                src={javascript}
                alt="JavaScript"
                className="w-[60px] h-[60px]"
              />
            </div>
            <div className="bg-gradient-to-b from-[#162AB0]/80 to-black hover:bg-gradient-to-t text-[#E5E3E3]/80 w-[180px] h-[70px] flex justify-center items-center gap-2 rounded-lg">
              Bootstrap
              <img
                src={bootstrap}
                alt="Bootstrap"
                className="w-[60px] h-[60px]"
              />
            </div>
            <div className="bg-gradient-to-b from-[#162AB0]/80 to-black hover:bg-gradient-to-t text-[#E5E3E3]/80 w-[180px] h-[70px] flex justify-center items-center gap-2 rounded-lg">
              WordPress
              <img
                src={wordpress}
                alt="WordPress"
                className="w-[60px] h-[60px]"
              />
            </div>
            <div className="bg-gradient-to-b from-[#162AB0]/80 to-black hover:bg-gradient-to-t text-[#E5E3E3]/80 w-[180px] h-[70px] flex justify-center items-center gap-2 rounded-lg">
              Ant-Design
              <img src={antd} alt="Ant-Design" className="w-[60px] h-[60px]" />
            </div>
            <div className="bg-gradient-to-b from-[#162AB0]/80 to-black hover:bg-gradient-to-t text-[#E5E3E3]/80 w-[180px] h-[70px] flex justify-center items-center gap-2 rounded-lg">
              tailwind css
              <img
                src={tailwind}
                alt="tailwind CSS"
                className="w-[60px] h-[60px]"
              />
            </div>
            <div className="bg-gradient-to-b from-[#162AB0]/80 to-black hover:bg-gradient-to-t text-[#E5E3E3]/80 w-[180px] h-[70px] flex justify-center items-center gap-2 rounded-lg">
              React
              <img src={react} alt="React" className="w-[60px] h-[60px]" />
            </div>
            <div className="bg-gradient-to-b from-[#162AB0]/80 to-black hover:bg-gradient-to-t text-[#E5E3E3]/80 w-[180px] h-[70px] flex justify-center items-center gap-2 rounded-lg">
              Redux
              <img src={redux} alt="Redux" className="w-[60px] h-[60px]" />
            </div>
            <div className="bg-gradient-to-b from-[#162AB0]/80 to-black hover:bg-gradient-to-t text-[#E5E3E3]/80 w-[180px] h-[70px] flex justify-center items-center gap-2 rounded-lg">
              Git
              <img src={git} alt="Git" className="w-[60px] h-[60px]" />
            </div>

            <div className="bg-gradient-to-b from-[#162AB0]/80 to-black hover:bg-gradient-to-t text-[#E5E3E3]/80 w-[180px] h-[70px] flex justify-center items-center gap-2 rounded-lg">
              jQuery
              <img src={jQuery} alt="jQuery" className="w-[60px] h-[60px]" />
            </div>
            <div className="bg-gradient-to-b from-[#162AB0]/80 to-black hover:bg-gradient-to-t text-[#E5E3E3]/80 w-[180px] h-[70px] flex justify-center items-center gap-2 rounded-lg">
              Responsive Design
              <img
                src={responsivedesign}
                alt="responsive design"
                className="w-[60px] h-[60px]"
              />
            </div>
            <div className="bg-gradient-to-b from-[#162AB0]/80 to-black hover:bg-gradient-to-t text-[#E5E3E3]/80 w-[180px] h-[70px] flex justify-center items-center gap-2 rounded-lg">
              SASS
              <img src={sass} alt="SASS" className="w-[60px] h-[60px]" />
            </div>
            <div className="bg-gradient-to-b from-[#162AB0]/80 to-black hover:bg-gradient-to-t text-[#E5E3E3]/80 w-[180px] h-[70px] flex justify-center items-center gap-2 rounded-lg">
              NodeJS
              <img src={nodejs} alt="NodeJS" className="w-[60px] h-[60px]" />
            </div>
            {/* <div className="bg-[#F0F0E8] w-[180px] h-[70px] flex justify-center items-center gap-2 rounded-lg">
              Linux
              <img src={linux} alt="Linux" className="w-[60px] h-[60px]" />
            </div>
            <div className="bg-[#F0F0E8] w-[180px] h-[70px] flex justify-center items-center gap-2 rounded-lg">
              FTP
              <img src={FTP} alt="FTP" className="w-[60px] h-[60px]" />
            </div> */}
            <div className="bg-gradient-to-b from-[#162AB0]/80 to-black hover:bg-gradient-to-t text-[#E5E3E3]/80 w-[180px] h-[70px] flex justify-center items-center gap-2 rounded-lg">
              MongoDB
              <img src={MongoDB} alt="MongoDB" className="w-[60px] h-[60px]" />
            </div>
            {/* <div className="bg-[#F9F9fd] text-[#6f6f6f] w-[180px] h-[70px] flex justify-center items-center gap-2 rounded-lg">
              Database
              <img
                src={database}
                alt="Database"
                className="w-[60px] h-[60px]"
              />
            </div> */}
          </div>
          {/* <div className="py-10">
            <h6 className="xl:!text-[30px] md:!text-[30px] text-[24px] pb-5 leading-tight font-poppins font-normal text-left pl-20">
              Soft Skills
            </h6>
            <div className="text-[#F0F0E8] mx-10">
              <ul className="list-disc py-2  text-[#726456] px-10 text-left grid grid-cols-2">
                <li>Communication Skills</li>
                <li>Attention to details</li>
                <li>Team Work</li>
                <li>Problem Solving Skills</li>
                <li>Adaptivity</li>
              </ul>
            </div>
          </div> */}
          {/* <div className="py-10">
            <h6 className="xl:!text-[30px] md:!text-[30px] text-[24px] pb-5 leading-tight font-poppins font-normal text-left pl-20">
              Languages
            </h6>
            <div className="text-[#F0F0E8] mx-10">
              <ul className="list-disc py-2  text-[#726456] px-10 text-left">
                <li>Malayalam</li>
                <li>English</li>
              </ul>
            </div>
          </div> */}
          {/* <div className="py-10">
            <h6 className="xl:!text-[30px] md:!text-[30px] text-[24px] pb-5 leading-tight font-poppins font-normal text-left pl-20">
              GitHub
            </h6>
            <div className="text-[#F0F0E8] mx-10">
              <p className="list-disc py-2  text-[#726456] px-10 text-left hover:bg-[#F0F0E8] w-fit">
                <a
                  href="https://www.github.com/swethakrishnan99"
                  target="_blank"
                  className=""
                >
                  swethakrishnan99
                </a>
              </p>
            </div> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default Skills;
