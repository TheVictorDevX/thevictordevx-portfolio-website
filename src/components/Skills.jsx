import html from "../assets/icons/html.png";
import css from "../assets/icons/css.png";
import js from "../assets/icons/js.png";
import ts from "../assets/icons/ts.png";
import sass from "../assets/icons/sass.png";
import bs from "../assets/icons/bs.png";
import tailwind from "../assets/icons/tailwind.png";
import react from "../assets/icons/react.png";
import vue from "../assets/icons/vue.png";

import cs from "../assets/icons/cs.png";
import php from "../assets/icons/php.png";
import java from "../assets/icons/java.png";
import spring from "../assets/icons/spring.png";

import mysql from "../assets/icons/mysql.png";
import sqlserver from "../assets/icons/sqlserver.png";
import mongodb from "../assets/icons/mongodb.png";
import postgresql from "../assets/icons/postgresql.png";
import sqlite from "../assets/icons/sqlite.png";

import androidstudio from "../assets/icons/androidstudio.png";
import dotnet from "../assets/icons/dotnet.png";

import git from "../assets/icons/git.png";
import github from "../assets/icons/github.png";
import vscode from "../assets/icons/vscode.png";
import xampp from "../assets/icons/xampp.png";
import postman from "../assets/icons/postman.png";
import vercel from "../assets/icons/vercel.png";

import SkillCard from "./SkillCard";
import SkillSection from "./SkillSection";


const Skills = () => {
  return (
    <section className="flex flex-col justify-center items-center lg:items-center gap-2 lg:px-43 xl:w-270">

    <SkillSection title="Frontend">
        <SkillCard icon={html} title="HTML" />
        <SkillCard icon={css} title="CSS" />
        <SkillCard icon={js} title="JavaScript" />
        <SkillCard icon={ts} title="TypeScript" />
        <SkillCard icon={sass} title="Sass" />
        <SkillCard icon={bs} title="Bootstrap" />
        <SkillCard icon={tailwind} title="Tailwind CSS" />
        <SkillCard icon={react} title="React" />
        <SkillCard icon={vue} title="Vue.js" />
    </SkillSection>

    <SkillSection title="Backend">
        <SkillCard icon={cs} title="C#" />
        <SkillCard icon={php} title="PHP" />
        <SkillCard icon={java} title="Java" />
        <SkillCard icon={spring} title="Spring Boot" />
    </SkillSection>

    <SkillSection title="Database">
        <SkillCard icon={mysql} title="MySQL" />
        <SkillCard icon={sqlserver} title="SQL Server" />
        <SkillCard icon={mongodb} title="mongoDB" />
        <SkillCard icon={postgresql} title="PostgreSQL" />
        <SkillCard icon={sqlite} title="SQLite" />
    </SkillSection>

    <SkillSection title="Mobile & Deskstop">
        <SkillCard icon={androidstudio} title="Android Studio (Java)" />
        <SkillCard icon={dotnet} title=".NET (WinForms, WPF)" />
        <SkillCard icon={java} title="Java(Swing, JavaFX)" />
    </SkillSection>

    <SkillSection title="Tools">
        <SkillCard icon={git} title="Git" />
        <SkillCard icon={github} title="GitHub" />
        <SkillCard icon={vscode} title="VS Code" />
        <SkillCard icon={xampp} title="XAMPP" />
        <SkillCard icon={postman} title="Postman" />
        <SkillCard icon={vercel} title="Vercel" />
    </SkillSection>

    <SkillSection title="Design">
        <SkillCard icon={html} title="Figma" />
        <SkillCard icon={html} title="Photoshop" />
        <SkillCard icon={html} title="Adobe XD" />
        <SkillCard icon={html} title="Adobe Illustrator" />
    </SkillSection>

    <SkillSection title="Video Editing">
        <SkillCard icon={html} title="Adobe Premiere Pro" />
        <SkillCard icon={html} title="Adobe After Effects" />
        <SkillCard icon={html} title="DaVinci Resolve" />
    </SkillSection>

    </section>
    
    
  );
};

export default Skills;
