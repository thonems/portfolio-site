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

export const experiences = [
  {
    title: "Graduated Bachelor i informasjonsteknologi",
    location: "Oslo",
    description: "I graduated.",
    icon: React.createElement(LuGraduationCap),
    date: "2020-2023",
  },
  {
    title: "Graduated Bachelor i Tannpleie",
    location: "Elverum",
    description: "IGraduatetd 2020",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2021",
  },
  {
    title: "NIF",
    location: "Oslo",
    description: "Worked at NIF",
    icon: React.createElement(FaReact),
    date: "2023",
  },
] as const;

export const projects = [
  {
    title: "Movie-Night-Site",
    description:
      "Project where me and my friends could have a watchlist and pick movies for movie nights.",
    tech: ["Javascript", "Next.js", "MongoDB", "CSS", "Express"],
    image: movieImg,
  },
  {
    title: "test title",
    description: "Test vtestsetse jlskjklsjef.",
    tech: ["React", "test", "test.js", "test", "test"],
    image: portfolioImg,
  },
  {
    title: "Poogers test title",
    description: "Poggers testing",
    tech: ["test", "test.js", "test", "test", "test"],
    image: testImg,
  },
] as const;

export const skills = [
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
