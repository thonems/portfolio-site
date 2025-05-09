"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";

export default function Header() {
  return (
    <header className="z-[1000] relative scroll-mt-32" id="home">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border-white border-opacity-50 bg-white bg-opacity-80 shadow-lg shadow-black/[0.04] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.20rem] sm:w-[36rem] sm:rounded-full "
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <motion.nav
        className="fixed flex top-[0.2rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.5rem] sm:h-[initial] sm:py-0"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      >
        <ul className="flex w-[20rem] flex-wrap items-center justify-center gap-y-1 text-[1rem] font-medium text-gray-600 sm:w-[initial] sm:flex-nowrap sm:gap-4">
          {links.map((link) => (
            <li
              className="h-3/4 flex items-center justify-center"
              key={link.hash}
            >
              <Link
                className="flex w-full items-center justify-center px-3 py-3 hover:text-gray-900"
                href={link.hash}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </motion.nav>
    </header>
  );
}
