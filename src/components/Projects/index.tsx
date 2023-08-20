import React from "react";
import { Carousel } from "antd";
import suitejarimg from "../../Images/suitejar.png";
import nintriaimg from "../../Images/nintriva.png";
import galaryvisonimg from "../../Images/galleryvision.png";
import mixrankimg from "../../Images/mixrank.png";

// const contentStyle: React.CSSProperties = {
//   height: "560px",
//   color: "#000000",
//   lineHeight: "160px",
//   textAlign: "center",
//   background: "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(5,18,103,1) 59%)",
//   // border: "2px solid #6f6f6f",
//   borderRadius: "20px",
// };

function Projects() {
  return (
    <div
      id="work"
      className="w-full font-roboto overflow-hidden text-[#E5E3E3] pt-10 pb-10 flex flex-col justify-center items-center "
    >
      <h5 className="text-center py-5 w-full z-50">
        <span className="font-vidaloka md:!text-3xl text-2xl text-[#E5E3E3] text-left">
          WORK
        </span>
        <br />
      </h5>
      <div className="w-full max-w-[1500px] round-[20px] pt-5 px-10 md:!px-20 z-50">
        <Carousel autoplay>
          <div className="z-50">
            <div className="grid xl:!grid-cols-2 grid-cols-1 p-5 bg-[#162AB0]/40 rounded-2xl sm:!h-[560px] h-[360px]">
              <div className="flex flex-col h-full justify-center">
                <h6 className="text-[#E5E3E3]/80 text-[28px] leading-tight font-roboto font-semibold text-center">
                  <a
                    href="https://suitejar.com/"
                    target="_blank"
                    className="hover:text-[#E5E3E3] hover:underline"
                    rel="noreferrer"
                  >
                    Suitejar
                  </a>
                </h6>
                <ul className="list-disc text-[#E5E3E3]/80 leading-[30px] text-left px-10 py-2 xl:!block hidden font-roboto">
                  <li className="py-1">
                    Developed dynamic web app using React, Redux, Ant Design,
                    and Tailwind CSS.
                  </li>
                  <li className="py-1">
                    Implemented Firebase authentication,search console and
                    google analytics integration, user plans, and Stripe
                    payment.
                  </li>
                  <li className="py-1">
                    Improved website performance and user experience.
                  </li>
                </ul>
              </div>

              <img
                src={suitejarimg}
                className="sm:!h-[500px] h-[300px] w-full object-contain rounded-md"
                alt="sutejar"
              />
            </div>
          </div>
          <div className="z-50">
            <div className="grid xl:!grid-cols-2 grid-cols-1 p-5 bg-[#162AB0]/40 rounded-2xl sm:!h-[560px] h-[360px]">
              <div className="flex flex-col h-full justify-center">
                <h6 className="text-[#E5E3E3]/80 text-[28px] leading-tight font-roboto font-semibold text-center">
                  <a
                    href="https://gallery.vision/"
                    className="hover:text-[#E5E3E3] hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Gallery Vision
                  </a>
                </h6>
                <ul className="list-disc text-[#E5E3E3]/80 leading-[30px] text-left px-10 py-2 xl:!block hidden font-roboto">
                  {/* <li className="py-1">
                    Created WordPress site with custom template blocks for easy
                    updates
                  </li> */}
                  <li className="py-1">
                    Developed WordPress website with Tailwind CSS and JavaScript
                    animations.
                  </li>
                </ul>
              </div>

              <img
                src={galaryvisonimg}
                className="sm:!h-[500px] h-[300px] w-full object-contain rounded-md"
                alt="galaryvision"
              />
            </div>
          </div>
          <div className="z-50">
            <div className="grid xl:!grid-cols-2 grid-cols-1 p-5 bg-[#162AB0]/40 rounded-2xl sm:!h-[560px] h-[360px]">
              <div className="flex flex-col h-full justify-center">
                <h6 className="text-[#E5E3E3]/80 text-[28px] leading-tight font-semibold font-roboto text-center">
                  <a
                    href="https://nintriva.com/"
                    className="hover:text-[#E5E3E3] hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Nintriva
                  </a>
                </h6>
                <ul className="list-disc text-[#E5E3E3]/80 leading-[30px] text-left px-10 py-2 xl:!block hidden font-roboto">
                  <li className="py-1">
                    Developed WordPress website with Tailwind CSS and JavaScript
                    animations.
                  </li>
                </ul>
              </div>

              <img
                src={nintriaimg}
                className="sm:!h-[500px] h-[300px] w-full object-contain object-bottom rounded-md"
                alt="nintriva"
              />
            </div>
          </div>
          <div className="z-50">
            <div className="grid xl:!grid-cols-2 grid-cols-1 p-5 bg-[#162AB0]/40 rounded-2xl sm:!h-[560px] h-[360px]">
              <div className="flex flex-col h-full justify-center">
                <h6 className="text-[#E5E3E3]/80 text-[30px] leading-tight font-semibold font-roboto text-center">
                  <a
                    href="https://mixrank.com/"
                    className="hover:text-[#E5E3E3] hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    MixRank
                  </a>
                </h6>
                <ul className="list-disc text-[#E5E3E3]/80 leading-[30px] text-left px-10 py-2 xl:!block hidden font-roboto">
                  <li className="py-1">
                    Created WordPress site with custom template blocks for easy
                    updates
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
                className="sm:!h-[500px] h-[300px] w-full object-contain rounded-md"
                alt="mixrank"
              />
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Projects;
