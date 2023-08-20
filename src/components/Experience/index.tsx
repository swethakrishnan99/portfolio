import React from "react";

function Experience() {
  return (
    <div
      id="resume"
      className="w-full min-h-screen overflow-hidden  text-[#E5E3E3] xl:!pt-20 pt-10 pb-10 flex flex-col justify-center items-center "
    >
      <h5 className="text-center py-5 w-full">
        <span className="font-vidaloka md:!text-3xl text-2xl text-left">
          RESUME
        </span>
      </h5>
      <div className="grid grid-cols-1 px-10 sm:!px-20 gap-10 w-full max-w-[800px] font-roboto z-50">
        <div>
          <div className="flex flex-col justify-center items-start py-2 pt-5">
            <h6 className="xl:!text-[26px] md:!text-[26px]  text-[#E5E3E3] text-[20px] leading-tight font-roboto font-bold text-left">
              Education
            </h6>
            <ul className="py-4">
              <li>
                <p className="font-roboto text-xl font-semibold  text-[#E5E3E3]/80 text-left">
                  B.Tech
                </p>
                <div className="border-l-[1px] border-l-[#162AB0] pl-[50px] py-5 text-left">
                  <p className="text-base">
                    Federal Institute of Science And Technology (FISAT)®
                  </p>
                  <p className="text-sm py-1  text-[#E5E3E3]/80">
                    07/2016 - 07/2020
                  </p>
                  <p className="text-sm py-1  text-[#E5E3E3]/80">CGPA : 7.11</p>
                  <p className="py-1  text-[#E5E3E3]/80">Courses</p>
                  <p className="text-sm  text-[#E5E3E3]/80">
                    ELECTRICAL AND ELECTRONICS ENGINEERING (EEE)
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-center items-start py-2">
            <h6 className="xl:!text-[26px] md:!text-[26px]  text-[#E5E3E3] text-[20px] leading-tight font-roboto font-bold text-left">
              Work Experience
            </h6>
            <ul className="py-4">
              <li>
                <p className="font-roboto text-xl font-semibold text-[#E5E3E3]/80 text-left">
                  Front-end Developer
                </p>
                <div className="border-l-[1px] border-l-[#162AB0] pl-[50px] py-5 text-left">
                  <p className="text-base">
                    Growth Cx Private Limited - Kochi, India
                  </p>
                  <p className="text-sm py-1 text-[#E5E3E3]/80">
                    February 2021 to June 2023
                  </p>
                  <ul className="list-disc py-2  text-[#E5E3E3]/80 text-sm">
                    <li className="py-1">
                      Collaborated in team to develop an SEO application using
                      React and state management through Redux.
                    </li>
                    <li className="py-1">
                      Created user-friendly web experiences using React
                      TypeScript, Ant Design, Redux, Tailwind CSS, and React
                      Router DOM.
                    </li>
                    <li className="py-1">
                      Contributed to visually appealing websites with HTML, CSS,
                      WordPress, and JavaScript. - Ensured responsive design for
                      optimal user experience across devices.
                    </li>
                    <li className="py-1">
                      Conducted code reviews, implemented best practices, and
                      met project goals and deadlines
                    </li>
                    <li className="py-1">
                      Engaged with clients, provided technical expertise, and
                      contributed to 60% increase in customer satisfaction.
                    </li>
                    <li className="py-1">
                      Managed repositories on GitHub for efficient collaboration
                      in a Linux-based environment.
                    </li>
                    <li className="py-1">
                      Documented workflows to educate new employees.
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <p className="font-roboto text-xl font-semibold  text-[#E5E3E3]/80 text-left">
                  Technical Intern
                </p>
                <div className="border-l-[1px] border-l-[#162AB0] pl-[50px] py-5 text-left">
                  <p className="text-base">Tillotoma Foundation - Remote</p>
                  <p className="text-sm py-1 text-[#E5E3E3]/80">
                    October 2020 to January 2021
                  </p>
                  <ul className="list-disc py-2 text-[#E5E3E3]/80 text-sm">
                    <li className="py-1">
                      Assisted in client website development using HTML, CSS,
                      and JavaScript.
                    </li>
                    <li className="py-1">
                      Contributed to team meetings, optimizing user experience
                      and performance.
                    </li>
                    <li className="py-1">
                      Updated layouts for usability and performance.
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
