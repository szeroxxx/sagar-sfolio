// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const project = [
  {
    image: "../static/bot.jpg",
    title: "Zxbot",
    description:
      "A Telegram bot that continuously collects and organizes channel conversations, allowing users to retrieve relevant past discussions through intelligent queries built with Python.",
    link: "#",
  },
  {
    image: "../static/praci1.png",
    title: "Praci",
    description:
      "Praci is a project management tool built with Next.js, Redux, React, and Tailwind CSS. It allows task creation for workers, tracks user activity timelines, and monitors progress to enhance productivity and workflow efficiency.",
    link: "#",
  },
  {
    image: "../static/projectroller.png",
    title: "Project Roller",
    description:
      "Project Roller is a project tracking software designed for efficient management of industry-level projects. It includes a desktop app for tracking tasks and URL activities with time logs, and a web app for managing projects, generating reports (PDF/Excel), and improving productivity.",
    link: "#",
  },
  {
    image: "../static/health.png",
    title: "Health Coach Website",
    description:
      "Health Coach is a one-page website built with React.js and Tailwind CSS. Designed for a client, it showcases health and wellness services in a clean, responsive layout—created entirely using ChatGPT prompts for a fun and experimental approach.",
    link: "#",
  },
];
export default function projects(req, res) {
  res.status(200).json(project);
}
