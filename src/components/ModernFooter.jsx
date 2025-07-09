import { resourcesLinks, platformLinks, communityLinks } from "../constants";

const socialLinks = [
  { href: "https://twitter.com/", icon: "fa-brands fa-x-twitter", label: "Twitter" },
  { href: "https://linkedin.com/", icon: "fa-brands fa-linkedin", label: "LinkedIn" },
  { href: "https://github.com/", icon: "fa-brands fa-github", label: "GitHub" },
];

const ModernFooter = () => {
  return (
    <footer className="bg-gradient-to-r from-black-900  to-purple-900 text-neutral-200 pt-12 pb-6 px-4 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-10">
        {/* Logo and About */}
        <div className="flex-1 mb-10 md:mb-0">
          <div className="flex items-center gap-3 mb-4">
            {/* Replace with your logo if you have one */}
            <span className="text-3xl font-extrabold text-white tracking-tight">Introvera</span>
          </div>
          <p className="text-neutral-400 max-w-sm mb-6">
            Empowering innovation with cutting-edge technology and creative solutions for a digital world.
          </p>
          <div className="flex gap-4">
            {socialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="hover:text-white text-2xl transition"
              >
                <i className={link.icon}></i>
              </a>
            ))}
          </div>
        </div>
        {/* Links */}
        <div className="flex-[2] grid grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Resources</h4>
            <ul className="space-y-2">
              {resourcesLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="hover:text-white transition">{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Platform</h4>
            <ul className="space-y-2">
              {platformLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="hover:text-white transition">{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Community</h4>
            <ul className="space-y-2">
              {communityLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="hover:text-white transition">{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Divider */}
      <div className="border-t border-neutral-800 mt-12 pt-6 text-center text-neutral-400 text-sm">
        &copy; {new Date().getFullYear()} TechCompany. All rights reserved.
      </div>
    </footer>
  );
};

export default ModernFooter;