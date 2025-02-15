"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

export default function About() {
  const [windowWidth, setWindowWidth] = useState(0);
  const router = useRouter();

  const handleWrokButtonClick = () => {
    router.push("/workexperience");
  };

  const handleProjectButtonClick = () => {
    router.push("/project");
  };
  const handleAbouttButtonClick = () => {
    router.push("/about");
  };
  const handleSkillButtonClick = () => {
    router.push("/skills");
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-12 sm:py-16"
      style={{
        // backgroundImage: "url('/profilepic.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 backdrop-blur-sm bg-black/30" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-start relative z-10 gap-8 lg:gap-12"
      >
        <motion.div
          className="w-full lg:w-1/3 flex flex-col items-center lg:items-start"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <motion.div
            className="relative"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-75 animate-pulse" />
            <img
              src="/profilepic.jpg"
              alt="Profile Photo"
              className="relative rounded-full w-48 h-48 sm:w-64 sm:h-64 object-cover border-2 border-white/50"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-6 ml-5 mt-10 text-center lg:text-left w-full"
          >
            <h2 className="items-center text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 tracking-wider mb-2">
              Sagar Gohil
            </h2>
          </motion.div>
        </motion.div>
        <motion.div
          className="w-full lg:w-2/3 text-center lg:text-left"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.span
              className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{
                duration: 2,
                ease: "easeOut",
              }}
            >
              Software
            </motion.span>
            <motion.span
              className="text-white block sm:inline"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
            >
              {" "}
              Devloper.
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg text-gray-300 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Innovative Software Developer with 3+ years of experience crafting
            high-performance web applications using React.js, Next.js, and
            modern UI frameworks. Adept at blending sleek, responsive designs
            with robust backend solutions in Node.js and Django to deliver
            seamless user experiences. Passionate about pushing boundaries in
            web development with a keen eye for detail and performance
            optimization.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.button
              onClick={handleAbouttButtonClick}
              whileHover={{
                scale: 1.05,
                textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold"
            >
              About me
            </motion.button>

            <motion.button
              onClick={handleWrokButtonClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-white/20 rounded-full text-white font-semibold 
                       hover:bg-white/10 transition-all duration-300"
            >
              Explore My Work
            </motion.button>
            <motion.button
              onClick={handleSkillButtonClick}
              whileHover={{
                scale: 1.05,
                textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold"
            >
              Skills
            </motion.button>
            <motion.button
              onClick={handleProjectButtonClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-white/20 rounded-full text-white font-semibold 
                       hover:bg-white/10 transition-all duration-300"
            >
              Projects
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
