import { useEffect, useRef, useState } from "react";

// Example team data
const teamMembers = [
	{
		name: "Nimesh Deepamal",
		position: "Co-Founder",
		image: "/img/team/alice.jpg",
	},
	{
		name: "Sonal Kethaka",
		position: "Co-Founder",
		image: "/img/team/bob.jpg",
	},
	{
		name: "Deeshana Liyanage",
		position: "Co-Founder",
		image: "/img/team/carol.jpg",
	},
	{
		name: "Hasaru Uyanahewa",
		position: "Co-Founder",
		image: "/img/team/david.jpg",
	},
	{
		name: "Malindu Bandara",
		position: "Developer",
		image: "/img/team/david.jpg",
	},
	{
		name: "Sankaja Pandipperuma",
		position: "Developer",
		image: "/img/team/david.jpg",
	},
	{
		name: "Malindu Bandara",
		position: "Developer",
		image: "/img/team/david.jpg",
	},
	{
		name: "Malindu Bandara",
		position: "Developer",
		image: "/img/team/david.jpg",
	},
	{
		name: "Malindu Bandara",
		position: "Developer",
		image: "/img/team/david.jpg",
	},
];

// Responsive: 5 cards (xl), 3 cards (md, sm), 3 cards (xs)
const getCardsToShow = () => {
	if (typeof window !== "undefined") {
		if (window.innerWidth >= 1280) return 5; // xl and up
		if (window.innerWidth >= 640) return 3; // sm and up
		return 3; // xs: show 3 small cards
	}
	return 3;
};

const Team = () => {
	const [start, setStart] = useState(0);
	const [cardsToShow, setCardsToShow] = useState(getCardsToShow());
	const timeoutRef = useRef(null);

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

	// Get the visible cards, wrap around if needed
	const visibleMembers = [];
	for (let i = 0; i < cardsToShow; i++) {
		visibleMembers.push(teamMembers[(start + i) % teamMembers.length]);
	}

	return (
		<div className="mt-16 mb-16">
			<h2 className="text-3xl sm:text-5xl lg:text-5xl text-center my-8 tracking-wide">
				Meet Our{" "}
				<span className="bg-gradient-to-r from-blue-500 to-purple-800 text-transparent bg-clip-text">
					Team
				</span>
			</h2>
			<div className="flex justify-center gap-2 sm:gap-4 xl:gap-8 transition-all">
				{visibleMembers.map((member, idx) => (
					<div
						key={idx}
						className={`
              bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-xl shadow-md flex flex-col items-center
              p-2 sm:p-4 xl:p-6
              min-w-[90px] sm:min-w-[140px] md:min-w-[180px] xl:min-w-[220px]
              max-w-xs transition-all duration-500
            `}
					>
						<img
							src={member.image}
							alt={member.name}
							className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 xl:w-24 xl:h-24 object-cover rounded-full border-2 sm:border-4 border-purple-500 shadow mb-2 sm:mb-4"
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