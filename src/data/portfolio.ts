import easyShopImage from '../assets/images/easyShop.jpg';
import easyShopImage2 from '../assets/images/easyShop2.jpg';
import easyShopImage3 from '../assets/images/easyShop3.jpg';
import easyShopImage4 from '../assets/images/easyShop4.jpg';
import bookLookImage from '../assets/images/booklook2.png';
import SabaStudioImage from '../assets/images/sabaStudio.jpg';
import WBSImage from '../assets/images/WBS-School.jpg';
import CS50PImage from '../assets/images/CS50P.png';
import HackfestivalImage from '../assets/images/Hackfestival2024.jpg';
import MentalHealthHackathonImage from '../assets/images/MentalHealth_Hackathon.jpg';


export const personalInfo = {
  name: "Nahid Najafi",
  title: "Full Stack Developer",
  tagline: "Transforming ideas into scalable digital experiences.",
  location: "Göttingen, Germany",
  email: "nahid.najafi.h@gmail.com",
  github: "https://github.com/AnnaNajafiH",
  linkedin: "https://www.linkedin.com/in/nahid-najafi-hajivar/",
  description: `Passionate full-stack developer with experience in modern web technologies. 
    I love creating intuitive user experiences and robust backend systems. With a strong 
    foundation in JavaScript, TypeScript, and Python, I enjoy tackling complex problems 
    and building scalable solutions.`,
  about: {
    subject: "From Chemistry to Web Development: Bridging Science and Code",
    intro: "Hi, I’m Nahid (Anna), a Junior Full-Stack Developer who took a bold leap from the world of Chemistry and science into the fast-paced tech universe  driven by an unstoppable passion for coding and innovation.",
    background: "Over the past one and a half years, I’ve fully immersed myself in web development, completing intensive bootcamps and courses that have equipped me to build full-stack applications using modern technologies. Whether designing intuitive, responsive user interfaces or developing secure backend APIs, I enjoy transforming complex ideas into seamless and engaging digital experiences.",
    passion: "My scientific background has sharpened my analytical thinking, and my love for programming continuously drives me to learn, grow, and embrace new challenges with enthusiasm. I’m passionate about blending creativity with logic to turn ideas into powerful digital solutions.",
    endWords: "I’m excited to connect with fellow developers and professionals. Feel free to reach out if you’d like to collaborate or just chat about tech!",
    technologies: ["JavaScript", "TypeScript", "Python", "React.js", "Node.js", "MongoDB", "SQL", "Tailwind CSS", "Bootstrap", "Docker", "Git", "Postman", "Figma"],
  }
};

export const skills = {
  languages: [
    "JavaScript",
    "TypeScript", 
    "Python",
    "HTML5",
    "CSS3",
    "SQL"
  ],
  frameworks: [
    "React.js",
    "Node.js", 
    "Express.js",
    "Tailwind CSS",
    "Bootstrap"
  ],
  databases: [
    "MongoDB",
    "MySQL"
  ],
  tools: [
    "Git",
    "GitHub",
    "Docker", 
    "Postman",
    "Figma"
  ],
  other: [
    "REST APIs",
    "JWT Authentication", 
    "Unit Testing",
    "Agile Methodologies",
    "Responsive Design",
    "AI-powered features"
  ]
};

export const projects = [
  {
    id: 1,
    name: "EasyShop",
    shortDescription: "A comprehensive full-stack e-commerce platform with integrated payment methods.",
    description: "A full-stack e-commerce application built with modern web technologies, featuring a responsive React frontend using TypeScript and a robust Express.js backend. This comprehensive platform showcases the entire purchasing process, including order management, address handling, payment methods, payment processing, and a purchase history.",
    detailedDescription: `EasyShop is a complete e-commerce solution demonstrating modern full-stack development practices with many features. The platform includes a fully responsive React frontend built with TypeScript and Bootstrap, ensuring type safety and a beautiful, responsive design.

The backend leverages Express.js with TypeScript and MongoDB, providing a robust and scalable API with advanced security features including rate limiting, input validation, CORS protection, and professional logging with Winston. The application implements secure user authentication with JWT tokens, comprehensive order management, and seamless PayPal payment integration.

Key architectural features include global state management using React Context and useReducer hooks, advanced error handling with custom middleware, database optimization with connection pooling, and production-ready deployment configuration with Docker support. The platform demonstrates CRUD operations for product and order management, real-time cart updates, protected routes, and comprehensive order tracking.
`,
    features: [
        "User Authentication & Authorization",
        "Product Catalog with Filtering",
        "Shopping Cart Management", 
        "PayPal Payment Integration",
        "Order Management System",
        "Order History & Tracking",
        "Real-time Cart Updates",
        "Protected Routes & Middleware",
        "Responsive Design System",
        "Admin Dashboard Features",
        "Global State Management",
        "Dark Mode Support",
        "Rate Limiting & Security",
        "Professional Logging",
        "SEO-Optimized Routing",
        "Docker Deployment Ready"
    ],
    challenges: [
        // "Implementing secure PayPal payment processing workflow",
        // "Managing complex global state across multiple components",
        // "Building real-time cart synchronization and updates",
        // "Ensuring data consistency between frontend and backend",
        // "Implementing comprehensive order management system",
        // // "Optimizing database performance with connection pooling",
        // "Deploying with proper environment configuration"
    ],
    technologies: [
        "TypeScript",
        "React",
        "Express.js", 
        "MongoDB",
        "Bootstrap",
        "Tailwind CSS",
        "PayPal API",
        "JWT Authentication",
        "Docker",
      ],
    githubUrl: "https://github.com/AnnaNajafiH/EasyShop",
    liveUrl: "https://easyshop-frontend-u9wj.onrender.com/",
    image: easyShopImage2,
    gallery: [easyShopImage, easyShopImage3, easyShopImage4 ], // You can add more images later
    status: "In Progress",
    duration: "3 weeks"
  },
  {
    id: 2,
    name: "SStudio",
    shortDescription: "A modern full-stack website showcasing architectural projects with clean design and a seamless user experience.",
    description: "A Full-Stack architecture portfolio platform built with modern web technologies, featuring a responsive React frontend and robust Node.js backend. This comprehensive application demonstrates modern UI/UX design principles for architectural showcases.",
    detailedDescription: `SStudio is a comprehensive architecture portfolio solution that showcases modern web development practices combined with elegant design presentation. The platform features a fully responsive React frontend built with TypeScript and Tailwind CSS, ensuring type safety, beautiful styling, and exceptional developer experience. The backend leverages Express.js and MongoDB to provide a robust and scalable API for project management.
  
  Key features include project categorization with advanced filtering, image gallery management, contact form integration, and a clean, professional interface designed specifically for architecture website. The application demonstrates full CRUD operations for project management, advanced state management with custom React hooks, and follows RESTful API design principles.
  
  The project is secured with JWT (JSON Web Token) authentication, ensuring safe and authorized access to project management features. This demonstrates my ability to implement secure full-stack authentication flows alongside modern JavaScript frameworks, responsive design, and scalable backend services.`,
    features: [
      "Advanced Category Filtering", 
      "Image Gallery & Media Management",
      "Contact Form Integration",
      "Responsive Design System",
      "Dark Mode Support",
      "Search & Filter Functionality",
      "SEO-Optimized Routing",
      "Cloud Storage Integration",
      "Professional UI/UX Design",
      "Protected Routes & Middleware",
      "Responsive Design System",
      "Admin Dashboard Features",
      "Global State Management",
      "Rate Limiting & Security",
      "Professional Logging",
      "Docker Deployment Ready"
    ],
    challenges: [
      // "Implementing complex filtering and search functionality",
      // "Managing large image galleries with optimal performance",
      // "Creating responsive layouts for architectural content",
      // "Ensuring cross-browser compatibility and SEO optimization",
      // "Deploying with proper CORS configuration for production"
    ],
    technologies: [
      "TypeScript",
      "React",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "JWT",
      "Docker",
    ],
    githubUrl: "https://github.com/AnnaNajafiH/SabaStudio",
    liveUrl: "https://sabastudio-frontend.onrender.com/",
    image: SabaStudioImage,
    gallery: [SabaStudioImage], // You can add more images later
    status: "In Progress",
    duration: " 2 weeks"
  },
  {
    id: 3,
    name: "BookLook",
    shortDescription: "A web app for managing public bookshelf worldwide.",
    description: "A responsive full-stack web application designed to manage public bookshelf systems, featuring AI-powered tools and fostering community engagement.",
    detailedDescription: `BookLook is an innovative platform that transforms the way people interact with public bookshelves. It allows users to easily explore and locate books placed in community bookshelves found in parks, cafés, and other public spaces. Through the platform, readers can discover which books are available nearby, track where certain books are placed, and even contribute by adding their own books to these shelves.

Built with React.js on the frontend and powered by an Express.js backend, BookLook offers a smooth and modern user experience. It integrates advanced AI-driven features, such as a chatbot for answering queries and an AI image generator that creates personalized profile visuals based on the user’s bio. These tools not only enhance interaction but also bring a playful, personalized touch to how users engage with books and the platform itself.

Beyond its intelligent features, BookLook ensures secure access with JWT-based authentication and provides real-time updates on book availability within these public shelves. The system is styled with Tailwind CSS for a clean, responsive design and relies on MongoDB for fast, scalable data storage. With BookLook, public bookshelf browsing becomes a dynamic and social experience, blending technology and community in a new way.`,
    features: [
      "React Leaflet for spotting bookshelf locations on the map",
      "Advanced search functionality",
      "Upload and manage photos of bookshelves and save in Cloudinary",
      "Like and dislike system for bookshelves and books",
      "Add, remove, and edit books inside bookshelves",
      "AI-powered chatbot for user assistance",
      "AI-powered image generation for personalized profiles",
      "Admin dashboard for managing users and content",
      "Geolocation API for finding location based on latitude and longitude and vice versa",
      "Book catalog management",
      "User authentication system",
      "Real-time book availability updates",
      "Community reviews and ratings",
      "Advanced filtering options",
      "Mobile-responsive design",
      "Dark mode support"
    ],
    challenges: [
      // "Integrating AI image generation APIs",
      // "Implementing real-time book availability updates",
      // "Creating an intuitive book discovery interface",
      // "Managing complex user permissions and roles",
      // "Optimizing image loading and caching"
    ],
    technologies: ["React.js", "JavaScript", "Express.js","MongoDB","JWT", "AI Image Generator", "AI Powered Chatbot", "Tailwind CSS", "React Leaflet"],
    githubUrl: "https://github.com/AnnaNajafiH/Book_look",
    liveUrl: "https://booklook24-1.onrender.com/",
    image: bookLookImage,
    gallery: [bookLookImage], // You can add more images later
    status: "Completed",
    duration: "1 months"
  },
//   {
//     id: 4,
//     name: "Pokémon Play",
//     shortDescription: "An interactive Pokémon battle game with comprehensive Pokédex functionality.",
//     description: "An engaging Pokémon-themed application featuring battle mechanics, Pokédex exploration, and responsive design.",
//     detailedDescription: `Pokémon Play is an interactive web application that brings the beloved Pokémon universe to life through modern web technologies. Built with React and featuring a sleek Tailwind CSS design, this application provides users with an immersive Pokémon experience.

// The application features a comprehensive Pokédex with detailed information about various Pokémon species, including stats, abilities, and evolution chains. Users can engage in simulated battles, explore different Pokémon types, and track their progress through secure user authentication.

// The project demonstrates proficiency in API integration, state management, and creating engaging user interfaces. The responsive design ensures optimal performance across all devices, while the Express.js backend provides robust data management and user session handling.`,
//     features: [
//       "Interactive Pokémon Battles",
//       "Comprehensive Pokédex",
//       "User Progress Tracking",
//       "Pokémon Statistics Display",
//       "Type Effectiveness Calculator",
//       "Responsive Game Interface",
//       "User Authentication",
//       "Battle History & Analytics"
//     ],
//     challenges: [
//       "Implementing complex battle mechanics",
//       "Managing large datasets of Pokémon information",
//       "Creating smooth animations and transitions",
//       "Optimizing performance for mobile devices",
//       "Balancing game mechanics for fair play"
//     ],
//     technologies: ["JavaScript", "React", "Express.js", "Tailwind CSS", "JWT"],
//     githubUrl: "https://github.com/yourusername/pokemon-play",
//     liveUrl: "https://wd51-pokebattle.netlify.app/pokedex",
//     image: pokemonImage,
//     gallery: [pokemonImage], // You can add more images later
//     status: "Completed",
//     duration: "2 weeks"
//   },
//   {
//     id: 5,
//     name: "OnlinShop",
//     shortDescription: "A modern TypeScript e-commerce application built with React, featuring shopping cart functionality, user authentication, and responsive design.",
//     description: "A comprehensive TypeScript-based online shopping platform built with React and Vite, featuring advanced state management, user authentication, shopping cart functionality, and a modern responsive design using Tailwind CSS.",
//     detailedDescription: `ShoppingTS is a full-featured e-commerce application that demonstrates modern TypeScript and React development practices. The platform features a responsive React frontend built with TypeScript and Tailwind CSS, ensuring type safety, beautiful styling, and exceptional developer experience.
  
//   The application includes comprehensive shopping cart functionality with persistent local storage, user authentication with protected routes, product catalog management, and a clean checkout process. The project showcases advanced React patterns including custom hooks, context API for state management, and component composition for reusable UI elements.
  
//   Key architectural decisions include the use of custom hooks for local storage management, React Context for global state management, private route protection for authenticated features, and a modular component structure that promotes code reusability and maintainability. The application demonstrates full CRUD operations for cart management, advanced TypeScript typing for data models, and modern React Router implementation for SPA navigation.`,
//     features: [
//       "Shopping Cart Management",
//       "User Authentication & Protected Routes",
//       "Product Catalog & Detail Views",
//       "Persistent Cart with Local Storage",
//       "Responsive Design System",
//       "Type-Safe Development with TypeScript",
//       "Modern React Hooks & Context API",
//       "JSON Server API Integration",
//       "Checkout Process Flow"
//     ],
//     challenges: [
//       "Implementing persistent shopping cart functionality with local storage",
//       "Creating type-safe data models and API integration",
//       "Managing complex application state with React Context",
//       "Implementing protected routes and authentication flow",
//       "Ensuring responsive design across all device sizes"
//     ],
//     technologies: [
//       "TypeScript",
//       "React",
//       "Tailwind CSS",
//       "JSON Server",
//     ],
//     githubUrl: "https://github.com/YourUsername/ShoppingTS",
//     liveUrl: "https://shoppingts-demo.onrender.com/",
//     image: "ShoppingTSImage", // You'll need to import this
//     gallery: ["ShoppingTSImage"], // You can add more images later
//     status: "Completed",
//     duration: "3 months"
//   },
];

export const experience = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    company: "Tech Solutions Inc.",
    location: "Remote",
    startDate: "Jan 2022",
    endDate: "Present",
    description: [
      "Led development of microservices architecture serving 100K+ users",
      "Mentored junior developers and conducted code reviews",
      "Improved application performance by 40% through optimization",
      "Implemented CI/CD pipelines and automated testing workflows"
    ]
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Digital Agency Co.",
    location: "New York, NY",
    startDate: "Jun 2020",
    endDate: "Dec 2021",
    description: [
      "Developed responsive web applications for various clients",
      "Collaborated with designers to implement pixel-perfect UIs",
      "Integrated third-party APIs and payment gateways",
      "Maintained and improved existing codebase"
    ]
  },
  {
    id: 3,
    title: "Junior Web Developer",
    company: "StartUp Ventures",
    location: "San Francisco, CA",
    startDate: "Jan 2019",
    endDate: "May 2020",
    description: [
      "Built interactive web components using React.js",
      "Participated in agile development processes",
      "Assisted in database design and API development",
      "Wrote comprehensive unit and integration tests"
    ]
  }
];

export const education = [
    {
        id: 1,
        degree: "CS50's Programming with Python",
        school: "Online course offered by Harvard University",
        location: "Online",
        graduationDate: "Juni 2025",
        description: ""
      },
  {
    id: 2,
    degree: "Full Stack Web & App Development Bootcamp",
    school: "WBS Coding School",
    location: "Berlin, Germany",
    graduationDate: "Aug 2024",
    description: ""
  },

  {
    id: 3,
    degree: "Master of Science in Organic Chemistry",
    school: "University of Kashan",
    location: "Kashan, Iran",
    graduationDate: "Oct 2013",
    description: ""
  },
  {
    id: 4,
    degree: "Bachelor of Science in Chemistry",
    school: "University of Ahvaz",
    location: "Ahvaz, Iran",
    graduationDate: "Jun 2010",
    description: ""
  },

];

export interface Certificate {
  id: number;
  title: string;
  organization: string;
  date: string;
  description: string;
  image: string;
  link?: string;
}

export const certificates: Certificate[] = [
  {
    id: 1,
    title: "Full Stack Web & App Development Bootcamp",
    organization: "WBS Coding School",
    date: "April - August 2024",
    description: "17-week intensive bootcamp covering full stack web development, including React, Node.js, JavaScript, and more.",
    image: WBSImage,
    link: "https://www.wbscodingschool.com/web-app-development-bootcamp/"
  },
  {
    id: 2,
    title: "CS50's Introduction to Programming with Python",
    organization: "Harvard University via edX",
    date: "May 2025",
    description: "Comprehensive course covering Python programming fundamentals, data structures, and algorithmic thinking.",
    image: CS50PImage,
    link: "https://cs50.harvard.edu/python/2022/"
  },
  {
    id: 3,
    title: "Winner - Hackfestival 2024",
    organization: "The Hackathon Company",
    date: "March 2024",
    description: "Winner of the Roche Company Challenge at the Hackfestival 2024 in Mannheim, Germany, with a gamified web app that enables employees to track and reduce their individual CO₂ footprint through personalized challenges and workplace engagement.",
    image: HackfestivalImage,
    link: "https://www.roche.de/presse/news/innovationskraft-fuer-nachhaltigkeit-roche-auf-dem-hackfestival-mannheim#70b9d713-8821-4558-aabb-2b53cf68cd80-download-anchor"
  },
  {
    id: 4,
    title: "Mental Health Hackathon 2024",
    organization: "dgppn - Deutsche Gesellschaft für Psychiatrie und Psychotherapie, Psychosomatik und Nervenheilkunde",
    date: "November 2024",
    description: "a digital mental health platform that promotes the acceptance of digital solutions by addressing language barriers and enhancing accessibility.",
    image: MentalHealthHackathonImage,
    link: "https://www.dgppn.de/veranstaltungen/mental-health-hackathon.html"

  }
];
