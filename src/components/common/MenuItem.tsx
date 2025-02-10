import { motion } from "framer-motion";
const MenuItem = ({text}: {text: string}) => {
  return (
    <>
      <motion.li
        whileHover={{
          scale: 1.1,
          transition: { type: 'spring', stiffness: 300 }
        }}
      >
        <a
          className={
            "first:rounded-t last:rounded-b md:hover:bg-gray-100 hover:text-link dark:hover:text-white dark:hover:bg-gray-700 py-2 px-5 block whitespace-no-wrap" +
            (1 === 1 ? " aw-link-active" : "")
          }
          href="fwfw"
        >
          {text}
        </a>
      </motion.li>
    </>
  );
};

export default MenuItem;
