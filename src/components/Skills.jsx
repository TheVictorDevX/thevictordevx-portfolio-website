import html from "../assets/icons/html.png";
import SkillCard from "./SkillCard";
import SkillSection from "./SkillSection";

const Skills = () => {
  return (
    <section className="flex flex-col justify-center lg:items-center gap-2 lg:px-43">

    <SkillSection title="Frontend">
        <SkillCard icon={html} title="HTML" />
        <SkillCard icon={html} title="CSS" />
        <SkillCard icon={html} title="JavaScript" />
        <SkillCard icon={html} title="TypeScript" />
        <SkillCard icon={html} title="Sass" />
        <SkillCard icon={html} title="Bootstrap" />
        <SkillCard icon={html} title="Tailwind CSS" />
        <SkillCard icon={html} title="React" />
        <SkillCard icon={html} title="Vue.js" />
    </SkillSection>

    <SkillSection title="Backend">
        <SkillCard icon={html} title="C#" />
        <SkillCard icon={html} title="PHP" />
        <SkillCard icon={html} title="Java" />
        <SkillCard icon={html} title="Spring Boot" />
    </SkillSection>

    <SkillSection title="Database">
        <SkillCard icon={html} title="MySQL" />
        <SkillCard icon={html} title="SQL Server" />
        <SkillCard icon={html} title="mongoDB" />
        <SkillCard icon={html} title="PostgreSQL" />
        <SkillCard icon={html} title="SQLite" />
    </SkillSection>

    <SkillSection title="Mobile & Deskstop">
        <SkillCard icon={html} title="Android Studio (Java)" />
        <SkillCard icon={html} title=".NET (WinForms, WPF)" />
        <SkillCard icon={html} title="Java(Swing, JavaFX)" />
    </SkillSection>

    <SkillSection title="Tools">
        <SkillCard icon={html} title="Git" />
        <SkillCard icon={html} title="GitHub" />
        <SkillCard icon={html} title="VS Code" />
        <SkillCard icon={html} title="XAMPP" />
        <SkillCard icon={html} title="Postman" />
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
