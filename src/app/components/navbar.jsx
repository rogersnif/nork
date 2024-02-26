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
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-row justify-between items-center px-5 py-5 bg-slate-900 "
      >
        <span className="text-green-400 text-[25px]">
          <Image src={"/logo.jpg"} width={150} height={70} alt="logo"></Image>
        </span>
        <div className="flex flex-row gap-5  pl-10 text-slate-200   w-[20%] h-[5vh] hidden md:flex">
          <div>
            <Link href="/" alt="">
              Home
            </Link>
          </div>

          <div>
            <div>
              <Link href="services" alt="">
                Services
              </Link>
            </div>
          </div>

          <div>
            <Link href="about">About</Link>
          </div>

          <div>
            <Link href="/#contact">Contact</Link>
          </div>
        </div>
        <nav className="z-50">
          {link ? (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 500 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col gap-5 mt-10 pl-10 text-slate-900 absolute bg-white w-[50%] h-[50vh]"
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
          ) : (
            <div></div>
          )}
        </nav>

        <div>
          <Image
            onClick={handleDisplayLinks}
            src={imgMenu}
            width={25}
            height={25}
            className="md:hidden"
            alt="link"
          ></Image>
        </div>
      </motion.header>
    </>
  );
}
