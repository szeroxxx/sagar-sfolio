const work = [
  {
    company: "Freelance React Developer at Brihati SoftTech",
    year: "July 2024 - Present",
    description:
      "Developed React/Next JS apps, streamlined teamwork, gamified interactions.",
    tools: ['Next' , 'React' , 'Redux' , 'Rizzui' , 'Tailwind' ,'Javascript', 'Python'],
  },
  {
    company: "Shukla Information Solutions Pvt Ltd - Full-Stack Developer",
    year: "June 2023 - May 2024",
    description:
      "Designed a reusable component library to reduce development time and optimized React.js and Node.js applications for performance and reliability across devices. Collaborated with teams to resolve issues, introduce features, and ensure project success.",
    tools: ['Nextjs' , 'React' , 'Redux'  , 'MaterialUI' , 'Boostrap' ,  'Nodejs', 'Javascript'],
  },
  {
    company: "Renine Technologies - Full-Stack Developer",
    year: "May 2021 - May 2023",
    description:
      "Worked as a React Full Stack Developer, building user interfaces with React.js, HTML, CSS, and Bootstrap, and developing REST APIs using Django while ensuring high performance, responsiveness, and seamless collaboration with version control tools like Git",
    tools:
      ['React' , 'Redux' , 'Django'  , 'Django Rest-framewrok' , 'Boostrap' ,  'ANT Design', 'Javascript', 'Python'],
  },
];

export default function experience(req, res) {
  res.status(200).json(work);
}
