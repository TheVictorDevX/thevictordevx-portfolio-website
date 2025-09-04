import Hero from "./components/Hero"
import Title from "./components/Title"
import Skills from "./components/Skills"
import Projects from "./components/Projects"

import youtube from "../src/assets/icons/youtube.png";
import tiktok from "../src/assets/icons/tiktok.png";

import funan from "../src/assets/projects/funan.png";
import techo from "../src/assets/projects/techo.png";

import jobhub from "../src/assets/projects/jobhub.png";
import findmypet from "../src/assets/projects/findmypet.png";
import portfolio from "../src/assets/projects/portfolio.png";
import react_joblistings from "../src/assets/projects/react_joblistings.png";
import vue_joblistings from "../src/assets/projects/vue_joblistings.png";

import html from "../src/assets/icons/html.png";
import css from "../src/assets/icons/css.png";
import js from "../src/assets/icons/js.png";
import ts from "../src/assets/icons/ts.png";
import sass from "../src/assets/icons/sass.png";
import bs from "../src/assets/icons/bs.png";
import tailwind from "../src/assets/icons/tailwind.png";
import blade from "../src/assets/icons/blade.png"
import react from "../src/assets/icons/react.png";
import vue from "../src/assets/icons/vue.png";

import cs from "../src/assets/icons/cs.png";
import php from "../src/assets/icons/php.png";
import java from "../src/assets/icons/java.png";
import laravel from "../src/assets/icons/laravel.png";
import springboot from "../src/assets/icons/springboot.png";

import mysql from "../src/assets/icons/mysql.png";
import sqlserver from "../src/assets/icons/sqlserver.png";
import mongodb from "../src/assets/icons/mongodb.png";
import postgresql from "../src/assets/icons/postgresql.png";
import sqlite from "../src/assets/icons/sqlite.png";
import json from "../src/assets/icons/json.png";

import androidstudio from "../src/assets/icons/androidstudio.png";
import dotnet from "../src/assets/icons/dotnet.png";

import git from "../src/assets/icons/git.png";
import github from "../src/assets/icons/github.png";
import vscode from "../src/assets/icons/vscode.png";
import xampp from "../src/assets/icons/xampp.png";
import postman from "../src/assets/icons/postman.png";
import vercel from "../src/assets/icons/vercel.png";

import figma from "../src/assets/icons/figma.png";
import photoshop from "../src/assets/icons/photoshop.png";
import xd from "../src/assets/icons/xd.png";
import ai from "../src/assets/icons/ai.png";

import premiere from "../src/assets/icons/premiere.png";
import ae from "../src/assets/icons/ae.png";
import davinci from "../src/assets/icons/davinci.png";

const softwareProjects = [
  {
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
    url: "https://github.com/TheVictorDevX/laravel-jobhub"
  },
  {
    image: findmypet,
    title: "FindMyPet",
    label: "Fullstack Android Application",
    description: "A mobile application designed to create a community platform, helping reunite lost pets with their owners.",
    technologies: [
      { name: "Android Studio (Java)", url: androidstudio },
      { name: "Spring Boot", url: springboot },
      { name: "MySQL", url: mysql },
    ],
    url: "https://github.com/TheVictorDevX/findmypet-android-app"
  },
  {
    image: portfolio,
    title: "My Personal Portfolio Website",
    label: "Frontend Website Application",
    description: "A personal portfolio website that highlights my skills, projects, and certifications",
    technologies: [
      { name: "React", url: react },
      { name: "Tailwind CSS", url: tailwind },
      { name: "Vercel", url: vercel },
    ],
    url: "https://github.com/TheVictorDevX/thevictordevx-portfolio-website"
  },
  {
    image: react_joblistings,
    title: "JobListings (React)",
    label: "Fullstack Website Application",
    description: "A simple crud react web app for viewing, creating, updating and deleting jobs.",
    technologies: [
      { name: "React", url: react },
      { name: "Tailwind CSS", url: tailwind },
      { name: "JSON Server", url: json },
    ],
    url: "https://github.com/TheVictorDevX/react-job-listings-app"
  },
  {
    image: vue_joblistings,
    title: "JobListings (Vue.js)",
    label: "Fullstack Website Application",
    description: "A simple crud Vue.js web app for viewing, creating, updating and deleting jobs.",
    technologies: [
      { name: "Vue.js", url: vue },
      { name: "Tailwind CSS", url: tailwind },
      { name: "JSON Server", url: json },
    ],
    url: "https://github.com/TheVictorDevX/vue-job-listings-app"
  }
];

const mediaProjects = [
  {
    image: funan,
    title: "Funan Techo Canal",
    label: "Video",
    description: "A short, powerful video on the Funan Techo Canal, a massive 180-kilometer waterway that aims to change Cambodia's economic future.",
    technologies: [
      { name: "DaVinci Resolve", url: davinci },
      { name: "After Effects", url: ae },
    ],
    url: "https://www.facebook.com/share/v/16siXbC72H/"
  },
  {
    image: techo,
    title: "Techo International Airport",
    label: "Video",
    description: "A compelling video on the Techo International Airport, a huge project that will transform Cambodia's economy.",
    technologies: [
      { name: "DaVinci Resolve", url: davinci },
      { name: "After Effects", url: ae },
    ],
    url: "https://www.facebook.com/share/v/1GFXjJQFPw/"
  },
  {
    image: youtube,
    title: "My Gaming YouTube Channel",
    label: "Video",
    description: "Produced and edited gaming videos for a YouTube channel.",
    technologies: [
      { name: "DaVinci Resolve", url: davinci },
      { name: "After Effects", url: ae },
      { name: "Photoshop", url: photoshop },
    ],
    url: "https://www.youtube.com/@TaiKaizen-hf1ik/"
  },
  {
    image: tiktok,
    title: "My Gaming TikTok #1",
    label: "Video",
    description: "Creating and managing short-form content on TikTok to drive audience growth and engagement.",
    technologies: [
      { name: "DaVinci Resolve", url: davinci },
      { name: "After Effects", url: ae },
      { name: "Photoshop", url: photoshop },
    ],
    url: "https://www.tiktok.com/@canyoubemysugarmommyplz"
  },
  {
    image: tiktok,
    title: "My Gaming TikTok #2",
    label: "Video",
    description: "Creating and managing short-form content on TikTok to drive audience growth and engagement.",
    technologies: [
      { name: "DaVinci Resolve", url: davinci },
      { name: "After Effects", url: ae },
      { name: "Photoshop", url: photoshop },
    ],
    url: "https://www.tiktok.com/@user900881227073"
  },
  {
    image: tiktok,
    title: "My Storytelling TikTok",
    label: "Video",
    description: "Tell compelling stories about fascinating topics.",
    technologies: [
      { name: "DaVinci Resolve", url: davinci },
      { name: "After Effects", url: ae },
      { name: "Photoshop", url: photoshop },
    ],
    url: "https://www.tiktok.com/@taikaizen9"
  },
];

function App() {

  return (
    <div className="w-screen bg-black text-white flex flex-col justify-center items-center">
      <Hero/>
      <Title title="My Skills & Technologies"/>
      <Skills/>
      <Title title="My Software Projects"/>
      <Projects projects={softwareProjects}/>
      <Title title="My Media Projects"/>
      <Projects projects={mediaProjects}/>
      <Title title="Thank you so much for visiting!"/>
    </div>
  )
}

export default App
