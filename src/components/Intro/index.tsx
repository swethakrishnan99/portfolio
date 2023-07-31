import React from "react";
import resume from "./swethakrishnan.pdf";

function IntroComponent() {
  return (
    <div
      id="home"
      className="w-full relative bottom-20 h-screen overflow-hidden text-[#fff] bg-center bg-[#854fee] bg-origin-border opacity-[95%] bg-hero-pattern py-10 flex justify-center"
    >
      <div className="grid grid-cols-1 p-10 w-full max-w-[1500px] h-full md:!px-20 px-5">
        <div className="flex flex-col justify-center items-start lg:!col-span-2 col-span-1">
          <p className="font-poppins xl:!text-3xl md:!text-2xl text-lg">
            Hi, my name is
          </p>
          <h4 className="xl:!text-[73px] md:!text-[55px] text-[36px] leading-tight font-poppins font-bold text-left">
            {/* Hi,
            <br /> */}
            SWETHA KRISHNAN
            {/* <br /> */}
            {/* web Developer */}
          </h4>
          <p className="font-poppins md:!text-[20px] text-lg text-left max-w-[625px] py-2">
            -A passionate and dedicated{" "}
            <span className="md:!text-[22px] font-semibold">
              Frontend web developer{" "}
            </span>
            , driven by the ever-evolving world of technology and its limitless
            possibilities.
          </p>
          <a
            href={resume}
            download="SWETHA's Resume"
            target="_blank"
            rel="noreferrer"
            className="block py-3 border-[1px] px-7 rounded-md mt-5 font-poppins font-semibold border-[#854fee] text-[#fff] bg-[#854fee] cursor-pointer hover:underline"
          >
            Get Resume
          </a>
        </div>
        {/* <div className="flex flex-col justify-center items-start">
          <img
            className="rounded-[20%] p-1 border-2 border-[#000000] max-w-[480px] max-h-[480px]"
            src={Profile}
          ></img>
        </div> */}
      </div>
    </div>
  );
}

export default IntroComponent;
