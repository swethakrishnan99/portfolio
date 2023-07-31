import React from "react";

function Experience() {
  return (
    <div
      id="resume"
      className="w-full min-h-screen overflow-hidden text-[#010101] bg-[#fff] pt-20 pb-10 flex flex-col justify-center items-center "
    >
      <h5 className="text-center py-5 border-b-[1px] w-full">
        <span className="font-poppins md:!text-3xl text-2xl text-[#854fee] font-semibold text-left">
          RESUME
        </span>
      </h5>
      <div className="grid grid-cols-1 px-10 gap-10 w-full max-w-[800px] font-poppins">
        <div>
          <div className="flex flex-col justify-center items-start py-2 pt-5">
            <h6 className="xl:!text-[26px] md:!text-[26px] text-[#000] text-[20px] leading-tight font-poppins font-bold text-left">
              Education
            </h6>
            <ul className="py-4">
              <li>
                <p className="font-poppins text-xl font-semibold text-[#6f6f6f] text-left">
                  B.Tech
                </p>
                <div className="border-l-[1px] border-l-[#854fee] pl-[50px] py-5 text-left">
                  <p className="text-base">
                    Federal Institute of Science And Technology (FISAT)®
                  </p>
                  <p className="text-sm py-1 text-[#6f6f6f]">
                    07/2016 - 07/2020
                  </p>
                  <p className="text-sm py-1 text-[#6f6f6f]">CGPA : 7.11</p>
                  <p className="py-1 text-[#726456]">Courses</p>
                  <p className="text-sm text-[#6f6f6f]">
                    ELECTRICAL AND ELECTRONICS ENGINEERING (EEE)
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-center items-start py-2">
            <h6 className="xl:!text-[26px] md:!text-[26px] text-[#000] text-[20px] leading-tight font-poppins font-bold text-left">
              Work Experience
            </h6>
            <ul className="py-4">
              <li>
                <p className="font-poppins text-xl font-semibold text-[#6f6f6f] text-left">
                  Front-end Developer
                </p>
                <div className="border-l-[1px] border-l-[#854fee] pl-[50px] py-5 text-left">
                  <p className="text-base">
                    Growth Cx Private Limited - Kochi, India
                  </p>
                  <p className="text-sm py-1 text-[#6f6f6f]">
                    February 2021 to June 2023
                  </p>
                  <ul className="list-disc py-2  text-[#6f6f6f] text-sm">
                    <li className="py-1">
                      Worked as a part of a team, Developed an SEO application
                      using React while managing the state through redux
                      Developed front-end user experience using React
                      TypeScript, Ant Design, Redux, Tailwind CSS, React Router
                      DOM
                    </li>
                    <li className="py-1">
                      Collaborated with design and development teams to create
                      visually stunning and user-friendly websites using HTML,
                      CSS, WordPress, and JavaScript.
                    </li>
                    <li className="py-1">
                      Implemented responsive web design techniques to ensure
                      optimal user experience across different devices and
                      screen sizes.
                    </li>
                    <li className="py-1">
                      Consistently delivered high-quality results, leveraging
                      strong problem-solving skills and a deep understanding of
                      various technologies to meet project goals and deadlines.
                    </li>
                    <li className="py-1">
                      Conducted code reviews and implemented best practices to
                      ensure high-quality and maintainable code.
                    </li>
                    <li className="py-1">
                      Worked closely with clients to understand their
                      requirements and provided technical expertise during
                      project meetings.
                    </li>
                    <li className="py-1">
                      Contributed to the development of 5 projects, resulting in
                      an average of 60% increase in overall customer
                      satisfaction.
                    </li>
                    <li className="py-1">
                      Documented technical workflows and knowledge to educate
                      newly hired employees.
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <p className="font-poppins text-xl font-semibold text-[#6f6f6f] text-left">
                  Technical Intern
                </p>
                <div className="border-l-[1px] border-l-[#854fee] pl-[50px] py-5 text-left">
                  <p className="text-base">Tillotoma Foundation - Remote</p>
                  <p className="text-sm py-1 text-[#6f6f6f]">
                    October 2020 to January 2021
                  </p>
                  <ul className="list-disc py-2  text-[#6f6f6f] text-sm">
                    <li className="py-1">
                      Assisted in the development and maintenance of client
                      websites using HTML, CSS, and JavaScript.
                    </li>
                    <li className="py-1">
                      Participated in team meetings and contributed ideas for
                      enhancing user experience and optimizing
                    </li>
                    <li className="py-1">
                      Designed and updated layouts to meet usability and
                      performance requirements.
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
