import React from "react";
import resume from "./swethakrishnan.pdf";
import Profile from "../../Images/profile.svg";

function IntroComponent() {
  return (
    <div
      id="home"
      className="w-full font-roboto relative lg:!bottom-10 bottom-4 xl:!min-h-screen text-[#E5E3E3] sm:!pb-10 pb-3 pt-20 flex justify-center items-center"
    >
      <div className="grid lg:!grid-cols-2 grid-cols-1 gap-10 p-10 w-full h-full md:!px-20 px-10 z-50">
        <div className="order-last lg:!order-first flex sm:!justify-self-start justify-self-center flex-col justify-center items-start col-span-1">
          {/* <p className="text-lg">Hi, my name is</p> */}
          <h4 className="xl:!text-[64px] md:!text-[55px] text-[36px] leading-tight font-vidaloka max-w-[500px] text-left">
            {/* Hi,
            <br /> */}
            SWETHA KRISHNAN
            {/* <br /> */}
            {/* web Developer */}
          </h4>
          <h6 className="md:!text-2xl text-lg">Fullstack Developer</h6>
          <p className="text-[16px] leading-[28px] text-left max-w-[514px] py-2 text-[#E5E3E3]/80">
            -A passionate and dedicated{" "}
            <span className="">Frontend web developer </span>, driven by the
            ever-evolving world of technology and its limitless possibilities.
          </p>
          <a
            href={resume}
            download="SWETHA's Resume"
            target="_blank"
            rel="noreferrer"
            className="block py-3 border-[1px] px-7 rounded-md mt-5 font-semibold border-[#162AB0] bg-gradient-to-b from-[#162AB0]/80 to-black w-[200px] cursor-pointer hover:underline hover:bg-gradient-to-t"
          >
            Get Resume
          </a>
        </div>
        <div className="flex flex-col justify-center items-start lg:!justify-self-end justify-self-start">
          <img
            className="xl:!max-w-[480px] lg:!max-w-[350px] md:!max-w-[250px] max-w-[200px]"
            src={Profile}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default IntroComponent;
