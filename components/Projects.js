import React, { useState, useEffect } from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="transition-transform duration-300 hover:shadow-gray-400 hover:scale-105">
      <div className="bg-gray-900 text-white rounded-lg shadow-lg p-6 flex flex-col lg:flex-row gap-6 items-center">
        <div className="lg:w-1/2">
          <img
            src={project.image}
            alt={project.title}
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-semibold mb-4">{project.title}</h2>
          <p className="text-gray-300 mb-6">{project.description}</p>
        </div>
      </div>
    </div>
  );
};

const ProjectShowcase = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [projects, setProData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/hello");
        const data = await response.json();
        setProData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleLoadMore = () => {
    setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 3);
  };

  return (
    <section className="container mx-auto my-12">
      <h2 className="text-2xl font-bold mb-4">Rocketed Projects 🚀</h2>
      {projects.slice(0, visibleProjects).map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
      {visibleProjects < projects.length && (
        <div className="text-center mt-6">
          <button
            onClick={handleLoadMore}
            className="bg-pink-400 hover:bg-pink-500 text-white font-semibold py-2 px-6 rounded"
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
};

export default ProjectShowcase;
