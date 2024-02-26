"use client";
import { motion } from "framer-motion";

export default function Section1() {
  return (
    <>
      <motion.section
        initial={{ filter: "none", opacity: 0.1 }}
        animate={{ filter: "grayscale(50%)", opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-[url('/bac2.jpg')] w-[100vw] h-[60vh] md:h-[80%]  bg-contain sm:bg-contain md:bg-cover  lg:bg-full bg-no-repeat bg-[#f0f7fd] bg-right"
      >
        <div className="flex flex-col  items-start gap-4 ml-[5%] md:ml-[20%] ">
          <div className="mt-[20%] md:mt-[7%] ">
            <motion.h1
              className="text-5xl font-medium md:text-6xl"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Norkay <br />{" "}
              <span className="text-slate-500 text-4xl">Construction</span>
            </motion.h1>
            <motion.p
              className="text-1xl"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              Building Tomorrow’s legacy{" "}
            </motion.p>
            <motion.button
              className="rounded-full border-2 px-4 py-2 border-yellow-500 mt-5 "
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2.5 }}
            >
              Learn More
            </motion.button>
          </div>
        </div>
      </motion.section>
    </>
  );
}
