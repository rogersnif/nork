"use client";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <>
      <motion.div
        initial={{ x: -500 }}
        animate={{ x: 0 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 3.5 }}
        className="w-[100%] flex flex-col items-center justify-center p-10"
      >
        <h2 className="text-[40px] text-slate-600">Details Services</h2>

        <p className="text-center text-[#363535]">
          Our Company excels in diverse spectrum of constructionb services
          tailored to meet the unique needs of our clients
        </p>
      </motion.div>

      <div className="flex flex-col">
        <div className="flex flex-col items-center mt-10">
          <div className="bg-[url('/home.jpg')] w-[90%] h-[300px] bg-no-repeat bg-contain drop-shadow-2xl"></div>
          <motion.div
            whileInView={{ opacity: 1, y: 200 }}
            initial={{ y: 0 }}
            animate={{}}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-[90%] h-[300px] bg-white drop-shadow-2xl absolute p-5 "
          >
            <p className="text-[23px] ">New Home Construction</p>

            <p className="text-[#363535] mt-7">
              We have a proven track record of delivering hight-quality new home
              construction projects, ensuring mediculous attention to details
              and adherence to timelines and budjet constraints.
            </p>
            <button className="px-7 py-2 border-[1px] border-yellow-500 mt-5 rounded-sm">
              Details
            </button>
          </motion.div>
        </div>

        <div className="flex flex-col items-center mt-[300px]">
          <div className="bg-[url('/management.jpg')] w-[90%] h-[300px] bg-no-repeat bg-contain drop-shadow-2xl"></div>
          <motion.div
            whileInView={{ opacity: 1, y: 200 }}
            initial={{ y: 0 }}
            animate={{}}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-[90%] h-[300px] bg-white drop-shadow-2xl absolute p-5 "
          >
            <p className="text-[23px] "> Construction Management</p>

            <p className="text-[#363535] mt-7">
              Our experienced team offers expert construction management
              services, overseeing every aspect of the project from planning and
              scheduiling to procurement and execution, to ensure seamless
              project delivery
            </p>
            <button className="px-7 py-2 border-[1px] border-yellow-500 mt-5 rounded-sm">
              Details
            </button>
          </motion.div>
        </div>

        <div className="flex flex-col items-center mt-[300px]">
          <div className="bg-[url('/renovation.webp')] w-[90%] h-[300px] bg-no-repeat bg-contain drop-shadow-2xl"></div>
          <motion.div
            whileInView={{ opacity: 1, y: 200 }}
            initial={{ y: 0 }}
            animate={{}}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-[90%] h-[300px] bg-white drop-shadow-2xl absolute p-5 "
          >
            <p className="text-[23px] ">Renovation</p>

            <p className="text-[#363535] mt-7">
              Whether it&aposs; a small-scale refresh or a full-scale
              renovation, our skilled professionals bring creativity and
              expertise to transform spaces and revitalize properties according
              to your vison.
            </p>
            <button className="px-7 py-2 border-[1px] border-yellow-500 mt-5 rounded-sm">
              Details
            </button>
          </motion.div>
        </div>

        <div className="flex flex-col items-center mt-[300px]">
          <div className="bg-[url('/maintenence.jpg')] w-[90%] h-[300px] bg-no-repeat bg-contain drop-shadow-2xl"></div>
          <motion.div
            whileInView={{ opacity: 1, y: 200 }}
            initial={{ y: 0 }}
            animate={{}}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-[90%] h-[300px] bg-white drop-shadow-2xl absolute p-5 "
          >
            <p className="text-[23px] ">Maintenance</p>

            <p className="text-[#363535] mt-7">
              We prioritize the longivity and functonality of your structures
              through our comprehensive maintenence services, aimed at
              preserving the integrity and value of your investment.
            </p>
            <button className="px-7 py-2 border-[1px] border-yellow-500 mt-5 rounded-sm">
              Details
            </button>
          </motion.div>
        </div>
      </div>

      <div className=" flex flex-col items-center align-center mt-[300px]">
        <div className="text-center">
          <p className="text-[40px] p-5">Civil Works</p>
          <p className="text-[12px]p-[5%] text-[#363535]">
            In addition to building structure we undertake civil works projects,
            including infrastructure development, road construction, and site
            preparation, contributing to the enhancement of communities and
            urban environments.
          </p>
        </div>
        <div className="bg-[url('/civil.jpg')] w-[90%] h-[300px] bg-no-repeat bg-contain drop-shadow-2xl mt-5"></div>
      </div>
    </>
  );
}
