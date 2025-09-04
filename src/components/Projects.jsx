import jobhub from "../assets/projects/jobhub.png";
import findmypet from "../assets/projects/findmypet.png";
import portfolio from "../assets/projects/portfolio.png";
import react_joblistings from "../assets/projects/react_joblistings.png";
import vue_joblistings from "../assets/projects/vue_joblistings.png";

import html from "../assets/icons/html.png";
import css from "../assets/icons/css.png";
import js from "../assets/icons/js.png";
import ts from "../assets/icons/ts.png";
import sass from "../assets/icons/sass.png";
import bs from "../assets/icons/bs.png";
import tailwind from "../assets/icons/tailwind.png";
import blade from "../assets/icons/blade.png"
import react from "../assets/icons/react.png";
import vue from "../assets/icons/vue.png";

import cs from "../assets/icons/cs.png";
import php from "../assets/icons/php.png";
import java from "../assets/icons/java.png";
import laravel from "../assets/icons/laravel.png";
import springboot from "../assets/icons/springboot.png";

import mysql from "../assets/icons/mysql.png";
import sqlserver from "../assets/icons/sqlserver.png";
import mongodb from "../assets/icons/mongodb.png";
import postgresql from "../assets/icons/postgresql.png";
import sqlite from "../assets/icons/sqlite.png";
import json from "../assets/icons/json.png";

import androidstudio from "../assets/icons/androidstudio.png";
import dotnet from "../assets/icons/dotnet.png";

import git from "../assets/icons/git.png";
import github from "../assets/icons/github.png";
import vscode from "../assets/icons/vscode.png";
import xampp from "../assets/icons/xampp.png";
import postman from "../assets/icons/postman.png";
import vercel from "../assets/icons/vercel.png";

import figma from "../assets/icons/figma.png";
import photoshop from "../assets/icons/photoshop.png";
import xd from "../assets/icons/xd.png";
import ai from "../assets/icons/ai.png";

import premiere from "../assets/icons/premiere.png";
import ae from "../assets/icons/ae.png";
import davinci from "../assets/icons/davinci.png";

import ProjectCard from "./ProjectCard";


const project1 = {
  image: jobhub,
  title: "JobHub",
  label: "Fullstack Website Application",
  description: "JobHub is a Laravel-powered job board designed to help developers find opportunities and employers post job listings quickly and efficiently, with integrated user authentication.",
  technologies: [
    { name: "Blade", url: blade },
    { name: "Tailwind CSS", url: tailwind },
    { name: "Laravel", url: laravel },
    { name: "MySQL", url: mysql },
  ],
  // Added a GitHub URL for the card to link to
  githubUrl: "https://github.com/TheVictorDevX/laravel-jobhub"
};

const project2 = {
  image: findmypet,
  title: "FindMyPet",
  label: "Fullstack Android Application",
  description: "A mobile application designed to create a community platform, helping reunite lost pets with their owners.",
  technologies: [
    { name: "Android Studio (Java)", url: androidstudio },
    { name: "Spring Boot", url: springboot },
    { name: "MySQL", url: mysql },
  ],
  // Added a GitHub URL for the card to link to
  githubUrl: "https://github.com/TheVictorDevX/findmypet-android-app"
};

const project3 = {
  image: react_joblistings,
  title: "JobListings (React)",
  label: "Fullstack Website Application",
  description: "A simple crud react web app for viewing, creating, updating and deleting jobs.",
  technologies: [
    { name: "React", url: react },
    { name: "Tailwind CSS", url: tailwind },
    { name: "JSON Server", url: json },
  ],
  // Added a GitHub URL for the card to link to
  githubUrl: "https://github.com/TheVictorDevX/react-job-listings-app"
};

const project4 = {
  image: vue_joblistings,
  title: "JobListings (Vue.js)",
  label: "Fullstack Website Application",
  description: "A simple crud Vue.js web app for viewing, creating, updating and deleting jobs.",
  technologies: [
    { name: "Vue.js", url: vue },
    { name: "Tailwind CSS", url: tailwind },
    { name: "JSON Server", url: json },
  ],
  // Added a GitHub URL for the card to link to
  githubUrl: "https://github.com/TheVictorDevX/vue-job-listings-app"
};

const project5 = {
  image: portfolio,
  title: "My Personal Portfolio Website",
  label: "Frontend Website Application",
  description: "A personal portfolio website that highlights my skills, projects, and certifications",
  technologies: [
    { name: "React", url: react },
    { name: "Tailwind CSS", url: tailwind },
    { name: "Vercel", url: vercel },
  ],
  // Added a GitHub URL for the card to link to
  githubUrl: "https://github.com/TheVictorDevX/thevictordevx-portfolio-website"
};

// Sample data with image URLs for technology icons
const sampleProject = {
  image: "https://placehold.co/600x400/292524/fff?text=Project+Image",
  title: "Aura AI Assistant",
  label: "Web Application",
  description: "A comprehensive AI assistant with real-time data integration and a conversational interface. Built for productivity and seamless task management.",
  technologies: [
    { name: "React", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Tailwind CSS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
    { name: "Node.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Firebase", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  ],
  // Added a GitHub URL for the card to link to
  githubUrl: "https://github.com/google/gemini-pro"
};

const Projects = () => {
  return (
    <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 gap-3 xl:grid-cols-3">
      <ProjectCard project={project1}/>
      <ProjectCard project={project2}/>
      <ProjectCard project={project5}/>
      <ProjectCard project={project3}/>
      <ProjectCard project={project4}/>
    </div>
  )
}

export default Projects
