import { FileCode } from "lucide-react";
import { Handshake } from "lucide-react";
import { Cpu } from "lucide-react";
import { SmartphoneNfc } from "lucide-react";
import { Clock2 } from "lucide-react";
import { Users } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const chooseus = [
  {
    icon: <FileCode />,
    text: "Clean Code",
    description:
      "We write readable, maintainable code that’s easy to scale.",
  },
  {
    icon: <Cpu />,
    text: "Agile Process",
    description:
      "We work in fast, flexible sprints to deliver results quickly.",
  },
  {
    icon: <SmartphoneNfc />,
    text: "Clear Communication",
    description:
      "We keep you updated every step of the way — no surprises.",
  },
  {
    icon: <Handshake />,
    text: "Business-Focused",
    description:
      "Our solutions align with your goals, not just the tech.",
  },
  {
    icon: <Clock2 />,
    text: "On-Time Delivery",
    description:
      "We respect your deadlines and deliver as promised.",
  },
  {
    icon: <Users />,
    text: "Skilled Team",
    description:
      "Experienced developers, designers, and strategists on every project.",
  },
];

export const checklistItems = [
  {
    title: "Web App Development",
    description:
      " Fast, modern, and user-centric applications built for performance and scale.",
  },
  {
    title: "Mobile App Development",
    description:
      "Seamless native & cross-platform apps with clean UI and robust backends.",
  },
  {
    title: "UI/UX Design",
    description:
      "Human-centered design that turns ideas into intuitive experiences.",
  },
  {
    title: "Backend/API Development",
    description:
      "Secure, scalable APIs and systems using modern backend frameworks.",
  },
  {
    title: "Cloud & DevOps",
    description:
      "Deployment, monitoring, and automation with cloud-native solutions.",
  },
  {
    title: "Consulting & Strategy",
    description:
      "Technical expertise to turn your product vision into a growth engine.",
  },
];

export const projects = [
  {
    title: "Vivaha Plans",
    description: "Short description about Project A.",
    images: [
      "/img/projectA1.jpg",
      "/img/projectA2.jpg"
    ]
  },
  {
    title: "Ceylon Trails",
    description: "Short description about Project B.",
    images: [
      "/img/projectB1.jpg",
      "/img/projectB2.jpg"
    ],
  },
  {
    title: "Schoolify LMS",
    description: "Short description about Project B.",
    images: [
      "/img/projectB1.jpg",
      "/img/projectB2.jpg"
    ],
  },
  {
    title: "We Neighbor",
    description: "Short description about Project B.",
    images: [
      "/img/projectB1.jpg",
      "/img/projectB2.jpg"
    ],
  },
  {
    title: "Project",
    description: "Short description about Project B.",
    images: [
      "/img/projectB1.jpg",
      "/img/projectB2.jpg"
    ],
  },
  {
    title: "Project ",
    description: "Short description about Project B.",
    images: [
      "/img/projectB1.jpg",
      "/img/projectB2.jpg"
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "LinkedIn" },
  { href: "#", text: "Facebook" },
  { href: "#", text: "Instagram" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
