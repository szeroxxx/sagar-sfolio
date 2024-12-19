export default function WorkExperience() {
    const work = [
      {
        company: "Freelance React Developer at Brihati SoftTech",
        year: "July 2024 - Present",
        description:
          "Developed React/Next JS apps, streamlined teamwork, gamified interactions.",
        tools: "Next • React • Rizzui • tailwind",
      },
      {
        company: "Shukla Information Solutions Pvt Ltd - Full-Stack Developer",
        year: "June 2023 - May 2024",
        description:
          "Designed a reusable component library to reduce development time and optimized React.js and Node.js applications for performance and reliability across devices. Collaborated with teams to resolve issues, introduce features, and ensure project success.",
        tools: "React • Redux • Django  • Django Rest-framewrok • Boostrap •  ANT Design • Git, GitHub",
      },
      {
        company: "Renine Technologies - Full-Stack Developer",
        year: "May 2021 - May 2023",
        description:
          "Worked as a React Full Stack Developer, building user interfaces with React.js, HTML, CSS, and Bootstrap, and developing REST APIs using Django while ensuring high performance, responsiveness, and seamless collaboration with version control tools like Git",
        tools: "React • Redux • Django  • Django Rest-framewrok • Boostrap •  ANT Design • Git, GitHub",
      },
    ];
  
    return (
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Work Experience 📚</h2>
        {work.map((job, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-lg font-semibold">
              {job.company} <span className="text-gray-400">({job.year})</span>
            </h3>
            <p className="text-gray-300">{job.description}</p>
            <p className="text-gray-500 mt-1">{job.tools}</p>
          </div>
        ))}
      </section>
    );
  }
  