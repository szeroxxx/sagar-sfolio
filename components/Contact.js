export default function Contact() {
    const contacts = [
      {
        platform: "Email",
        link: "mailto:your-email@example.com",
        icon: "✉️",
        text: "Send me an email",
      },
      {
        platform: "GitHub",
        link: "https://github.com/your-profile",
        icon: "🐙",
        text: "Check out my GitHub",
      },
      {
        platform: "LinkedIn",
        link: "https://linkedin.com/in/your-profile",
        icon: "🔗",
        text: "Connect on LinkedIn",
      },
      {
        platform: "Instagram",
        link: "https://instagram.com/your-profile",
        icon: "📷",
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
  