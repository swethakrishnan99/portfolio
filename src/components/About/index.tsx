import React from "react";
import Aboutme from "../../Images/aboutme.svg";

function About() {
  return (
    <div
      id="about"
      className="w-full text-[#E5E3E3] md:!pt-20 sm:!pt-10 pt-0 md:!pb-10 px-10 md:!px-20 flex flex-col justify-center items-center"
    >
      <h5 className="text-center md:!py-5 sm:!py-2 py-0 w-full">
        <span className="font-vidaloka md:!text-3xl text-2xl text-left">
          ABOUT ME
        </span>
        <br />
      </h5>
      <div className="grid lg:!grid-cols-2 grid-cols-1 w-full h-full sm:!py-5">
        <img
          src={Aboutme}
          className="sm:!max-w-[500px] max-w-[280px] w-fit max-h-[500px] m-auto"
          alt="profile"
        />
        <div className="flex flex-col py-5 justify-center">
          <p className="font-roboto text-[#E5E3E3]/80 sm:!text-[16px] text-[14px] leading-[28px] text-left sm:!py-2">
            My name is Swetha Krishnan, And I am a passionate frontend web
            developer. I have always been fascinated by the intersection of
            design and technology, and I am thrilled to be able to bring my
            creative ideas to life through coding. My Primary focus is on
            frontend development, where I excel in crafting beautiful user
            interfaces that are both visually appealing and user-friendly. My
            technical skill includes proficiency in HTML, CSS, JavaScript and
            the frontend framework React. I am well-versed in responsive design
            principles, ensuring that websites look great and function
            seamlessly across different devices and screen sizes. Continuously
            leaning and staying up-to-date with latest trends and technologies
            is a priority for me. I am always exploring new tools, frameworks,
            techniques to enhance my skills and deliver cutting-edge solutions
            to my clients.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
