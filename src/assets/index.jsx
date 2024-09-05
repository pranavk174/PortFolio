import razorpay from "../assets/razorpay.png";
import tictactoe from "../assets/tictctoe.png";
import spotify from "../assets/spotify.png";
import airbnb from "../assets/airbnb.png";

export const HERO_CONTENT = `As a passionate Full Stack Developer, I have honed my skills across both front-end and back-end technologies to deliver comprehensive, user-friendly web solutions. My expertise includes modern front-end frameworks like React, coupled with solid back-end experience in Node.js, Express, and database management with MongoDB and SQL. I thrive on solving complex problems and take pride in writing clean, efficient code. Whether it's crafting seamless user interfaces or building robust server-side logic, I am dedicated to creating high-quality applications that meet user needs and exceed expectations`;

export const ABOUT_TEXT = `I'm a passionate Full Stack Developer with hands-on experience in building dynamic web applications. I recently completed a comprehensive MERN stack project, where I designed and implemented a full-featured application from the ground up using MongoDB, Express.js, React, and Node.js. This project allowed me to deepen my understanding of front-end and back-end integration, manage data flows efficiently, and ensure a seamless user experience. I thrive on solving complex problems and am committed to writing clean, maintainable code. With a strong foundation in both the front-end and back-end, I’m equipped to tackle diverse development challenges and am always eager to learn and adapt to new technologies..`;

export const EXPERIENCES = [
  { 
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const Skills = ["FaPython" , " FaJava", " FaHtml5", "SiCss3 " ,"DiJavascript ", " RiTailwindCssFill", "FaBootstrap ", " RiReactjsLine", " FaNodeJs", , "SiExpress " ,"TbSql" , "SiMongodb"    ]

export const PROJECTS = [
  {
    title: "Travelling Website",
     image: airbnb,
    description:
      "I have developed a travel website that includes a comprehensive authentication system, allowing users to securely log in and manage their accounts.",
    technologies: ["HTML", "CSS", "TailwindCss", "Node.js","Express","MongoDB"],
  },
  {
    title: "Spotify Clone",
     image: spotify,
    description:
      "A Spotify clone focusing on the frontend, utilizing HTML, CSS, and JavaScript.",
    technologies: ["HTML", "CSS", "Javascript"],
  },
  {
    title: "Razorpay Clone",
     image: razorpay,
    description:
      "Razorpay clone, focusing on the frontend using Tailwind CSS.",
    technologies: ["HTML", "CSS", "TailwindCss"],
  },
  {
    title: "Tic Tac Toe game",
     image: tictactoe,
    description:
      "I have developed a Tic Tac Toe game using HTML, CSS, and JavaScript. ",
    technologies: ["HTML", "CSS", "TailwindCss" , "Javascript"],
  },
];

export const CONTACT = {
  address: "603 , Today Ganesham , Setcor 18 , Ulwe , Navi Mumbai ",
  phoneNo: "+91 8102696737 ",
  email: "pranavbharadwaj174@gmail.com",
};
