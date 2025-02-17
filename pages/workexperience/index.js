import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import Contact from "../../components/Contact";
const JobCard = ({ company, year, description, tools }) => (
  <div
    className="relative p-6 mb-6 rounded-lg transition-all duration-300 hover:transform hover:scale-105
    bg-gradient-to-r from-gray-900 to-gray-800 
    border border-gray-700 hover:border-gray-500
    shadow-lg hover:shadow-xl
    sm:p-4 md:p-6 lg:p-8 xl:p-10"
  >
    <div className="relative z-10">
      <h3
        className="flex flex-wrap items-center text-xl font-bold text-white mb-2 
        transform transition-all duration-300 hover:translate-x-2"
      >
        {company}
        <span className="ml-1 px-3 py-1 text-sm bg-gray-700 text-gray-300 rounded-full">
          {year}
        </span>
      </h3>
      <p
        className="text-gray-300 leading-relaxed mb-4 
        opacity-90 hover:opacity-100 transition-opacity duration-300
        text-sm sm:text-base md:text-lg lg:text-xl"
      >
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tools.map((tool, index) => (
          <span
            key={index}
            className="px-3 py-1 text-xs sm:text-sm md:text-base bg-gray-700 text-gray-300 rounded-full 
            shadow-md hover:bg-gray-600 hover:text-white transform transition-all duration-300 hover:translate-x-2"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
 
  </div>
);

const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-40">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500">
      <div className="h-16 w-16 rounded-full border-t-4 border-b-4 border-blue-300 animate-ping"></div>
    </div>
  </div>
);

export default function WorkExperience() {
  const [exp, setExp] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchExperience = async () => {
    try {
      const response = await fetch("/api/experience");
      const data = await response.json();
      setExp(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExperience();
  }, []);

  return (
    <Layout>
      <section className="mb-16 p-12">
        <h2 className="text-2xl font-bold mb-4">Work Experience 📚</h2>
        {loading ? (
          <LoadingSpinner />
        ) : (
          exp.map((job, index) => <JobCard key={index} {...job} />)
        )}
      </section>
    </Layout>
  );
}
