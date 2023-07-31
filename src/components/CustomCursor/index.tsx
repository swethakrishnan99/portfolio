import React, { useState } from "react";
// import { motion } from "framer-motion";
// import "./style.scss";

const CustomCursor = () => {
  const [secondaryCursor, setSecondaryCursor] = useState({ x: 0, y: 0 });
  const [mainCursor, setMainCursor] = useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const mousemove = (e: any) => {
      setSecondaryCursor({ x: e.clientX - 20, y: e.clientY - 20 });
      setMainCursor({ x: e.clientX - 5, y: e.clientY - 5 });
    };
    const click = (e: any) => {
      let curser = document.querySelector(".curser");
      let curserMain = document.querySelector(".small_circle");
      curser?.classList.add("expand");
      curserMain?.classList.add("expand-main");

      setTimeout(() => {
        curser?.classList.remove("expand");
        curserMain?.classList.remove("expand-main");
      }, 400);
    };
    document.addEventListener("mousemove", mousemove);
    document.addEventListener("click", click);

    return () => {
      document.addEventListener("mousemove", mousemove);
    };
  }, []);

  return (
    <div className="relative top-0 z-[100000]">
      {/* <motion.div
        animate={{
          ...secondaryCursor,
          transition: { type: "spring", mass: 1 },
        }}
        className="large_circle absolute"
      >
        {" "}
        <div className="curser w-full h-full rounded-full absolute"></div>
      </motion.div>

      <motion.div
        animate={{ ...mainCursor, transition: { type: "spring", mass: 0.1 } }}
        className="small_circle"
      ></motion.div> */}
    </div>
  );
};

export default CustomCursor;
