import React from "react";

const ProjectCard = ({ project }) => {
  return (
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
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-white text-gray-800 font-medium rounded-lg shadow hover:bg-gray-200 transition duration-300"
        >
          Read more
        </a>
      </div>
    </div>
  );
};

// Example Usage
const ProjectShowcase = () => {
  const projects = [
    {
      image: "https://via.placeholder.com/600x400",
      title: "Moviez",
      description:
        "Movies - Modern Movie Database Website is a showcase of cutting-edge web development. Crafted with Next.js, Redux, Tailwind CSS, and SASS.",
      link: "#",
    },
    {
      image: "https://via.placeholder.com/600x400",
      title: "E-Commerce Platform",
      description:
        "A complete e-commerce platform built with React.js, Node.js, and MongoDB, providing seamless shopping experiences.",
      link: "#",
    },
  ];

  return (
    <section className="container mx-auto my-12 ">
      <h2 className="text-2xl font-bold mb-4">Rocketed Projects 🚀</h2>
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </section>
  );
};

export default ProjectShowcase;
