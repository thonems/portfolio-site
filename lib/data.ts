import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import movieImg from "@/public/movies.png";
import portfolioImg from "@/public/portfolio.jpg";
import recipeImg from "@/public/recipes.jpg";

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
    link: "https://github.com/thonems/movie-night-site",
  },
  {
    title: "Portfolio-website",
    description: "React application for my portfolio",
    tech: ["React", "Typescript", "Tailwind", "Vercel", "Next.js", "Resend"],
    image: portfolioImg,
    link: "https://github.com/thonems/portfolio-site",
  },
  {
    title: "Recipe Management",
    description:
      "App for managing my recipes i often want to save from the web",
    tech: ["Java", "Spring Boot", "Thymeleaf", "MySQL", "Maven"],
    image: recipeImg,
    link: "https://github.com/thonems/spring-recipe-app",
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
