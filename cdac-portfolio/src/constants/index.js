
import { tcs , percept, cdac} from "../assets/images";
import {
    weather,
    cplus,
    c,
    springboot,
    mysql,
    java,
    contact,
    css,
    estate,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    mui,
    pricewise,
    react,
    redux,
    snapgram,
    summiz,
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
    company_name: "CDAC – SoftPolynomials, Nagpur",
    icon: cdac, 
    iconBg: "#d0e6ff",
    date: "March 2023 – August 2023",
    points: [
      "Completed a 6-month intensive Java full-stack training under CDAC, covering core and advanced computing subjects.",
      "Gained hands-on experience in Java, Spring Boot, MySQL, and frontend development with ReactJS.",
      "Academic exposure to core computer science fundamentals such as Data Structures, DBMS, and OS.",
      "Participated in centralized placement drives organized by CDAC Pune from September to December 2023.",
    ],
  },
  
  {
    title: "Java Developer Intern",
    company_name: "Percept Infosystem Consultants, Nagpur",
    icon: percept,
    iconBg: "#ffcc99",
    date: "January 2022 – June 2022",
    points: [
      "Assisted in building and debugging Java-based backend modules for internal tools and client projects.",
      "Validated REST APIs using Postman to ensure smooth request–response handling and accurate data flow.",
      "Wrote and optimized SQL queries for efficient data manipulation and retrieval in MySQL.",
      "Used Git for version control and collaborated with team members to maintain codebase consistency.",
    ],
  },
  
  {
    title: "Process Associate",
    company_name: "Tata Consultancy Services, Nagpur",
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
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/rangari-rani',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/rani-rangari/',
    }
];

export const projects = [
  {
    iconUrl: house,
    theme: 'btn-back-blue',
    name: 'Project Management System',
    description: [
      "Java Full Stack app to manage users, roles, and projects with full CRUD functionality.",
      "Features Spring Boot backend, JWT auth, role-based access, and MySQL integration.",
    ],
    techStack: "ReactJS, Spring Boot, MySQL, JWT, REST API",
    github: 'https://github.com/rangari-rani/project-management-app',
    demo: 'https://github.com/rangari-rani/project-management-app', // Add if deployed
  },
  {
    iconUrl: house,
    theme: 'btn-back-green',
    name: 'Artisans Collective',
    description: [
      "Frontend-only eCommerce platform with product filters, cart, and checkout pages.",
      "Preloaded image/product data with smooth navigation and localStorage support.",
    ],
    techStack: "ReactJS, TailwindCSS, Context API",
    github: 'https://github.com/rangari-rani/react-ecommerce',
    demo: 'https://github.com/rangari-rani/project-management-app', // Add if deployed
  },
  {
    iconUrl: house,
    theme: 'btn-back-yellow',
    name: 'Kanban Board',
    description: [
      "Drag-and-drop task management board similar to Trello.",
      "Supports multiple columns and task persistence with local state.",
    ],
    techStack: "ReactJS, HTML5 Drag & Drop, TailwindCSS",
    github: 'https://github.com/rangari-rani/kanban-board',
    demo: 'https://github.com/rangari-rani/project-management-app', // Add if deployed
  },
  {
    iconUrl: house,
    theme: 'btn-back-pink',
    name: 'Holistic Wellbeing',
    description: [
      "Full-stack Learning Management System with auth, course content, and user dashboards.",
      "Covers user roles (admin, student), JWT-based auth, and secure APIs.",
    ],
    techStack: "MongoDB, ExpressJS, ReactJS, Node.js",
    github: 'https://github.com/rangari-rani/mern-lms',
    demo: 'https://github.com/rangari-rani/project-management-app', // Add if deployed
  },
 

];
