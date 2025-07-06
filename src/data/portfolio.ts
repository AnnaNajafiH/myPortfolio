import easyShopImage from '../assets/images/easyShop.jpg.png';
import bookLookImage from '../assets/images/booklook1.png';
import pokemonImage from '../assets/images/pokemon1.png';
import profileImage from '../assets/images/profilePic.jpg';

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
    shortDescription: "A modern full-stack e-commerce platform with advanced features and seamless user experience.",
    description: "A Full-Stack e-commerce platform built with modern web technologies, featuring a responsive React frontend and robust Node.js backend. This full-stack application demonstrates advanced TypeScript development, cloud deployment, and modern UI/UX design principles.",
    detailedDescription: `EasyShop is a comprehensive e-commerce solution that showcases modern web development practices. The platform features a fully responsive React frontend built with TypeScript, ensuring type safety and better developer experience. The backend leverages Express.js and MongoDB to provide a robust and scalable API.

Key features include user authentication with JWT tokens, secure payment processing through PayPal SDK integration, and a clean, intuitive user interface designed with Bootstrap. The application demonstrates full CRUD operations, advanced state management, and follows RESTful API design principles.

The project showcases my ability to work with modern JavaScript frameworks, implement secure authentication systems, integrate third-party payment solutions, and deploy full-stack applications to cloud platforms.`,
    features: [
      "User Authentication & Authorization",
      "Product Catalog Management", 
      "Shopping Cart Functionality",
      "Secure Payment Processing",
      "Order Management System",
      "Responsive Design",
      "Admin Dashboard",
      "Real-time Inventory Updates"
    ],
    challenges: [
      "Implementing secure JWT authentication flow",
      "Integrating PayPal SDK for payment processing",
      "Managing complex state across multiple components",
      "Ensuring responsive design across all devices",
      "Optimizing performance for large product catalogs"
    ],
    technologies: [
        "TypeScript",
        "React",
        "Express.js",
        "MongoDB",
        "Bootstrap",
        "PayPal SDK",
        "JWT"
      ],
    githubUrl: "https://github.com/AnnaNajafiH/EasyShop",
    liveUrl: "https://easyshop-frontend-u9wj.onrender.com/",
    image: easyShopImage,
    gallery: [easyShopImage], // You can add more images later
    status: "Completed",
    duration: "3 months"
  },
  {
    id: 2,
    name: "BookLook",
    shortDescription: "A community-driven platform for managing and sharing public bookshelf resources.",
    description: "A responsive full-stack platform for managing public bookshelf system with AI-powered features and community engagement.",
    detailedDescription: `BookLook is an innovative platform designed to revolutionize how communities manage and interact with public book-sharing systems. Built with React.js and powered by a robust Express.js backend, this application combines traditional book management with modern AI capabilities.

The platform features an intelligent AI image generator that creates custom book covers and visual content, enhancing the user experience and making book discovery more engaging. Users can browse, reserve, and manage books through an intuitive interface designed with Tailwind CSS.

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
    duration: "2 months"
  },
  {
    id: 3,
    name: "Pokémon Play",
    shortDescription: "An interactive Pokémon battle game with comprehensive Pokédex functionality.",
    description: "An engaging Pokémon-themed application featuring battle mechanics, Pokédex exploration, and responsive design.",
    detailedDescription: `Pokémon Play is an interactive web application that brings the beloved Pokémon universe to life through modern web technologies. Built with React and featuring a sleek Tailwind CSS design, this application provides users with an immersive Pokémon experience.

The application features a comprehensive Pokédex with detailed information about various Pokémon species, including stats, abilities, and evolution chains. Users can engage in simulated battles, explore different Pokémon types, and track their progress through secure user authentication.

The project demonstrates proficiency in API integration, state management, and creating engaging user interfaces. The responsive design ensures optimal performance across all devices, while the Express.js backend provides robust data management and user session handling.`,
    features: [
      "Interactive Pokémon Battles",
      "Comprehensive Pokédex",
      "User Progress Tracking",
      "Pokémon Statistics Display",
      "Type Effectiveness Calculator",
      "Responsive Game Interface",
      "User Authentication",
      "Battle History & Analytics"
    ],
    challenges: [
      "Implementing complex battle mechanics",
      "Managing large datasets of Pokémon information",
      "Creating smooth animations and transitions",
      "Optimizing performance for mobile devices",
      "Balancing game mechanics for fair play"
    ],
    technologies: ["JavaScript", "React", "Express.js", "Tailwind CSS", "JWT"],
    githubUrl: "https://github.com/yourusername/pokemon-play",
    liveUrl: "https://wd51-pokebattle.netlify.app/pokedex",
    image: pokemonImage,
    gallery: [pokemonImage], // You can add more images later
    status: "Completed",
    duration: "1.5 months"
  }
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
    degree: "Bachelor of Science in Computer Science",
    school: "University of Technology",
    location: "City, State",
    graduationDate: "May 2018",
    description: "Relevant coursework: Data Structures, Algorithms, Software Engineering, Database Systems"
  },
  {
    id: 2,
    degree: "Full Stack Web Development Bootcamp",
    school: "Coding Bootcamp Institute",
    location: "Online",
    graduationDate: "Dec 2018",
    description: "Intensive 6-month program covering modern web development technologies and best practices"
  }
];
