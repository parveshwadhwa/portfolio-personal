import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  graphql,
  git,
  figma,
  docker,
  meta,
  starbucks,
  healthians,
  daxko,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "chat",
    title: "Get to Know Me",
  },
];

const services = [
  {
    title: "Full-Stack Web Development",
    icon: web,
  },
  {
    title: "Cloud & DevOps Solutions",
    icon: mobile,
  },
  {
    title: "API Development & Integration",
    icon: backend,
  },
  {
    title: "Database Design & Optimization",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "GraphQL",
    icon: graphql,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "Healthians",
    icon: healthians,
    iconBg: "#383E56",
    date: "July 2022 - Nov 2022",
    points: [
      "Spearheaded the analysis and documentation of API integration needs across multiple software development initiatives, resulting in a 15% improvement in data transfer efficiency and a 20% reduction in system downtime.",
      "Implemented a new radiology slots product, leading to a 7% increase in sales appointments and a smoother sales pipeline.",
      "Developed new features in HCRM product and B2B Partner App",
      "Orchestrated cross-functional collaboration with developers, UX designers, and business analysts to launch a cutting-edge product, aligning user needs with business objectives; resulted in a 40% increase in user retention and a 25% boost in revenue within the second quarter",
    ],
  },
  {
    title: "Software Development Engineer",
    company_name: "Healthians",
    icon: healthians,
    iconBg: "#E6DEDD",
    date: "Dec 2022 - May 2024",
    points: [
      "Designed and implemented a Golang-based OCR solution, automating prescription data extraction for seamless collaboration. Reduced manual data entry time by 50% and increased data accuracy by 25%",
      "Developed and deployed interactive web-based training modules to boost employee engagement, resulting in a 40% increase and 30% reduction in onboarding time",
      "Spearheaded the Radiology product development, prioritizing customer-centric features and data analytics. Increased sales opportunities by 7% and enabled BI team to generate 29% more actionable insights.",
      "Revamp whole CRM product to the latest version with a team of 12 members.",
      "Integrated third-party software to enhance user engagement by 20%, and developed APIs to increase application performance by 15%",
      "Optimized a high-volume e-commerce database using MySQL expertise. Implemented indexing and caching to achieve a 12% increase in query execution speed, boosting website loading speed by 15%, and reducing server load",
      "Leveraged BAMR to efficiently archive booking data, reducing storage costs by 5.7%",
      "Integrated LifeCell LMS with Healthians reports and diagnostics, streamlining data access and leading to a 36% reduction in turnaround time for diagnoses",
      "Technologies Used: Codeigniter 4, PHP, Javascript, Golang, JAVA, SQL, AWS Lambda, MySql, Redis, New Relic,redmine, Jmeter"
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Daxko",
    icon: daxko,
    iconBg: "#383E56",
    date: "June 2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Parvesh proved me wrong.",
    name: "Vaishnavi Shingane",
    designation: "Singer",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
