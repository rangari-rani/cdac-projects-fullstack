import { tcs, percept, cdac } from "../assets/images";
import {
  cplus,
  c,
  springboot,
  mysql,
  java,
  contact,
  css,
  github,
  html,
  javascript,
  linkedin,
  mui,
  react,
  tailwindcss,
  house,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: java,
    name: "Java",
    type: "Programming Language",
  },
  {
    imageUrl: c,
    name: "C",
    type: "Programming Language",
  },
  {
    imageUrl: cplus,
    name: "C ++",
    type: "Programming Language",
  },
  {
    imageUrl: springboot,
    name: "Springboot",
    type: "Backend",
  },
  {
    imageUrl: mysql,
    name: "MySQL",
    type: "Database",
  },

  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
];

export const experiences = [
  {
    title: "Post Graduate Diploma in Advanced Computing (PG-DAC)",
    company_name: "CDAC – SoftPolynomials, Nagpur, India",
    icon: cdac,
    iconBg: "#d0e6ff",
    date: "March 2023 – August 2023",
    points: [
      "Completed a 6-month intensive Java full-stack training under CDAC, covering core and advanced computing subjects.",
      "Gained hands-on experience in full-stack development using Java, Spring Boot, ReactJS, and MySQL database.",
      "Academic exposure to core computer science fundamentals such as Data Structures, DBMS, and OS.",
    ],
  },

  {
    title: "Java Developer Intern",
    company_name: "Percept Infosystem Consultants, Nagpur, India",
    icon: percept,
    iconBg: "#ffcc99",
    date: "January 2022 – June 2022",
    points: [
      "Assisted in developing and debugging Java-based backend modules as part of a team during internship training.",
      "Wrote and optimized SQL queries for efficient data manipulation and retrieval in MySQL.",
      "Used Git for version control and collaborated with team members to maintain codebase consistency.",
    ],
  },

  {
    title: "Process Associate",
    company_name: "Tata Consultancy Services, Nagpur, India",
    icon: tcs,
    iconBg: "#fffdd0",
    date: "August 2020 - September 2021",
    points: [
      "Validated and audited invoices using DHL’s database, and accurate customs duty calculations.",
      "Managed large datasets in MS Excel, performing data analysis, record maintenance, and report generation.",
      "Optimized logistics operations by analyzing shipment trends, and identifying inconsistencies.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/rangari-rani",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/rani-rangari/",
  },
];

export const projects = [
  {
    iconUrl: house,
    theme: "btn-back-green",
    name: "Project Execution Hub",
    description: [
      "Users can create categorized projects, and assign roles in real-time..",
      "Plan technical projects, assign tasks, manage teams, and filter progress dynamically.",
    ],
    techStack: "Java, Spring Boot, ReactJS, MySQL",
    github:
      "https://github.com/rangari-rani/academic-projects-cdac/tree/master/Project-Execution-Hub",
    demo: "",
  },

  {
    iconUrl: house,
    theme: "btn-back-pink",
    name: "Kanban Board",
    description: [
      "A task management tool that visualizes workflow using draggable columns and cards.",
      "Users can freely move both entire columns and individual tasks to reflect progress.",
    ],

    techStack: "ReactJS, TailwindCSS",
    github:
      "https://github.com/rangari-rani/academic-projects-cdac/tree/master/kanban-board",
    demo: "https://kanban-board-flowtask.vercel.app/",
  },
  {
    iconUrl: house,
    theme: "btn-back-yellow",
    name: "Food Fusion",
    description: [
      "Full-stack Food Delivery App with auth, user flow and admin panel.",
      "It showcases UI state handling, routing, cart logic, and Stripe integration.",
    ],
    techStack: "MongoDB, ExpressJS, ReactJS, Node.js",
    github:
      "https://github.com/rangari-rani/academic-projects-cdac/tree/master/Food-Fusion-mern",
    demo: "https://food-ordering-frontend-wu7u.onrender.com/",
  },
  {
    iconUrl: house,
    theme: "btn-back-orange",
    name: "Holistic Wellbeing",
    description: [
      "Full-stack Health & Wellness App with user and instructor flows.",
      "Covers course purchase, secure payments, and role-based dashboards.",
    ],
    techStack: "MongoDB, ExpressJS, ReactJS, Node.js",
    github:
      "https://github.com/rangari-rani/academic-projects-cdac/tree/master/Holistic-WellBeing-mern",
    demo: "",
  },
];
