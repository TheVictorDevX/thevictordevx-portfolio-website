import React from "react";

// Main ProjectCard component
const ProjectCard = ({ project }) => {
  return (
    // Changed the outer div to an anchor tag to make the entire card a link
    <a 
      href={project.githubUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="flex flex-col max-w-sm mx-auto my-6 bg-stone-900 rounded-3xl shadow-xl overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer no-underline text-current"
    >
      {/* Project Image */}
      <div className="relative overflow-hidden w-full h-48">
        <img
          src={project.image}
          alt={`Image for ${project.title}`}
          className="absolute inset-0 w-full h-full object-cover rounded-t-3xl"
        />
      </div>

      {/* Card Content */}
      <div className="p-2 flex flex-col flex-grow">
        <div className="flex flex-col items-start justify-between mb-2">
          {/* Project Title and Label */}
          <h2 className="text-2xl font-bold text-neutral-50 tracking-wide mb-1">
            {project.title}
          </h2>
          <span className="bg-yellow-500 text-stone-900 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
            {project.label}
          </span>
        </div>
        
        {/* Project Description */}
        <p className="text-neutral-400 mt-2 mb-4 text-sm leading-relaxed flex-grow">
          {project.description}
        </p>
        
        {/* Technology Icons */}
        <div className="flex flex-wrap gap-2 pt-4 border-t border-stone-800">
          {project.technologies.map((tech, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 bg-stone-800 text-neutral-300 px-3 py-1 rounded-full text-sm"
            >
              {/* Using an img tag with the URL to display the icon */}
              <img src={tech.url} alt={`${tech.name} logo`} className="h-5 w-5" />
              <span className="font-medium">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
