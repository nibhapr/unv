import { motion } from "framer-motion";


const Hero = () => {
  return (

    <><div className="p-0 ">
      <div className="grid max-w-screen-7xl px-2 py-2 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-8">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight xl:leading-normal md:text-5xl xl:text-6xl dark:text-white">UNV Authorized Distibutor in Dubai</h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">We are a leading distributor of UNV products in Dubai, offering a wide range of high-quality security cameras, video recorders NVR & DVR, and accessories for all your surveillance needs.our products and services meet stringent regulatory standards. Explore our UNV products.</p>
         <div className="flex flex-col gap-2 sm:flex-row">
          <a href="/about" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
            Get started
            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            
          </a>
          <a href="/contact" className="inline-flex items-center justify-center px-5  py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
            Speak to Sales
          </a></div>
        </div>
        <div className="lg:mt-0 lg:col-span-4 lg:flex mt-8">
        <motion.div whileHover={{ scale: 1.2 }}>
          <img src="../hero/unv.png" alt="mockup" />
        </motion.div>
        </div>
      </div>
    </div>
   
    </>
    
  )
};

export default Hero;
