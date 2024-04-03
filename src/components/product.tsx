import { motion } from "framer-motion";
import type { CollectionEntry } from "astro:content";
type Product = CollectionEntry<"products">;
const product = ({ product }: { product: Product }) => {
  return (
    <section className="mx-auto flex max-w-6xl flex-col px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full">
      <motion.div initial={{x: '-100%', animation: "ease-in-out"}} animate={{ x: 0 }} transition={{ duration: 1 }}>
        <p className="mb-8 max-w-prose text-pretty font-light text-neutral-700 dark:text-neutral-300 sm:text-xl">
          {product.data.main.content}
        </p>
      </motion.div>
      <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
        <motion.div initial={{y: 200, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 1, delay: 1}}>
          <h1 className="block text-4xl font-bold tracking-tighter text-neutral-800 dark:text-neutral-200 sm:text-5xl md:text-6xl lg:text-7xl">
            {product.data.main.title}
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            {product.data.main.subTitle}
          </p>
        </motion.div>
        <motion.div initial={{x: '50%', opacity: 0}} animate={{x: 0, opacity: 1}} transition={{duration: 1, delay: 1.5}}>
          <img
            src={product.data.main.imgMain.src}
            className="w-[600px]"
            alt={product.data.main.imgAlt}
            loading={"eager"}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default product;
