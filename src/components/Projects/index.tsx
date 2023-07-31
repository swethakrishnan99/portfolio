import React from "react";
import { Carousel } from "antd";
import suitejarimg from "../../Images/suitejar.png";
import nintriaimg from "../../Images/nintriva.png";
import galaryvisonimg from "../../Images/galleryvision.png";
import mixrankimg from "../../Images/mixrank.png";

const contentStyle: React.CSSProperties = {
  height: "560px",
  color: "#000000",
  lineHeight: "160px",
  textAlign: "center",
  background: "#F9F9fd",
  // border: "2px solid #6f6f6f",
  borderRadius: "20px",
};

function Projects() {
  return (
    <div
      id="work"
      className="w-full font-poppins min-h-screen overflow-hidden text-[#010101] bg-[#fff] pt-20 pb-10 flex flex-col justify-center items-center "
    >
      <h5 className="text-center py-5 border-b-[1px] w-full">
        <span className="font-poppins md:!text-3xl text-2xl text-[#854fee] font-semibold text-left">
          WORK
        </span>
        <br />
      </h5>
      <div className="w-full max-w-[1500px] round-[20px] pt-5 px-10">
        <Carousel autoplay>
          <div>
            <div
              style={contentStyle}
              className="grid xl:!grid-cols-2 grid-cols-1 p-5"
            >
              <div className="flex flex-col h-full justify-center">
                <h6 className="xl:!text-[35px] md:!text-[35px] text-[#000000] text-[30px] leading-tight font-poppins font-bold text-center">
                  <a
                    href="https://suitejar.com/"
                    target="_blank"
                    className="hover:text-black hover:underline"
                  >
                    Suitejar
                  </a>
                </h6>
                <ul className="list-disc text-[#6f6f6f] leading-[30px] text-left px-10 py-2 xl:!block hidden font-poppins">
                  <li className="py-1">
                    Developed a Dynamic web application for growth.cx using
                    React while man- aging the state through redux.
                  </li>
                  <li className="py-1">
                    Used Ant Design tables, alerts, buttons, date picker,
                    tooltips, and tabs for ease of development.
                  </li>
                  <li className="py-1">
                    Implemented Firebase authentication for secure user
                    authentication and provided email and password accounts,
                    Google, and Facebook sign-up options.
                  </li>
                  <li className="py-1">
                    Implemented user plans - free, lite, plus, pro, and used
                    stripe for payment.
                  </li>
                  <li className="py-1">
                    closely monitored the website, fixed user issues and
                    improved the website’s overall performance.
                  </li>
                </ul>
              </div>

              <img
                src={suitejarimg}
                className="h-[500px] w-full object-contain"
              />
            </div>
          </div>
          <div>
            <div
              style={contentStyle}
              className="grid xl:!grid-cols-2 grid-cols-1 p-5"
            >
              <div className="flex flex-col h-full justify-center">
                <h6 className="xl:!text-[35px] md:!text-[35px] text-[#000000] text-[30px] leading-tight font-poppins font-bold text-center">
                  <a
                    href="https://gallery.vision/"
                    className="hover:text-black hover:underline"
                    target="_blank"
                  >
                    Gallery Vision
                  </a>
                </h6>
                <ul className="list-disc text-[#6f6f6f] leading-[30px] text-left px-10 py-2 xl:!block hidden font-poppins">
                  <li className="py-1">
                    Developed a WordPress website for client.
                  </li>
                  <li className="py-1">
                    Implemented Tailwind CSS for better styling and ease of
                    customization and added JavaScript animation to improve user
                    experience.
                  </li>
                </ul>
              </div>

              <img
                src={galaryvisonimg}
                className="h-[500px] w-full object-contain"
              />
            </div>
          </div>
          <div>
            <div
              style={contentStyle}
              className="grid xl:!grid-cols-2 grid-cols-1 p-5"
            >
              <div className="flex flex-col h-full justify-center">
                <h6 className="xl:!text-[35px] md:!text-[35px] text-[#000000] text-[30px] leading-tight font-poppins font-bold text-center">
                  <a
                    href="https://nintriva.com/"
                    className="hover:text-black hover:underline"
                    target="_blank"
                  >
                    Nintriva
                  </a>
                </h6>
                <ul className="list-disc text-[#6f6f6f] leading-[30px] text-left px-10 py-2 xl:!block hidden font-poppins">
                  <li className="py-1">
                    Developed a WordPress website for client.
                  </li>
                  <li className="py-1">
                    Implemented Tailwind CSS for better styling and ease of
                    customization and added JavaScript animation to improve user
                    experience.
                  </li>
                </ul>
              </div>

              <img
                src={nintriaimg}
                className="h-[500px] w-full object-contain"
              />
            </div>
          </div>
          <div>
            <div
              style={contentStyle}
              className="grid xl:!grid-cols-2 grid-cols-1 p-5"
            >
              <div className="flex flex-col h-full justify-center">
                <h6 className="xl:!text-[35px] md:!text-[35px] text-[#000000] text-[30px] leading-tight font-poppins font-bold text-center">
                  <a
                    href="https://mixrank.com/"
                    className="hover:text-black hover:underline"
                    target="_blank"
                  >
                    MixRank
                  </a>
                </h6>
                <ul className="list-disc text-[#6f6f6f] leading-[30px] text-left px-10 py-2 xl:!block hidden font-poppins">
                  <li className="py-1">
                    Developed a WordPress website with custom template blocks
                    where the client can update the website’s information
                    themself without a developer’s help.
                  </li>
                  <li className="py-1">
                    Implemented Tailwind CSS for better styling and ease of
                    customization and added JavaScript animation to improve user
                    experience.
                  </li>
                </ul>
              </div>
              <img
                src={mixrankimg}
                className="h-[500px] w-full object-contain"
              />
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Projects;
