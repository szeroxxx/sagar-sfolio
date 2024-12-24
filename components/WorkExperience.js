
import React, { useState, useEffect } from "react";

const JobCard = ({ company, year, description, tools }) => (
  <div className="mb-6">
    <h3 className="text-lg font-semibold">
      {company} <span className="text-gray-400">({year})</span>
    </h3>
    <p className="text-gray-300">{description}</p>
    <p className="text-gray-500 mt-1">{tools}</p>
  </div>
);

export default function WorkExperience() {
  const [exp, setExp] = useState([]);

  const fetchExperience = async () => {
    try {
      const response = await fetch("/api/experience");
      const data = await response.json();
      setExp(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchExperience();
  }, []);

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold mb-4">Work Experience 📚</h2>
      {exp.map((job, index) => (
        <JobCard key={index} {...job} />
      ))}
    </section>
  );
}
