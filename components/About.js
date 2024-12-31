import React from "react";
import { useRouter } from "next/router";
import styles from "../styles/About.module.css";

export default function About() {
  const router = useRouter();
  const isAbout = router.pathname === "/about";

  const handleButtonClick = () => {
    if (isAbout) {
      router.push("/");
    } else {
      router.push("/about");
    }
  };

  return (
    <section className="mb-16">
      <div className={`${styles.profileContainer} flex items-center`}>
        <div className={styles.imageWrapper}>
          <img
            src="../static/profilepic.jpg"
            alt="Profile Photo"
            className={`${styles.profileImage} rounded-full w-28 h-28 block`}
          />
          <div className={styles.animatedBorder}></div>
        </div>
      </div>
      <h1 className="text-3xl font-semibold ">Sagar Gohil</h1>
      <button
        onClick={handleButtonClick}
        className="bg-transparent mt-4 hover:bg-pink-400 text-pink-400 font-semibold hover:text-white py-2 px-4 border border-pink-400 hover:border-transparent rounded"
      >
        {isAbout ? "Back" : "About"}
      </button>
    </section>
  );
}
