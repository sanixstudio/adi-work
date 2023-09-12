/* eslint-disable react/prop-types */
import { useState } from "react";
import { Element } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="relative group cursor-pointer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
    >
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-auto max-h-[300px] object-cover rounded-md transform transition-transform group-hover:scale-105"
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="text-white text-center">
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block mb-2"
          >
            Code
          </a>
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
            Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Work = () => {
  const projects = [
    {
      type: "Front-end",
      name: "Project 1",
      image: "https://picsum.photos/id/297/200/300",
      codeUrl: "https://github.com/project1",
      demoUrl: "https://demo.project1.com",
    },
    {
      type: "Back-end",
      name: "Project 2",
      image: "https://picsum.photos/id/27/200/300",
      codeUrl: "https://github.com/project2",
      demoUrl: "https://demo.project2.com",
    },
    {
      type: "Vanilla",
      name: "Project 3",
      image: "https://picsum.photos/id/237/200/300",
      codeUrl: "https://github.com/project3",
      demoUrl: "https://demo.project3.com",
    },
    {
      type: "Back-end",
      name: "Project 4",
      image: "https://picsum.photos/id/637/200/300",
      codeUrl: "https://github.com/project4",
      demoUrl: "https://demo.project4.com",
    },
  ];

  const [selectedType, setSelectedType] = useState("All");

  // Function to filter projects by type
  const filteredProjects = projects.filter(
    (project) => selectedType === "All" || project.type === selectedType
  );

  return (
    <Element name="work" id="#work">
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-slate-200 to-slate-100">
        <div className="container px-20 mx-auto p-4">
          <h1 className="text-4xl md:text-6xl mb-20 font-bold uppercase">
            Projects
          </h1>
          <div className="mb-4">
            <select
              className="border p-2 rounded-md mb-20"
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Front-end">Front-end</option>
              <option value="Back-end">Back-end</option>
              <option value="Vanilla">Vanilla</option>
            </select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Work;
