import { MdMail } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

export default function Contact() {
    const contacts = [
      {
        platform: "Email",
        link: "mailto:sagargohil564@gmail.com",
        icon:  <MdMail />,
        text: "Send me an email",
      },
      {
        platform: "GitHub",
        link: "https://github.com/thes0796?tab=repositories",
        icon: <FaGithub />,
        text: "Check out my GitHub",
      },
      {
        platform: "LinkedIn",
        link: "https://www.linkedin.com/in/sagarxero?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        icon: <FaLinkedin />,
        text: "Connect on LinkedIn",
      },
      {
        platform: "Instagram",
        link: "https://www.instagram.com/thes0796/profilecard/?igsh=cDU1OW12cDdyaGNv",
        icon: <GrInstagram />,
        text: "Follow me on Instagram",
      },
    ];
  
    return (
      <section className="p-8 bg-black text-white">
        <h2 className="text-2xl font-bold mb-6">CONTACT ME</h2>
        <div className="space-y-4">
          {contacts.map((contact) => (
            <div key={contact.platform} className="flex items-center space-x-4">
              <span className="text-2xl">{contact.icon}</span>
              <a
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-lg"
              >
                {contact.text} ↗
              </a>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-6">
          Designed and built by sagar
        </p>
      </section>
    );
  }
  