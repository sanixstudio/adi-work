/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { Element } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { LuMousePointerClick } from "react-icons/lu";
import { AiFillGithub } from "react-icons/ai";

import { ThemeContext } from "../../context/themeContext";

import infomovia from "../../assets/images/infomovia.png";
import travelTracker from "../../assets/images/travel.png";
import heatherJansenImage from "../../assets/images/heatherHr.png";
import calmora from "../../assets/images/calmora.svg";
import beerApp from "../../assets/images/beer.png";
import chatBot from "../../assets/images/chatbot.png";
import dress from "../../assets/images/dress.png";

const ProjectCard = ({ project }) => {
  const { isDark } = useContext(ThemeContext);

  return (
    <motion.div
      className={`relative group p-4 rounded-lg ${
        isDark
          ? "border border-slate-700 bg-gradient-to-r from-slate-700 to-black/0"
          : "bg-slate-200 shadow-xl"
      }`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col justify-between h-full">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-auto max-h-[200px] object-contain rounded-lg transform transition-transform"
        />
        <span className="font-bold text-white text-center block py-3 mt-4 bg-slate-600 rounded-md">
          {project.name}
        </span>
      </div>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:backdrop-blur-sm group-hover:bg-black/50 transition-opacity rounded-lg">
        <div className="flex flex-col gap-4 text-white text-center">
          {project.codeUrl && (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex font-bold px-4 justify-center items-center gap-4 p-2 rounded-md hover:bg-white/50 text-lg border bg-white/20"
            >
              <span>Code</span>
              <AiFillGithub size={36} />
            </a>
          )}
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex font-bold px-4 justify-center items-center gap-4 p-2 rounded-md hover:bg-white/50 text-lg border bg-white/20"
          >
            <span>Demo</span>
            <LuMousePointerClick size={36} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Work = () => {
  const { isDark } = useContext(ThemeContext);

  const projects = [
    {
      type: "Full-stack",
      name: "Infomovia",
      image: infomovia,
      codeUrl: "https://github.com/sanixstudio/infomovia3.0.git",
      demoUrl: "https://infomovia3-0.vercel.app/",
    },
    {
      type: "Front-end",
      name: "Travel Tracker",
      image: travelTracker,
      codeUrl: "https://github.com/sanixstudio/travel-tracker-vite",
      demoUrl: "https://travel-tracker-wine.vercel.app/",
    },
    {
      type: "Front-end",
      name: "Heather Jansen",
      image: heatherJansenImage,
      // codeUrl: "https://github.com/sanixstudio/travel-tracker-vite",
      demoUrl: "https://hrj.design/",
    },
    {
      type: "Front-end",
      name: "Calmora",
      image: calmora,
      codeUrl: "https://github.com/sanixstudio/calmora",
      demoUrl: "https://calmora.vercel.app/",
    },
    {
      type: "Vanilla",
      name: "Wear Mahsa",
      image: dress,
      codeUrl: "",
      demoUrl: "https://www.wearmahsa.com/",
    },
    {
      type: "Vanilla",
      name: "Beer App",
      image: beerApp,
      codeUrl: "https://github.com/sanixstudio/beerApp",
      demoUrl: "https://sanixstudio.github.io/beerApp/",
    },
    {
      type: "Ai",
      name: "Summify Chat-bot",
      image: chatBot,
      codeUrl: "https://github.com/sanixstudio/ai-client",
      demoUrl: "https://ai-client-six.vercel.app/",
    },
  ];

  const [selectedType, setSelectedType] = useState("All");

  // Function to filter projects by type
  const filteredProjects = projects.filter(
    (project) => selectedType === "All" || project.type === selectedType
  );

  return (
    <Element name="work" id="#work">
      <div
        className={`${
          isDark ? "bg-slate-900 text-white" : "bg-gray-100"
        } overflow-hidden min-h-screen flex justify-center items-center relative`}
      >
        <div
          className={`absolute w-[600px] h-[600px] rounded-full blur-[8em] ${
            isDark ? "bg-blue-900/70" : ""
          }`}
        ></div>
        <div className="container my-20 px-10 mx-auto p-4">
          <h1 className="text-4xl md:text-6xl mb-20 font-bold uppercase">
            Projects
          </h1>
          <div className="mb-4">
            <select
              className="border w-full sm:w-[236px] p-2 py-3 rounded-md mb-20 bg-slate-700 text-white"
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Front-end">Front-end</option>
              <option value="Full-stack">Full-stack</option>
              <option value="Vanilla">Vanilla</option>
              <option value="Ai">AI App</option>
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
