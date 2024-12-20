import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiMail, FiMapPin } from "react-icons/fi";
import { SiGithub, SiTiktok, SiTwitter, SiYoutube } from "react-icons/si";
import { CiMail } from "react-icons/ci";
import { MdMail } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

const RevealBento = () => {
  return (
    <div className="min-h-screen bg-zinc-900 px-4 py-12 text-zinc-50">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
      >
        <HeaderBlock />
        <SocialsBlock />
        <AboutBlock />
      </motion.div>
    </div>
  );
};

const Block = ({ className, ...rest }) => {
    return (
      <motion.div
        variants={{
          initial: {
            scale: 0.5,
            y: 50,
            opacity: 0,
          },
          animate: {
            scale: 1,
            y: 0,
            opacity: 1,
          },
        }}
        transition={{
          type: "spring",
          mass: 3,
          stiffness: 400,
          damping: 50,
        }}
        className={twMerge(
          "col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6",
          className
        )}
        {...rest} // Forward extra props like whileHover
      />
    );
  };
  

const HeaderBlock = () => (
  <Block className="col-span-12 row-span-2 md:col-span-6">
    <img
        src="../static/profilepic.jpg"
        alt="Profile Photo"
        className="rounded-full w-28 h-28 mb-4 block"
      />
    <h1 className="mb-12 text-4xl font-medium leading-tight">
      Hi, I'm Sagar.{" "}
      <span className="text-zinc-400">
        I build cool websites like this one.
      </span>
    </h1>
  </Block>
);

const SocialsBlock = () => (
    <>
      <Block
        whileHover={{
          rotate: "2.5deg",
          scale: 1.1,
        }}
        className="col-span-6 bg-red-500 md:col-span-3"
      >
        <a
          href="#"
          className="grid h-full place-content-center text-3xl text-white"
        >
          <MdMail />
        </a>
      </Block>
      <Block
        whileHover={{
          rotate: "-2.5deg",
          scale: 1.1,
        }}
        className="col-span-6 bg-green-600 md:col-span-3"
      >
        <a
          href="#"
          className="grid h-full place-content-center text-3xl text-white"
        >
          <FaGithub />
        </a>
      </Block>
      <Block
        whileHover={{
          rotate: "-2.5deg",
          scale: 1.1,
        }}
        className="col-span-6 bg-zinc-50 md:col-span-3"
      >
        <a
          href="#"
          className="grid h-full place-content-center text-3xl text-black"
        >
          <FaLinkedin />
        </a>
      </Block>
      <Block
        whileHover={{
          rotate: "2.5deg",
          scale: 1.1,
        }}
        className="col-span-6 bg-blue-500 md:col-span-3"
      >
        <a
          href="#"
          className="grid h-full place-content-center text-3xl text-white"
        >
          <GrInstagram />
        </a>
      </Block>
    </>
  );
  

const AboutBlock = () => (
  <Block className="col-span-12 text-3xl leading-snug">
    <p>
        Experienced Software Developer{" "}
      <span className="text-zinc-400">
       with 3+ years of expertise in crafting scalable applications across diverse domains. Passionate about delivering innovative solutions and achieving impactful milestones in software engineering..
      </span>
    </p>
  </Block>
);


export default RevealBento;
