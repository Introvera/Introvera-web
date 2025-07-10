import { useState, useRef, useEffect } from "react";
import { CheckCircle2 } from "lucide-react";
import { projects } from "../constants";

const Projects = () => {
  // Track the current image index for each project
  const [imageIndexes, setImageIndexes] = useState(
    projects.map(() => 0)
  );

  const handlePrevImage = (projectIdx, imagesLength) => {
    setImageIndexes((prev) =>
      prev.map((idx, i) =>
        i === projectIdx ? (idx - 1 + imagesLength) % imagesLength : idx
      )
    );
  };

  const handleNextImage = (projectIdx, imagesLength) => {
    setImageIndexes((prev) =>
      prev.map((idx, i) =>
        i === projectIdx ? (idx + 1) % imagesLength : idx
      )
    );
  };

  // Ref for the outer carousel container
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        // Use the data-card selector for reliability
        const card = carouselRef.current.querySelector("[data-card]");
        if (card) {
          const scrollAmount = card.offsetWidth + 16; // 16px gap (adjust if needed)
          // If at end, scroll back to start
          if (
            carouselRef.current.scrollLeft + carouselRef.current.offsetWidth >=
            carouselRef.current.scrollWidth - 10 // small buffer for float rounding
          ) {
            carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
          } else {
            carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
          }
        }
      }
    }, 2000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-10" id="projects">
      <h2 className="text-3xl sm:text-5xl lg:text-5xl text-center my-8 tracking-wide">
        Our {" "}
        <span className="bg-gradient-to-r from-blue-500 to-purple-800 text-transparent bg-clip-text">
          Projects
        </span>
      </h2>
      <div
        className="flex overflow-x-auto gap-2 sm:gap-4 md:gap-6 pb-4 hide-scrollbar"
        ref={carouselRef}
      >
        {projects.map((project, projectIdx) => (
          <div
            key={projectIdx}
            data-card
            className="
              min-w-[140px] 
              sm:min-w-[200px] 
              md:min-w-[260px] 
              lg:min-w-[300px] 
              xl:min-w-[350px] 
              max-w-xs 
              bg-white dark:bg-neutral-900 
              border border-neutral-700 
              rounded-xl shadow-md 
              flex-shrink-0 
              pt-0 pb-6 px-0
              transition-all
            "
          >
            {/* Inner carousel: images for this project */}
            <div className="flex flex-col items-center">
              <div className="relative w-full flex flex-col items-center">
                {project.images && project.images.length > 0 && (
                  <>
                    <div className="w-full h-28 sm:h-36 md:h-44 lg:h-48 bg-neutral-200 dark:bg-neutral-800 rounded-t-xl overflow-hidden">
                      <img
                        src={project.images[imageIndexes[projectIdx]]}
                        alt={project.title}
                        className="w-full h-full object-cover rounded-t-xl"
                      />
                    </div>
                    <div className="flex gap-2 mt-2 justify-center">
                      {project.images.map((_, imgIdx) => (
                        <button
                          key={imgIdx}
                          onClick={() => {
                            setImageIndexes((prev) =>
                              prev.map((idx, i) =>
                                i === projectIdx ? imgIdx : idx
                              )
                            );
                          }}
                          className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                            imageIndexes[projectIdx] === imgIdx
                              ? "bg-blue-600"
                              : "bg-neutral-400"
                          }`}
                          aria-label={`Go to image ${imgIdx + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 px-2 sm:px-4 md:px-6">{project.title}</h3>
            <p className="mb-2 sm:mb-4 text-xs sm:text-sm md:text-base text-neutral-600 dark:text-neutral-300 px-2 sm:px-4 md:px-6">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;