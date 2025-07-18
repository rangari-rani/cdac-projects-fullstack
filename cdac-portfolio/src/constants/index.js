
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
      "Completed 6-month intensive Java full-stack training under CDAC, covering core and advanced computing subjects.",
      "Gained hands-on experience in React, Java, Spring Boot, and MySQL.",
      "Developed a Java Swing-based room rental management system using JDBC and MySQL.",
      "Academic exposure to core CS fundamentals such as Data Structures, DBMS, and Operating Systems.",
    ],
  },
    {
    title: "Java Developer Intern",
    company_name: "Percept Infosystem Consultants, Nagpur",
    icon: percept,
    iconBg: "#ffcc99",
    date: "January 2022 - June 2022",
    points: [
        "Validated request-response cycles through Postman to ensure stable API communication.",
        "Wrote and optimized SQL queries for robust relational data handling in MySQL.",
      "Used Git for version control and effective codebase collaboration.",
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
        link: 'https://github.com/ranirangari',
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
  theme: 'btn-back-green',
  name: 'Old Portfolio (MCA + CDAC Phase)',
  description:
    'Built during my MCA/CDAC learning phase to showcase early projects. This portfolio is outdated — please visit the latest version below.',
  github: 'https://github.com/rangari-rani',
  demo: 'https://rani-rangari-portfolio.vercel.app/',
},

  {
    iconUrl: house,
    theme: 'btn-back-green',
    name: 'Weather Application',
    description: "Built with React and OpenWeatherMap API. Shows current weather and forecast based on user location with timezone support.",
    github: 'https://github.com/ranirangari/weather-app',
    demo: 'https://weather-glance-three.vercel.app/',
  },
    {
  iconUrl: house, 
  theme: 'btn-back-yellow',
  name: 'StreamPlay',
  description: "Music streaming app with playback controls and random quote generator. Built with React, CSS animations, and custom hooks.",
  github: 'https://github.com/rangari-rani/streamplay', 
  demo: 'https://streamplay-pi.vercel.app/', 
},
{
  iconUrl: house, 
  theme: 'btn-back-red',
  name: 'StayMate (Java Desktop App - — no live preview)',
  description: "Java Swing-based desktop app for managing room rentals. Admin can add/remove owners & tenants with full CRUD operations. Used JDBC and MySQL with a clean Swing-based UI.",
  github: 'https://github.com/rangari-rani/StayMate', 
  demo: '', 
},

  {
    iconUrl: house,
    theme: 'btn-back-blue',
    name: 'Sorting Visualizer',
    description: "Built with React and CSS to visualize core sorting algorithms (Bubble, Merge, Quick, Heap, etc.). Focused on animation logic, React state management, and rendering performance.",
    github: 'https://github.com/rangari-rani/visualizer',
    demo: 'https://visualizer-blush.vercel.app/',
  },
  {
    iconUrl: house,
    theme: 'btn-back-pink',
    name: 'Dijkstra Algorithm',
    description: "Visualizes Dijkstra’s shortest path algorithm between two points. React-based pathfinding logic with dynamic grid and step-by-step transitions.",
    github: 'https://github.com/rangari-rani/dijikstra-algo',
    demo: 'https://dijikstra-algorithm.vercel.app/',
  }
];
