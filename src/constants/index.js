import {
  mobile,
  backend,
  creator,
  web,
 
  css,
  html,
  javascript,
  nodejs,
  reactNative,
  electron,
  vscode,
  sass,
  python,
  github,

  nextJS,
  figma,
  reactjs,
  typescript,
  mongodb,
  tailwind,
  threejs,
  git,

  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,

  imaginify,
  pricewise,
  evently,

  notification1,
  notification2,
  notification3,
  notification4,

  heroIcon1,
  heroIcon2,
  heroIcon3,
  heroIcon4,
  
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
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "React Native",
    icon: reactNative,
  },
  {
    name: "Electron",
    icon: electron,
  },
  {
    name: "VS Code",
    icon: vscode,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Sass",
    icon: sass,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Github",
    icon: github,
  },
 
];

const workingTech = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 46,
    height: 56,
  },
  {
    id: "1",
    title: "Next JS",
    icon: nextJS,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "ReactJS",
    icon: reactjs,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Typescript",
    icon: typescript,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "MongoDB",
    icon: mongodb,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Tailwind",
    icon: tailwind,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "ThreeJs",
    icon: threejs,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Git",
    icon: git,
    width: 28,
    height: 22,
  },
];


const notificationImages = [notification4, notification3, notification2];
const heroIcons = [ nextJS, git, mongodb, reactjs,]


const experiences = [
  {
    title: "Frontend Developer",
    company_name: "",
    icon: starbucks,
    iconBg: "#383E56",
    date: "",
    points: [
      "as a frontend developer, I've had to deal with stuff like making sure websites look good on different browsers and devices",
      "It's been a journey, you know? But I've managed to build some pretty cool stuff, like websites that adapt to whatever device you're using and have cool interactive features.",
      " Key takeaways include mastering HTML, CSS, and JavaScript fundamentals, embracing frameworks/libraries, understanding version control, and fostering communication within devlopers.",
    ],
  },
  {
    title: "React Developer",
    company_name: "",
    icon: reactNative,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "  I was really into React.js. I mean, that component-based approach? It just clicked for me. I've built some really dynamic interfaces with it.",
      "Then there's Tailwind CSS. Man, that utility-first approach? It just made styling so much easier",
      "React Native, you see, it's like React.js's cool cousin. Taking what I knew about building web interfaces and applying it to mobile apps? It was mind-blowing.",
      "And let's not forget SCSS. That was my go-to for styling. I mean, those variables and mixins? They made organizing stylesheets a breeze, especially in those larger projects.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "",
    icon: nextJS,
    iconBg: "#383E56",
    date: "",
    points: [
      " One of the key technologies that really elevated my game was Next.js",
      "With Next.js, I was able to create websites that not only looked great but also performed exceptionally well. The ability to pre-render pages and optimize performance was a game-changer, especially for SEO and user experience.",
      "I learned how to set up API routes, handle data fetching, and even integrate with databases like MongoDB.",
      " I also delved into the world of content management systems (CMS), and one that really stood out for me was Payload CMS.",
    ],
  },
  {
    title: "Real world Projects",
    company_name: "Auxicorp",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      " let me walk you through my journey as a full-stack developer at Auxicorp. Working with Auxicorp has been an incredible experience, where I've had the opportunity to merge my technical expertise with the complexities of taxation and business management.",
      "In addition to software development, I've also focused on delivering polished and professional websites for Auxicorp. ",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as amazing as our product, but Viskar proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like he does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Kartik optimized our website, our traffic increased by 10%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Imaginify",
    description:
      "Introducing Imaginify, your ultimate image AI enhancer with a twist of creativity. With our cutting-edge technology, you can transform ordinary images into extraordinary works of art.",
    tags: [
      {
        name: "nextjs",
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
    image: imaginify,
    source_code_link: "https://github.com/viskar07/Imaginify.git",
  },
  {
    name: "Pricewise",
    description:
      "Introducing our cutting-edge Amazon product scraper – a game-changing tool designed to revolutionize your e-commerce strategy. With unparalleled power and self-serve capabilities.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind css",
        color: "pink-text-gradient",
      },
    ],
    image: pricewise,
    source_code_link: "https://github.com/viskar07/Pricewise.git",
  },
  {
    name: "Evently",
    description:
      "Introducing our all-in-one event management system. With robust authentication and seamless payment processing, organizing and attending events has never been easier. ",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: evently,
    source_code_link: "https://github.com/viskar07/Event_platform.git",
  },
];

export { services, experiences, testimonials, projects, workingTech, notificationImages, heroIcons, technologies };
