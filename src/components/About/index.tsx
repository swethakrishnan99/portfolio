import React from "react";
import Aboutme from "../../Images/profile.jpg";

function About() {
  return (
    <div
      id="about"
      className="w-full min-h-screen text-[#010101] pt-20 pb-10 flex flex-col justify-center items-center"
    >
      <h5 className="text-center py-5 border-b-[1px] w-full">
        <span className="font-poppins md:!text-3xl text-2xl text-[#854fee] font-semibold text-left">
          ABOUT ME
        </span>
        <br />
        {/* <span className="xl:!text-[50px] md:!text-[40px] text-[#854fee] text-[30px] leading-tight font-sanfrancisco font-bold text-left">
              Who am I
            </span> */}
      </h5>
      <div className="grid lg:!grid-cols-2 grid-cols-1 w-full max-w-[1500px] h-full p-5">
        <img
          src={Aboutme}
          className="sm:!max-w-[500px] max-w-[280px] w-fit p-5 max-h-[500px] m-auto"
          alt="profile"
        />
        <div className="flex flex-col p-5">
          {/* <h5 className="text-left">
            <span className="font-poppins md:!text-3xl text-lg text-[#854fee] text-left">
              ABOUT ME
            </span>
            <br />
            <span className="xl:!text-[50px] md:!text-[40px] text-[#854fee] text-[30px] leading-tight font-sanfrancisco font-bold text-left">
              Who am I
            </span>
          </h5> */}
          <p className="font-poppins text-[#6f6f6f] md:!text-[16px] text-sm text-left py-2 leading-[28px]">
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

      <div className="flex flex-wrap justify-center gap-3 max-w-[1500px]">
        {/* <h4 className="text-left w-fit max-w-[1500px] justify-center">
          <span className="font-sanfrancisco xl:!text-3xl md:!text-2xl text-lg text-[#726456] text-left">
            Skills
          </span>
          <br />
          <span className="xl:!text-[73px] md:!text-[55px] text-[#F0F0E8] text-[36px] leading-tight font-poppins font-bold text-left">
          Who am I
        </span>
        </h4> */}
      </div>
    </div>
  );
}

export default About;
