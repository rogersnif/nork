"use client";
import { motion } from "framer-motion";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [link, setLink] = useState(false);
  const [imgMenu, setImgMenu] = useState("/norkaymenu.svg");

  function handleDisplayLinks() {
    if (link == false) {
      setImgMenu("/closemenu.svg");
    } else {
      setImgMenu("/norkaymenu.svg");
    }
    setLink(!link);
  }

  return (
    <>
      <header className="flex flex-row justify-between px-5 py-5 ">
        <nav className="z-50">
          <span className="text-green-400 text-[25px]">
            <Image src={"/logo.jpg"} width={150} height={70} alt="logo"></Image>
          </span>

          {link && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 500 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col gap-5 mt-5 pl-10 text-slate-900 absolute bg-white w-[50%] h-[50vh]"
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Link href="/" alt="">
                  Home
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div>
                  <Link href="services" alt="">
                    Services
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <Link href="about">About</Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.3 }}
              >
                <Link href="/#contact">Contact</Link>
              </motion.div>
            </motion.div>
          )}
        </nav>

        <div>
          <Image
            onClick={handleDisplayLinks}
            src={imgMenu}
            width={25}
            height={25}
            className=""
            alt="link"
          ></Image>
        </div>
      </header>
    </>
  );
}
