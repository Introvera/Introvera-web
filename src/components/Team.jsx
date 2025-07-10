import { useEffect, useRef, useState } from "react";
import nimesh from "../assets/team-photos/nimesh.png";
import sonal from "../assets/team-photos/sonal.jpeg";
import deeshana from "../assets/team-photos/deeshana.jpeg";
import hasaru from "../assets/team-photos/hasaru.jpeg";
// import malindu from "../assets/team-photos/malindu.jpeg";
import sankaja from "../assets/team-photos/sankaja.jpeg";
import sandara from "../assets/team-photos/sandara.jpeg";
import nelith from "../assets/team-photos/nelith.jpeg";
import rasindu from "../assets/team-photos/rasindu.jpeg";
// import sahan from "../assets/team-photos/sahan.jpeg";
// import pasindufrom "../assets/team-photos/pasindu.jpg";
// import kisara from "../assets/team-photos/kisara.jpeg";
// import nithula from "../assets/team-photos/nithula.jpeg";

const teamMembers = [
  {
    name: "Nimesh Deepamal",
    position: "Co-Founder",
    image: nimesh,
  },
  {
    name: "Sonal Kethaka",
    position: "Co-Founder",
    image: sonal,
  },
  {
    name: "Deeshana Liyanage",
    position: "Co-Founder",
    image: deeshana,
  },
  {
    name: "Hasaru Uyanahewa",
    position: "Co-Founder",
    image: hasaru,
  },
//   {
//     name: "Malindu Bandara",
//     position: "Co-Founder",
//     image: malindu,
//   },
  {
    name: "Sankaja Pandipperuma",
    position: "Developer",
    image: sankaja,
  },
  {
    name: "Sandara Apoorwa",
    position: "Developer",
    image: sandara,
  },
//   {
//     name: "Sahan Randeepa",
//     position: "Developer",
//     image: sahan,
//   },
  {
    name: "Nelith Nethsanda",
    position: "Developer",
    image: nelith,
  },
//   {
//     name: "Pasindu Dilshan",
//     position: "Developer",
//     image: pasindu,
//   },
  {
    name: "Rasindu Bandara",
    position: "Developer",
    image: rasindu,
  },
//   {
//     name: "Kisara Nuwanga",
//     position: "Developer",
//     image: kisara,
//   },
//   {
//     name: "Nithula Hansaja",
//     position: "Developer",
//     image: nithula,
//   },
];

const getCardsToShow = () => {
  if (typeof window !== "undefined") {
    if (window.innerWidth >= 1280) return 5;
    if (window.innerWidth >= 640) return 3;
    return 3;
  }
  return 3;
};

const Team = () => {
  const [start, setStart] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(getCardsToShow());
  const timeoutRef = useRef(null);
  const containerRef = useRef(null);

  // Responsive cardsToShow
  useEffect(() => {
    const handleResize = () => setCardsToShow(getCardsToShow());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-slide logic
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setStart((prev) => (prev + 1) % teamMembers.length);
    }, 2500);
    return () => clearTimeout(timeoutRef.current);
  }, [start, cardsToShow]);

  // Scroll to active card in container
  useEffect(() => {
    if (containerRef.current) {
      const cardWidth = containerRef.current.firstChild.offsetWidth;
      containerRef.current.scrollTo({
        left: cardWidth * start,
        behavior: "smooth",
      });
    }
  }, [start]);

  // Get visible members to display - but we will actually show all, so use all teamMembers here
  // (auto scroll will shift viewport)
  const visibleMembers = teamMembers;

  return (
    <div className="mt-16 mb-16 max-w-full">
      <h2 className="text-3xl sm:text-5xl lg:text-5xl text-center my-8 tracking-wide">
        Meet Our{" "}
        <span className="bg-gradient-to-r from-blue-500 to-purple-800 text-transparent bg-clip-text">
          Team
        </span>
      </h2>

      {/* Scroll container */}
      <div
        ref={containerRef}
        className="flex gap-2 sm:gap-4 xl:gap-8 overflow-x-auto scroll-smooth scrollbar-hide"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {visibleMembers.map((member, idx) => (
          <div
            key={idx}
            className="
              flex-shrink-0
              bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-xl shadow-md flex flex-col items-center
              p-2 sm:p-4 xl:p-6
              min-w-[90px] sm:min-w-[140px] md:min-w-[180px] xl:min-w-[220px]
              max-w-xs
              h-32 sm:h-44 md:h-52 xl:h-60
              transition-all duration-500
              hover:border-gradient-to-r hover:from-blue-500 hover:to-purple-800 hover:border-4
              "
            style={{ scrollSnapAlign: "start" }}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 xl:w-24 xl:h-24 object-cover rounded-full shadow mb-2 sm:mb-4"
            />
            <div className="text-xs sm:text-sm md:text-base xl:text-lg font-semibold text-center">
              {member.name}
            </div>
            <div className="text-neutral-500 dark:text-neutral-300 text-[10px] sm:text-xs md:text-sm xl:text-base text-center">
              {member.position}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
