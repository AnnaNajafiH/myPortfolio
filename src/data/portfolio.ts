import easyShopImage from '../assets/images/easyShop.jpg.png';
import bookLookImage from '../assets/images/booklook2.png';
import pokemonImage from '../assets/images/pokemon1.png';
import SabaStudioImage from '../assets/images/sabaStudio.jpg';

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
    intro: "Hi, I’m a Junior Full-Stack Developer. My journey into tech is a bit unconventional coming from a strong background in Organic Chemistry and research, I’ve learned how to approach problems with both precision and creativity. Now, I apply that same mindset to writing clean, efficient code and solving complex challenges in web development.",
    background: "For the past one and a half years, I’ve immersed myself in web development completing intensive bootcamps and courses that have equipped me to build full-stack applications using modern technologies. Whether designing intuitive, responsive user interfaces or building secure backend APIs, I enjoy turning complex ideas into seamless and engaging digital experiences.",
    passion: "What motivates me most is the combination of my analytical background and passion for coding. Always eager to learn and improve, I’m driven by challenges that push me to grow both as a developer and as a lifelong learner.",
    technologies: ["JavaScript", "TypeScript", "Python", "React.js", "Node.js", "MongoDB", "SQL", "Tailwind CSS", "Docker", "Git", "Postman", "Figma"],
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
    "AI implementation"
  ]
};

export const projects = [
  {
    id: 1,
    name: "EasyShop",
    shortDescription: "A comprehensive full-stack e-commerce platform with PayPal integration, featuring modern TypeScript development and production-ready architecture.",
    description: "A Full-Stack e-commerce application built with modern web technologies, featuring a responsive React frontend with TypeScript and a robust Express.js backend. This comprehensive platform demonstrates advanced full-stack development, secure payment processing, and scalable architecture design for online retail solutions.",
    detailedDescription: `EasyShop is a complete e-commerce solution that showcases modern full-stack development practices with enterprise-level features. The platform features a fully responsive React frontend built with TypeScript, Bootstrap, and Tailwind CSS, ensuring type safety, beautiful responsive design, and exceptional user experience across all devices.

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
        "Rate Limiting & Security",
        "Professional Logging",
        "Docker Deployment Ready"
    ],
    challenges: [
        "Implementing secure PayPal payment processing workflow",
        "Managing complex global state across multiple components",
        "Building real-time cart synchronization and updates",
        "Ensuring data consistency between frontend and backend",
        "Implementing comprehensive order management system",
        "Creating production-ready security and error handling",
        "Optimizing database performance with connection pooling",
        "Deploying with proper environment configuration"
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
    image: easyShopImage,
    gallery: [easyShopImage], // You can add more images later
    status: "Completed",
    duration: "1 months"
  },
  {
    id: 2,
    name: "SabaStudio",
    shortDescription: "A modern full-stack architecture website showcasing architectural projects with advanced design and seamless user experience.",
    description: "A Full-Stack architecture portfolio platform built with modern web technologies, featuring a responsive React frontend and robust Node.js backend. This comprehensive application demonstrates advanced TypeScript development, cloud deployment, and modern UI/UX design principles for architectural showcases.",
    detailedDescription: `SabaStudio is a comprehensive architecture portfolio solution that showcases modern web development practices combined with elegant design presentation. The platform features a fully responsive React frontend built with TypeScript and Tailwind CSS, ensuring type safety, beautiful styling, and exceptional developer experience. The backend leverages Express.js and MongoDB to provide a robust and scalable API for project management.
  
  Key features include project categorization with advanced filtering, image gallery management, contact form integration, and a clean, professional interface designed specifically for architecture website. The application demonstrates full CRUD operations for project management, advanced state management with custom React hooks, and follows RESTful API design principles.
  
  The project showcases my ability to work with modern JavaScript frameworks, implement responsive design systems, manage complex data relationships, integrate multimedia content, and deploy full-stack applications to cloud platforms with proper CORS configuration and environment management.`,
    features: [
      "Advanced Category Filtering", 
      "Image Gallery & Media Management",
      "Contact Form Integration",
      "Responsive Design System",
      "Search & Filter Functionality",
      "SEO-Optimized Routing",
      "Cloud Storage Integration",
      "Professional UI/UX Design"
    ],
    challenges: [
      "Implementing complex filtering and search functionality",
      "Managing large image galleries with optimal performance",
      "Creating responsive layouts for architectural content",
      "Ensuring cross-browser compatibility and SEO optimization",
      "Deploying with proper CORS configuration for production"
    ],
    technologies: [
      "TypeScript",
      "React",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Vite",
      "React Router",
      "Axios",
      "Node.js"
    ],
    githubUrl: "https://github.com/AnnaNajafiH/SabaStudio",
    liveUrl: "https://sabastudio-frontend.onrender.com/",
    image: SabaStudioImage,
    gallery: [SabaStudioImage], // You can add more images later
    status: "in Progress",
    duration: " 2 weeks"
  },
  {
    id: 3,
    name: "BookLook",
    shortDescription: "A community-driven platform for managing and sharing public bookshelf resources.",
    description: "A responsive full-stack platform for managing public bookshelf system with AI-powered features and community engagement.",
    detailedDescription: `BookLook is an innovative platform designed to revolutionize how communities manage and interact with public book-sharing systems. Built with React.js and powered by a robust Express.js backend, this application combines traditional book management with modern AI capabilities.

The platform features an intelligent AI image generator , enhancing the user experience and making book discovery more engaging. Users can browse, reserve, and manage books through an intuitive interface designed with Tailwind CSS.

The application implements secure user authentication using JWT tokens and provides real-time updates on book availability. The MongoDB database ensures efficient data management and scalability for growing book collections and user bases.`,
    features: [
      "AI-Powered Image Generation",
      "Book Catalog Management",
      "User Authentication System",
      "Real-time Book Availability",
      "Community Reviews & Ratings",
      "Advanced Search & Filtering",
      "Mobile-Responsive Design",
      "Admin Management Tools"
    ],
    challenges: [
      "Integrating AI image generation APIs",
      "Implementing real-time book availability updates",
      "Creating an intuitive book discovery interface",
      "Managing complex user permissions and roles",
      "Optimizing image loading and caching"
    ],
    technologies: ["React.js", "JavaScript", "Express.js","MongoDB","JWT", "AI Image Generator", "Tailwind CSS"],
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
