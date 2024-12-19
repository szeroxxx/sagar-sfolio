// export default function Projects() {
//     const projects = [
//       {
//         name: "Skylab",
//         description: "Social Media App and CMS using White Label Principle.",
//         tools: "Next • React • SSR • Cookies",
//       },
//       {
//         name: "Drivo",
//         description: "Car renting Web App with Prepayment ecosystem.",
//         tools: "Next • Spring • Prepayment",
//       },
//       {
//         name: "AnySoft",
//         description: "Software and Service platform with advanced form motion.",
//         tools: "Next • Framer Motion • Advance Form",
//       },
//     ];
  
//     return (
//       <section>
//         <h2 className="text-2xl font-bold mb-4">Rocketed Projects 🚀</h2>
//         {projects.map((project, index) => (
//           <div key={index} className="mb-6">
//             <h3 className="text-lg font-semibold">{project.name}</h3>
//             <p className="text-gray-300">{project.description}</p>
//             <p className="text-gray-500 mt-1">{project.tools}</p>
//           </div>
//         ))}
//       </section>
//     );
//   }



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
    ]

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

  