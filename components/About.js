import { useRouter } from "next/router";
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
      <img
        src="../static/profilepic.jpg"
        alt="Profile Photo"
        className="rounded-full w-28 h-28 mb-4 block"
      />
      <h1 className="text-3xl font-semibold mb-2">Sagar Gohil</h1>
      {/* <p className="text-gray-400">
        I enjoy building dynamic, creative products from start to finish.
        Focused on intuitive experiences that grow with user metrics.
      </p> */}
      <button
        onClick={handleButtonClick}
        className="bg-transparent mt-4 hover:bg-pink-400 text-pink-400 font-semibold hover:text-white py-2 px-4 border border-pink-400 hover:border-transparent rounded"
      >
        {isAbout ? "Back"   : "About" }

      </button>
    </section>
  );
}
