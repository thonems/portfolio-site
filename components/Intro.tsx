import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

export default function Intro() {
  return (
    <section
      className="scroll-mt-60 mb-32 max-w-[45rem] text-center sm:mb-0"
      id="home"
    >
      <div className="flex items-center justify-center">
        <div className="mt-4">
          <Image
            src="/intro.png"
            alt="Picture of me"
            width={150}
            priority={true}
            height={150}
            quality={90}
            className="border-[0.3rem] border-white h-28 w-28 rounded-full"
          />
        </div>
      </div>

      <p className="mb-10 mt-6 px-4 text-2x1 font-medium leading-[1.5] sm:text-4x1">
        My name is <span className="font-bold">Thomas Nemeth</span>, and i am a
        backend developer. I thrive on coding challenges and enjoy exploring innovative technologies. When I’m not coding, I’m often watching movies, gaming with friends, or enjoying the outdoors. Currently, I’m seeking my next exciting opportunity!
      </p>

      <div className="flex sm:flex-row flex-col justify-center gap-2 px-4 text-base font-medium ">
        <Link
          href="#contact"
          className="rounded-full bg-gray-800 text-white px-8 py-3 flex items-center gap-2 hover:scale-105 outline-none"
        >
          Contact me <BsArrowRight />
        </Link>

        <a
          className="rounded-full bg-white px-8 py-3 flex items-center gap-2 hover:scale-105 outline-none"
          href="/CV.pdf"
          download={true}
        >
          Download CV <HiDownload />
        </a>

        <a
          className="rounded-full bg-white p-4 py-3 flex items-center gap-2 hover:scale-105 outline-none"
          href="https://www.linkedin.com/in/thomas-nemeth-7a9929254/"
        >
          <BsLinkedin />
        </a>

        <a
          className="rounded-full bg-white p-4 py-3 flex items-center gap-2 hover:scale-105 outline-none"
          href="https://github.com/thonems"
        >
          <FaGithub />
        </a>
      </div>
    </section>
  );
}
