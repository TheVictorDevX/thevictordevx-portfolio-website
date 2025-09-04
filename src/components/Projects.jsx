import ProjectCard from "./ProjectCard";

const Projects = ({projects}) => {
  return (
    <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 gap-3 xl:grid-cols-3">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default Projects