import { useState } from "react";
import { useForm } from "react-hook-form";
import address from "../../Images/address.svg";
import phone from "../../Images/phone-call.svg";
import email from "../../Images/email.svg";
import logo from "../../logo.svg";
import {
  FacebookOutlined,
  GithubOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

function Contact() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  return (
    <div id="contact" className="relative w-full min-h-[500px] z-50">
      <h5 className="md:!text-left text-center sm:!py-12 py-7 md:!px-20 px-10 w-full mx-auto">
        <span className="font-vidaloka md:!text-3xl text-2xl text-[#E5E3E3] text-left">
          CONTACT ME
        </span>
      </h5>
      <div className="flex md:!flex-row flex-col md:!items-start items-center justify-between h-full md:!px-20 px-5 w-full mx-auto">
        <div className="font-roboto flex flex-col sm:!gap-y-10 gap-7 justify-between items-start sm:!py-10 py-5">
          <div className="text-[#E5E3E3]/80 flex justify-center items-center sm:!text-base text-sm">
            <p className="flex items-end pb-2">
              <img
                src={address}
                alt="Address"
                className="sm:!w-[40px] w-[35px] sm:!h-[40px] h-[35px]"
              />
            </p>
            &ensp;
            {/* <p>65 Woodhaven Dr</p> */}
            <p className="text-left">
              {" "}
              Address <br />
              Brampton, ON L7A 1Y8
            </p>
          </div>
          <div className="text-[#E5E3E3]/80 flex justify-center items-center sm:!text-base text-sm">
            <p className="flex items-end pb-2">
              <img
                src={email}
                alt="Address"
                className="sm:!w-[40px] w-[35px] sm:!h-[40px] h-[35px]"
              />
            </p>
            &ensp;
            <p className="text-left">
              Email
              <br />
              swethakrishnan7399@gmail.com
            </p>
          </div>
          <div className="text-[#E5E3E3]/80 flex justify-center items-center sm:!text-base text-sm">
            <p className="flex items-end pb-2">
              <img
                src={phone}
                alt="Address"
                className="sm:!w-[40px] w-[35px] sm:!h-[40px] h-[35px]"
              />
            </p>
            &ensp;
            <p className="text-left">
              Phone
              <br />
              +1 437-661-3451
            </p>
          </div>
          <div className="lg:!text-3xl md:!text-2xl text-xl text-[#E5E3E3]/80 flex md:!justify-start justify-center w-full gap-6 pb-10">
            <a
              href="https://github.com/swethakrishnan99"
              className="hover:!text-[#E5E3E3]"
              target="_blank"
              rel="noreferrer"
            >
              <GithubOutlined />
            </a>
            <a
              href="https://www.facebook.com/swetha.krishnan.9406"
              className="hover:!text-[#E5E3E3]"
              target="_blank"
              rel="noreferrer"
            >
              <FacebookOutlined />
            </a>
            <a
              href="https://instagram.com/_swetha.krishnan"
              className="hover:!text-[#E5E3E3]"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramOutlined />
            </a>
            <a
              href="https://www.linkedin.com/in/swethakrishnan99/"
              className="hover:!text-[#E5E3E3]"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedinOutlined />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-10 justify-end sm:!pb-16 pb-10 text-[#E5E3E3] min-w-[300px] lg:!min-w-[500px] xl:!min-w-[720px]">
          <div className="flex justify-end w-full">
            <form
              className="flex flex-col w-full gap-7 max-w-[500px]"
              onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}
            >
              <input
                {...register("name")}
                placeholder="Your Name (required)"
                type="text"
                className="sm:!h-10 h-9 rounded-md px-2 bg-[#E5E3E3] text-black"
              />
              <input
                {...register("email")}
                placeholder="Your Email (required)"
                type="email"
                className="sm:!h-10 h-9 rounded-md px-2 bg-[#E5E3E3] text-black"
              />
              <input
                {...register("subject")}
                placeholder="Subject"
                type="text"
                className="sm:!h-10 h-9 rounded-md px-2 bg-[#E5E3E3] text-black"
              />
              <textarea
                {...register("message")}
                placeholder="Message"
                className="h-20 rounded-md px-2 bg-[#E5E3E3] text-black"
              />
              <p>{data && data}</p>
              <input
                type="submit"
                value="Send"
                className="block sm:!py-3 py-2 border-[1px] px-7 rounded-md sm:!mt-5 mt-2 font-semibold border-[#162AB0] bg-gradient-to-b from-[#162AB0]/80 to-black cursor-pointer hover:bg-gradient-to-t"
              />
            </form>
          </div>
          <div className="flex md:!justify-end justify-center items-center gap-4">
            <img src={logo} alt="" className="sm:!w-10 w-9" />
            <p className="font-vidaloka text-[#E5E3E3] text-base">
              Swetha Krishnan
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
