import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import movieImg from "@/public/movies.png";
import portfolioImg from "@/public/portfolio.png";
import testImg from "@/public/test.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated Bachelor i informasjonsteknologi",
    location: "Oslo",
    description:
      "I graduated.",
    icon: React.createElement(LuGraduationCap),
    date: "2020-2023",
  },
  {
    title: "Graduated Bachelor i Tannpleie",
    location: "Elverum",
    description:
      "IGraduatetd 2020",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2021",
  },
  {
    title: "NIF",
    location: "Oslo",
    description:
      "Worked at NIF",
    icon: React.createElement(FaReact),
    date: "2023",
  },
] as const;

export const projectsData = [
  {
    title: "Movie-Night-Site",
    description:
      "Project where me and my friends could have a watchlist and pick movies for movie nights.",
    tags: ["Javascript", "Next.js", "MongoDB", "CSS", "Express"],
    imageUrl: movieImg,
  },
  {
    title: "test",
    description:
      "Test vtestsetse jlskjklsjef.",
    tags: ["React", "test", "test.js", "test", "test"],
    imageUrl: portfolioImg,
  },
  {
    title: "Poogers",
    description:
      "Poggers testing",
    tags: ["test", "test.js", "test", "test", "test"],
    imageUrl: testImg,
  },
] as const;

export const skillsData = [
  "C#",
  "C",
  "Kotling",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Java",
  "MongoDB",
  "HTML & CSS",
  "Docker",
  "Spring Boot",
  "Express",
  "PostgreSQL",
] as const;