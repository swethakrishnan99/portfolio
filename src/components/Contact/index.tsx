import React from "react";
import address from "../../Images/address.svg";
import phone from "../../Images/phone-call.svg";
import email from "../../Images/email.svg";
import {
  FacebookOutlined,
  GithubOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

function Contact() {
  return (
    <div id="contact" className="w-full min-h-[500px] bg-[#F9F9fd]">
      <h5 className="text-center sm:!py-12 py-7 border-b-[1px] w-full">
        <span className="font-poppins md:!text-3xl text-2xl text-[#854fee] font-semibold text-left">
          CONTACT ME
        </span>
      </h5>
      <div className="flex flex-col justify-center items-start md:!px-20 px-5 lg:!col-span-2 col-span-1 w-full max-w-[1500px] mx-auto">
        {/* <h4 className="xl:!text-[73px] md:!text-[55px] text-[#F0F0E8] text-[36px] leading-tight font-poppins font-bold text-left">
          Let's Connect
        </h4> */}
        <div className="font-poppins flex flex-col md:!flex-row gap-5 w-full justify-between max-w-[1500px] items-center py-10">
          <div className="text-[#6f6f6f] flex flex-col justify-center items-center sm:!text-base text-sm">
            <p className="flex items-end pb-2">
              <img
                src={address}
                alt="Address"
                className="sm:!w-[40px] w-[35px] sm:!h-[40px] h-[35px]"
              />
              &ensp; Address
            </p>
            {/* <p>65 Woodhaven Dr</p> */}
            <p className="pt-2">Brampton, ON L7A 1Y8</p>
          </div>
          <div className="text-[#6f6f6f] flex flex-col justify-center items-center sm:!text-base text-sm">
            <p className="flex items-end pb-2">
              <img
                src={email}
                alt="Address"
                className="sm:!w-[40px] w-[35px] sm:!h-[40px] h-[35px]"
              />
              &ensp; Email
            </p>
            <p className="pt-2">swethakrishnan7399@gmail.com</p>
          </div>
          <div className="text-[#6f6f6f] flex flex-col justify-center items-center sm:!text-base text-sm">
            <p className="flex items-end pb-2">
              <img
                src={phone}
                alt="Address"
                className="sm:!w-[40px] w-[35px] sm:!h-[40px] h-[35px]"
              />
              &ensp; Phone
            </p>
            <p className="pt-2">+1 437-661-3451</p>
          </div>
        </div>
        <div className="lg:!text-3xl md:!text-2xl text-xl text-[#6f6f6f] flex justify-center w-full gap-6 pb-10">
          <a
            href="https://github.com/swethakrishnan99"
            className="hover:!text-black"
            target="_blank"
          >
            <GithubOutlined />
          </a>
          <a
            href="https://www.facebook.com/swetha.krishnan.9406"
            className="hover:!text-black"
            target="_blank"
          >
            <FacebookOutlined />
          </a>
          <a
            href="https://instagram.com/_swetha.krishnan"
            className="hover:!text-black"
            target="_blank"
          >
            <InstagramOutlined />
          </a>
          <a
            href="https://www.linkedin.com/in/swethakrishnan99/"
            className="hover:!text-black"
            target="_blank"
          >
            <LinkedinOutlined />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
