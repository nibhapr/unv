import { motion } from "framer-motion";
import type { MenuLink } from "../widgets/Header.astro";
const MenuList = ({links}: {links: Array<MenuLink>}) => {
  return (
    <motion.ul 
    className="dropdown-menu md:backdrop-blur-md dark:md:bg-dark rounded md:absolute pl-4 md:pl-0 md:hidden font-medium md:bg-white/90 md:min-w-[200px] drop-shadow-xl"
    transition={{staggerChildren: 0.07, delayChildren: 0.2}}
    >
      {links.map(({ text }, idx) => (
        <motion.li
        key={idx}
        initial={{scale: 0.8, opacity: 0}}
        whileInView={{scale: 1, opacity: 1}}
        transition={{delay: 0.06 * idx}}
        whileHover={{
          scale: 1.1,
          transition: { type: 'spring', stiffness: 300 },
        }}
      >
        <a
          className={
            "first:rounded-t last:rounded-b md:hover:bg-gray-100 hover:text-link dark:hover:text-white dark:hover:bg-gray-700 py-2 px-5 block whitespace-no-wrap" +
            { "aw-link-active": 1 === 1 }
          }
          href="fwfw"
        >
          {text}
        </a>
      </motion.li>
      ))}
    </motion.ul>
  );
};

export default MenuList;
