import React from "react";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-32 mb-24 max-w-3xl sm:mb-40 text-center"
    >
      <h2 className="text-3xl font-bold mb-8">Skills</h2>
      <ul className="flex flex-wrap justify-center gap-3 text-lg text-gray-400">
        {skills.map((skills, i) => (
          <li
            className="bg-white rounded-md border border-black/20 px-4 py-2"
            key={i}
          >
            {skills}
          </li>
        ))}
      </ul>
    </section>
  );
}
