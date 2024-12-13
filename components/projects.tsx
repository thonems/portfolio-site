import React from "react";
import { projects } from "@/lib/data";
import Image from "next/image";

export default function Projects() {
  return (
    <section className="scroll-mt-32 mb-24" id="projects">
      <h2 className="text-center text-3xl font-bold mb-8">Projects</h2>
      <div>
        {projects.map((project, i) => (
          <a href={project.link} key={project.title} target="_blank">

          
          <section
            className="relative bg-gray-200 border border-black/10 sm:h-[20rem] overflow-hidden max-w-[40rem] sm:pr-8 mb-4 sm:mb-8 hover:bg-gray-400 transition flex"
            key={project.title}
          >
            <div className="flex flex-col py-4 px-5 sm:pl-10 sm:pt-10 sm:pr-2 sm:max-w-[50%] h-full">
              <h3 className="font-bold text-2xl">{project.title}</h3>
              <p className="mt-2 leading-6 text-gray-700">
                {project.description}
              </p>
              <ul className="flex flex-wrap sm:mt-auto mt-5 gap-3">
                {project.tech.map((tech, i) => (
                  <li
                    key={i}
                    className="bg-black/20 px-4 py-1 rounded-full text-sm tracking-wide text-white "
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            <Image
              src={project.image}
              className="absolute top-8 -right-40 rounded-full w-[25rem] hidden sm:block"
              alt={project.title}
            />
          </section>
          </a>
        ))}
      </div>
    </section>
  );
}
