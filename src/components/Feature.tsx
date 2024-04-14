import { motion } from "framer-motion";
import { useState } from "react";
const Feature = ({
  icon = "../icons/temp.svg",
  title = "Title",
  body = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, corporis.",
}) => {  
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div className="flex flex-col relative cursor-pointer">
        <motion.div
          animate={{ margin: isHovered ? "0px" : "8px" }}
          transition={{ duration: 0.3 }}
          className="bg-cyan-400 w-full h-full absolute rounded-lg "
        ></motion.div>
        <motion.div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ opacity: 0.8 }}
          transition={{ duration: 0.3 }}
          className="border-2 border-gray-400 w-full h-full bg-slate-700 text-white z-10 rounded-lg p-4 relative flex justify-between"
        >
          <p>{body}</p>
          <img src={icon} width={62} height={62} className="white-icon" alt="" />
        </motion.div>
      </div>
    </>
  );
};

export default Feature;
