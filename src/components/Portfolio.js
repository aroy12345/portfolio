import React, { useState, useEffect } from 'react';
import { 
  GithubIcon, 
  LinkedinIcon, 
  MailIcon, 
  ExternalLinkIcon, 
  ChevronRightIcon,
  BookOpenIcon,
  ChevronLeftIcon,  // Add this
  PlayIcon,         // Add this
  BriefcaseIcon,
  CodeIcon,
  WrenchIcon,
  AwardIcon,
  GraduationCapIcon
} from 'lucide-react';

const ImageGallery = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  return (
    <div className="mb-6 w-full">
      <div className="relative aspect-video mb-2 rounded-lg overflow-hidden bg-gray-50">
        <img
          src={images[currentIndex]}
          alt="Project preview"
          className="w-full h-full object-contain"
        />
        {images.length > 1 && (
          <>
            <button
              onClick={() => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 bg-black/10 hover:bg-black/20 rounded-full transition-colors"
            >
              <ChevronLeftIcon className="w-4 h-4 text-white" />
            </button>
            <button
              onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-black/10 hover:bg-black/20 rounded-full transition-colors"
            >
              <ChevronRightIcon className="w-4 h-4 text-white" />
            </button>
          </>
        )}
      </div>
      {images.length > 1 && (
        <div className="flex gap-2 justify-center">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${
                idx === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const education = {
    university: "University of Pennsylvania",
    duration: "August 2022 - May 2026",
    degrees: [
      {
        title: "M.S.E. Robotics",
        gpa: "3.9/4.00",
        courses: [
          "Advanced Robotics",
          "Machine Learning/Perception",
          "Statistical Inference",
          "Advanced Deep Learning"
        ]
      },
      {
        title: "B.S.E. Computer Science",
        concentration: "Artificial Intelligence",
        gpa: "3.9/4.00",
        courses: [
          "Analysis of Algorithms",
          "Data Structures",
          "Operating Systems",
          "Cloud Computing",
          "Internet/Web Systems",
          "Android App Development"
        ]
      },
      {
        title: "B.A. Mathematics",
        gpa: "3.95/4.00",
        courses: [
          "Probability",
          "Applied Probability Models",
          "Statistical Inference",
          "Real Analysis",
          "Advanced Linear Algebra"
        ]
      },
      {
        title: "B.S. Business Economics (Wharton)",
        gpa: "3.8/4.00",
        concentration: "Statistics & Finance",
        courses: [
          "Big Data Analytics",
          "Statistical Inference",
          "Financial Derivatives",
          "Management + Marketing",
          "Accounting",
          "Operations Optimization"
        ]
      }
    ],
    courseCategories: {
      "Computer Science": [
        { name: "Analysis of Algorithms", level: "Advanced" },
        { name: "Operating Systems", level: "Core" },
        { name: "Cloud Computing", level: "Advanced" },
        { name: "Internet/Web Systems", level: "Core" },
        { name: "Android App Development", level: "Applied" }
      ],
      "Artificial Intelligence": [
        { name: "Machine Learning/Perception", level: "Advanced" },
        { name: "Advanced Deep Learning", level: "Graduate" },
        { name: "Advanced Robotics", level: "Graduate" }
      ],
      "Mathematics & Statistics": [
        { name: "Probability", level: "Core" },
        { name: "Applied Probability Models", level: "Advanced" },
        { name: "Statistical Analysis", level: "Advanced" },
        { name: "Statistical Inference", level: "Graduate" }
      ],
      "Business & Analytics": [
        { name: "Big Data Analytics", level: "Advanced" },
        { name: "Financial Analysis", level: "Core" }
      ]
    }
  };

  
const experiences = [
  {
    title: "AI/ML Research Intern",
    company: "Honeywell Aerospace",
    location: "Plymouth, Minnesota",
    duration: "06/2024 - 09/2024",
    description: [
      "Developed advanced sensor fusion and velocity prediction models integrated with Kalman Filters to enhance drone navigation systems, achieving an 18% improvement in trajectory estimation accuracy.",
      "Implemented Allan Variance analysis techniques in Python to characterize and mitigate gyroscope sensor errors, resulting in a 10% reduction in angular random walk and bias instability.",
      "Designed and optimized novel deep learning architectures (TFTs, N-BEATS) for sensor data processing, incorporating Bayesian Neural Networks for uncertainty quantification in predictions.",
      "Conducted extensive simulations and real-world tests to validate the robustness of sensor fusion models against various environmental perturbations and sensor failures."
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "Gazebo", "Kalman Filters", "Sensor Fusion", "Bayesian Neural Networks"],
    achievements: [
      "18% improvement in trajectory estimation accuracy",
      "10% reduction in angular random walk",
      "Developed novel deep learning architectures for sensor processing"
    ],
    imagePlaceholder: "/images/Honeywell.png"
  },
  {
    title: "VIP Practicum SWE Intern",
    company: "Educational Technology Startup",
    location: "Philadelphia, PA",
    duration: "08/2022 - 08/2023",
    description: [
      "Developed machine learning algorithms leveraging scikit-learn and TensorFlow to detect key variable trends, enabling personalized learning plans for students with autism.",
      "Engineered a full-stack iOS application using Swift, CoreML, and ARKit for interactive educational games, serving as the primary product for the startup.",
      "Designed and implemented an accessible UI/UX, optimizing engagement and usability for children with special needs.",
      "Secured a $6,000 grant to advance the startup's mission, focusing on the development and deployment of specialized learning tools."
    ],
    technologies: ["Swift", "iOS Development", "CoreML", "ARKit", "TensorFlow", "scikit-learn"],
    achievements: [
      "Secured $6,000 in grant funding",
      "Developed personalized learning algorithms",
      "Created accessible UI/UX for special needs users"
    ]
  },
  {
    title: "University Student Research Lead",
    company: "University of Pennsylvania",
    location: "Philadelphia, PA; Denver, Colorado",
    duration: "08/2021 - Present",
    description: [
      "Secured a $5,000 grant to enhance kidney donor-recipient matching algorithms, leading to a 15% increase in low-risk transplant identification through improved FIBERS algorithm implementation.",
      "Researched and implemented deep learning algorithms for medical image reconstruction, achieving a 10% increase in image resolution.",
      "Developed an augmented reality surgical system integrating with clinical imaging modalities.",
      "Spearheaded deep neural network architectures for brain cancer prognostic modeling, achieving 12% improvement in diagnostic accuracy and 8% enhancement in survival rate predictions.",
      "Developed VR-based telerehabilitation games for neurodegenerative disease patients."
    ],
    technologies: ["Python", "Deep Learning", "AR/VR", "Medical Imaging", "Statistical Modeling"],
    achievements: [
      "15% increase in low-risk transplant identification",
      "10% improvement in image resolution",
      "12% improvement in diagnostic accuracy",
      "8% enhancement in survival rate predictions",
      "Secured $5,000 research grant",
      "Presented/Won Awards in State Science Fairs"
    ]
  },
  {
    title: "Analyst",
    company: "Wharton Analytics Fellows",
    location: "Philadelphia, PA",
    duration: "2023",
    description: [
      "Consulted for Fox Entertainment to develop sophisticated customer segmentation models using machine learning for content engagement optimization on Hulu",
      "Analyzed viewing patterns and engagement metrics to identify distinct customer segments",
      "Created targeted marketing strategies based on segmentation analysis",
      "Developed value assessment frameworks for content performance evaluation"
    ],
    technologies: ["Data Analytics", "Python", "Statistical Analysis", "Marketing Analytics", "Machine Learning"],
    achievements: [
      "Successfully developed customer segmentation model for Fox",
      "Optimized targeted marketing strategies",
      "Enhanced content value assessment methodology"
    ]
  },
  {
    title: "Teaching Assistant",
    company: "University of Pennsylvania",
    location: "Philadelphia, PA",
    duration: "2023 - Present",
    description: [
      "Teaching Assistant for CIS 3200 (Advanced Algorithms) and CIS 5200 (Machine Learning)",
      "Conduct office hours and recitations for over 350 students",
      "Grade assignments and provide detailed feedback",
      "Create and review course materials"
    ],
    technologies: ["Algorithms", "Machine Learning", "Python", "Teaching"],
    achievements: [
      "Supporting 350+ students across two courses",
      "Contributing to course material development"
    ]
  },
  {
    title: "Software Team Member",
    company: "Penn Aerial Robotics",
    location: "Philadelphia, PA",
    duration: "2022 - Present",
    description: [
      "Developed and optimized software algorithms for drone navigation and object detection",
      "Integrated sensor data and machine learning techniques for enhanced autonomous decision-making",
      "Participated in multiple autonomous competitions including SAE Aero Design, PADA Competition, and Mission 10 Competition",
      "Implemented precise control and stability systems for competitive drone operations"
    ],
    technologies: ["Python", "Computer Vision", "Robotics", "Machine Learning", "Sensor Integration"],
    achievements: [
      "Competed in multiple drone competitions",
      "Enhanced autonomous navigation capabilities",
      "Improved object detection accuracy"
    ]
  }
];
  
const projects = [
  {
    "title": "Search Engine",
     media: {
      images: [`${process.env.PUBLIC_URL}/images/Homepage.png`, `${process.env.PUBLIC_URL}/images/Results.png`],  // Optional
             // Optional
           // Optional
    },
    "description": "Cloud-based web search engine using AWS EC2, featuring custom multi-threaded web server and distributed crawler",
    "detailed_description": "Built a scalable distributed search engine from scratch on AWS EC2 with a custom built multi-threaded HTTP server. Implements PageRank and TF-IDF ranking, using AWS S3 for content storage. Features real-time indexing, load balancing, and comprehensive monitoring through a responsive search interface.",
    "tech": ["Java", "HTML/CSS", "AWS", "PageRank", "TF-IDF"],
    "features": [
      "Multi-threaded web crawler with robots.txt compliance and rate limiting",
      "Distributed architecture with horizontal scalability",
      "Real-time indexing and search with PageRank scoring",
      "Advanced caching system with fault-tolerant, custom developed key-value store",
      "Developed analytics engine with distributed RDD operations (join, fold, distinct)",
      "Real-time monitoring and responsive search interface",
      "Development of web server, crawler, indexer, and analytics components from scratch",
      "URL corpus of over a million pages"
    ],
    "github": "https://github.com/aroy12345/Upgraded-Engine"
  },
  {
    "title": "PennOS",
    media: {
      images: [`${process.env.PUBLIC_URL}/images/os.png`], 
                  // Optional
                     // Optional
    },
    "description": "Simulated operating system environment in C with custom kernel and process management",
    "detailed_description": "    Developed ”pennOS,” a simulated operating system environment in C. This project included creating a custom kernel, complex process management, and an efficient scheduler using process control blocks and priority algorithms. It also featured a FAT-based file system and a user-space shell for managing processes and files. Key aspects were a circular linked list for scheduling, thread creation, signal handling, and a logging system for monitoring activities",
    "tech": ["C", "Operating Systems", "Threading", "Process Management"],
    "features": [
      "Custom kernel with process control blocks and priority scheduling",
      "FAT-based file system with directory structure",
      "Interactive shell with pipeline support",
      "Comprehensive process management",
      "System call interface and interrupt handling",
      "Detailed logging and monitoring system"
    ],
    "github": "https://github.com"
  },
  {
    "title": "Edu AI App",
    media: {
      images: [
        `${process.env.PUBLIC_URL}/images/Flashcards.png`, 
        `${process.env.PUBLIC_URL}/images/Quizzes.png`, 
        `${process.env.PUBLIC_URL}/images/Plato.png`
      ],
    
    },
    "description": "AI-powered educational content analysis and generation platform",
    "detailed_description": "Designed and developed a web application using Python and Flask for the automated extraction and semantic analysis of educational content from uploaded lecture materials in PDF and video formats. Implemented a pipeline for generating structured flashcards, lecture notes, and quizzes, utilizing Optical Character Recognition for text extraction from video frames and Named Entity Recognition for identifying key concepts. Integrated SQLAlchemy for persistent storage and retrieval of the generated educational content, ensuring efficient data management and scalability.",
    "tech": ["Python", "Flask", "OCR", "NLP", "SQLAlchemy", "TensorFlow"],
    "features": [
      "Multi-format content extraction (PDF, video, images)",
      "Advanced NLP for concept extraction and relationship mapping",
      "Adaptive quiz generation based on learning progress",
      "Personalized study path optimization",
      "Collaborative learning features",
    ],
    "github": "https://github.com/aroy12345/EDU-AI-Project"
   
  },
  {
    "title": "Film Fanatic App",
     media: {
      images: [`${process.env.PUBLIC_URL}/images/movies.png`],
     
    },
    "description": "Feature-rich Android movie discovery and tracking application",
    "detailed_description": "Engineered a feature-rich Android application using Kotlin and the Android SDK, integrating with RESTful APIs via Retrofit2 to dynamically fetch and display detailed data on upcoming movies, including high-resolution images, directorial credits, cast lists, and reviews. Leveraged MVVM architecture to separate concerns and optimize data handling. Employed Glide for efficient image loading and Room for local data caching, while replicating the UI/UX of industry-standard platforms like Fandango.",
    "tech": ["Kotlin", "Android SDK", "MVVM", "Room", "Retrofit2", "Glide"],
    "features": [
      "Real-time movie data synchronization",
      "Offline-first architecture with local caching",
      "Advanced search and filtering capabilities",
      "Social features for sharing and reviewing",
      "Material Design UI with smooth animations",
      "Background synchronization and notifications"
    ],
    "github": "https://github.com/aroy12345/FilmApp.git"
  },
  {
    "title": "Social Media Clone",
    media: {
      images: [`${process.env.PUBLIC_URL}/images/Aryan_Twitter.png`],
    
    },
    "description": "Full-stack social platform with video sharing capabilities",
    "detailed_description": "Developed a full-stack social media platform using the MERN stack (MongoDB, Express.js, React.js, Node.js), replicating core features of Twitter and YouTube. Implemented user authentication using JWT and integrated RESTful APIs for managing posts, comments, and media uploads. Utilized AWS S3 for efficient media storage and retrieval.",
    "tech": ["MongoDB", "Express.js", "React", "Node.js", "AWS S3", "Socket.IO"],
    "features": [
      "JWT-based authentication system",
      "Media upload and processing pipeline",
      "Advanced search functionality",
      "Responsive design for all devices",
    ],
    "github": "https://github.com/aroy12345/Customer_Analytics.git"
  },
  {
    "title": "Paint GUI & Games",
    media: {
      images: [
        `${process.env.PUBLIC_URL}/images/paint.png`,
        `${process.env.PUBLIC_URL}/images/ladders.png`
      ],
    
    },
    "description": "Advanced graphics applications including Paint clone and board games",
    "detailed_description": "Developed sophisticated graphical applications including a feature-rich paint program in OCaml and an interactive Snakes and Ladders game in Java. The paint application supports various drawing tools, layer management, and advanced styling options. The board game implementation features AI opponents, multiplayer support, and animated game elements.",
    "tech": ["OCaml", "Java Swing", "Graphics Programming"],
    "features": [
      "Multiple drawing tools and shapes",
      "Layer management system",
      "Custom color picker and patterns",
      "Interactive board game mechanics",
      "Animation system"
    ],
    "github": "https://github.com/aroy12345/GUIs"
  },
  {
    "title": "Stock Market Predictor",
    "description": "Machine learning-based stock market analysis and prediction system",
    "detailed_description": "Developed a comprehensive stock market prediction system utilizing advanced machine learning techniques and big data processing. Implemented multiple prediction models including Deep Neural Networks and regularized regression models. Created sophisticated data preprocessing pipelines and feature engineering systems for analyzing Japanese stock market data.",
    "tech": ["Python", "PyTorch", "Pandas", "Scikit-learn", "Deep Learning"],
    "features": [
      "Advanced data preprocessing pipeline",
      "Feature engineering and selection",
      "Multiple time-series prediction models",
      "Performance visualization dashboard",
      "Model comparison and evaluation",
    ],
    "github": "https://github.com/aroy12345/StockMarketPredictions.git"
  },
  {
    "title": "Mini-Compiler",
    "description": "Assembly language compiler with optimization capabilities",
    "detailed_description": "Developed a sophisticated compiler system for translating Assembly language into optimized machine code. Implemented comprehensive lexical analysis, syntax parsing, and code optimization phases. Created an efficient intermediate representation for code optimization and generated optimized object files.",
    "tech": ["C", "Assembly", "Compiler Design"],
    "features": [
      "Lexical analysis and tokenization",
      "Syntax parsing and validation",
      "Intermediate code generation",
      "Code optimization techniques",
      "Object file generation",
      "Error handling and reporting",
      "Support for multiple assembly dialects"
    ]
  }
];

const awards = [
  {
    title: "USACO Gold Qualifier",
    year: "2021",
    description: "Achieved Gold Division qualification in the USA Computing Olympiad, demonstrating exceptional algorithmic problem-solving abilities"
  },
  {
    title: "Colorado School of Mines Top Finisher",
    year: "2022",
    description: "Secured top 5 placement in the state-wide programming competition"
  },
  {
    title: "ACSL All Star Nationals",
    year: "2021",
    description: "Qualified for the American Computer Science League National Competition"
  },
  {
    title: "Denver Metro Regional Science Fair Awards",
    year: "2021",
    description: "Earned Second Place in Computer Science, received the Office of Naval Research Outstanding Project Award, and won First Place in Behavioral Sciences"
  },
  {
    title: "Science Bowl State Finalist",
    year: "2022",
    description: "Achieved Colorado State Runner-up (2021) and Third Place (2022) in the National Science Bowl competition"
  },
  {
    title: "Science Olympiad Top 3 State Finisher",
    year: "2022",
    description: "Secured six Top 3 finishes in Regional Science Olympiad and three Top 3 State finishes in Chemistry, Geology, and Disease Studies"
  },
  {
    title: "Colorado State Science Fair 2nd Place Chemistry",
    year: "2022",
    description: "Awarded Second Place in Chemistry, along with distinguished recognition from CU Anschutz for Outstanding Neuroscience Research and the ASM Materials Education Foundation"
  },
  {
    title: "FBLA Top 5 Nationally + State Officer",
    year: "2022",
    description: "Achieved two Top 3 National finishes in Public Speaking and Emerging Business Issues, earned three Top 4 State placements, served as National Council Leader for 3,000 students in the Mountain Plains Region, and as Colorado State Officer representing 2,000 students"
  },
  {
    title: "Speech and Debate Top 20 Nationally",
    year: "2022",
    description: "Ranked among the top 20 nationally, secured first place in state for Congressional Debate, achieved Top 3 in state for Humorous Interpretation, advanced to finals in over 25 local/state tournaments, and qualified twice for Nationals"
  },
  {
    title: "Third Degree Black Belt - World Taekwondo Federation",
    year: "2021",
    description: "Attained Third Degree Black Belt certification, officially recognized by the World Taekwondo Federation for mastery in forms and techniques"
  }
];
  

  const skills = {
    languages: [
      { name: "Python", level: "Advanced", category: "General Purpose" },
      { name: "Java", level: "Advanced", category: "General Purpose" },
      { name: "C", level: "Intermediate", category: "Systems" },
      { name: "C++", level: "Intermediate", category: "Systems" },
      { name: "C#", level: "Intermediate", category: "App and Games" },
      { name: "JavaScript", level: "Advanced", category: "Web" },
      { name: "HTML/CSS", level: "Advanced", category: "Web" },
      { name: "R", level: "Advanced", category: "Statistical" },
      { name: "SQL", level: "Advanced", category: "Database" },
      { name: "OCaml", level: "Intermediate", category: "Functional" },
      { name: "Swift", level: "Intermediate", category: "Mobile" },
      { name: "Kotlin", level: "Intermediate", category: "Mobile" }
    ],
    frameworks: [
      { name: "PyTorch", category: "ML/AI" },
      { name: "TensorFlow", category: "ML/AI" },
      { name: "OpenCV", category: "Computer Vision" },
      { name: "React.js", category: "Frontend" },
      { name: "Node.js", category: "Backend" },
      { name: "Express.js", category: "Backend" },
      { name: "Flask", category: "Backend" },
      { name: "Django", category: "Backend" },
      { name: "Scikit-learn", category: "ML/AI" },
      { name: "Matplotlib", category: "Data Visualization" }
    ],
    tools: [
      { name: "Unity", category: "Game Development" },
      { name: "Git", category: "Version Control" },
      { name: "Docker", category: "DevOps" },
      { name: "AWS", category: "Cloud" },
      { name: "MATLAB", category: "Scientific Computing" },
      { name: "MongoDB", category: "Database" },
      { name: "PostgreSQL", category: "Database" }
    ],
    concepts: [
      { name: "Machine Learning", category: "AI/ML" },
      { name: "Deep Learning", category: "AI/ML" },
      { name: "Distributed Systems", category: "Systems" },
      { name: "Cloud Computing", category: "Infrastructure" },
      { name: "Object-Oriented Programming", category: "Programming Paradigms" },
      { name: "RESTful APIs", category: "Web Development" },
      { name: "API Development", category: "Web Development" },
      { name: "Frontend & Backend Development", category: "Web Development" },
      { name: "RDBMS", category: "Databases" },
      { name: "Natural Language Processing", category: "AI/ML" },
      { name: "Algorithms & Data Structures", category: "Computer Science" }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Aryan Roy
            </h1>
            <div className="flex gap-6">
              <a href="https://github.com" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                <GithubIcon className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/aryan-roy-837447263" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                <LinkedinIcon className="w-6 h-6" />
              </a>
              <a href="mailto:aryanroy@seas.upenn.edu" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                <MailIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="fixed top-20 w-full bg-white/80 backdrop-blur-md border-b z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-8">
            {[
              { id: 'about', icon: GraduationCapIcon },
              { id: 'experience', icon: BriefcaseIcon },
              { id: 'projects', icon: CodeIcon },
              { id: 'skills', icon: WrenchIcon },
              { id: 'awards', icon: AwardIcon }
            ].map(({ id, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveSection(id)}
                className={`py-4 px-4 flex items-center gap-2 border-b-2 transition-all duration-300 ${
                  activeSection === id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <Icon className="w-5 h-5" />
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-40">
        {/* About Section */}
        
{activeSection === 'about' && (
  <div className="space-y-12">
    {/* Hero Section */}
    <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
      <div className="flex flex-col-reverse md:flex-row items-center gap-8">
        <div className="flex-1">
          <div className="mb-6">
            <h2 className="text-lg text-blue-600 font-medium mb-2">Hello 👋, I'm</h2>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Aryan Roy
            </h1>
            <h3 className="text-2xl text-gray-700 font-semibold mb-4">
              Student, Builder, Researcher, Engineer
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Through my work and research, I strive to develop solutions that are not only technologically 
              advanced but also create meaningful impact. My multidisciplinary background in computer science, 
              mathematics, economics, and robotics enables me to approach problems from multiple angles and 
              deliver comprehensive solutions. I aim to 
              create innovative software solutions that revolutionize diverse domains, from healthcare and automation to finance and environmental sustainability.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3 mb-8">
  
            <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
              Full Stack Development
            </span>
            <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
              Robotics
            </span>
            <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              Artificial Intelligence
            </span>
            <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
              Systems Programming
            </span>
            <span className="px-4 py-2 bg-pink-100 text-pink-800 rounded-full text-sm font-medium">
              Distributed Systems
            </span>
            <span className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
              Science Research
            </span>
          </div>

          <button 
            onClick={() => window.open('mailto:aryanroy@wharton.upenn.edu')}
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            <MailIcon className="w-5 h-5" />
            Get in Touch
          </button>
        </div>

        {/* Illustration Side */}
        <div className="relative w-full md:w-1/2 flex justify-center">
        <img 
          src={`${process.env.PUBLIC_URL}/images/profile.png`}
          alt="Aryan Roy - Profile Picture" 
          className="w-80 h-80 rounded-full object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
        />
      </div>
      </div>
    </div>

    {/* Education Section - Keeping the existing education section */}
    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center gap-4 mb-6">
        <GraduationCapIcon className="w-8 h-8 text-blue-600" />
        <h2 className="text-3xl font-bold text-gray-800">Education</h2>
      </div>
 
      <div className="mb-8">
  <div className="relative overflow-hidden max-w-4xl mx-auto bg-[#02154F] rounded-full">
    <img 
      src={`${process.env.PUBLIC_URL}/images/grasp.png`}
      className="w-full object-contain rounded-full"
      style={{ 
        minHeight: "200px",
        display: "block",
        margin: "0 auto",
        padding: "8px 24px"  // Added padding to give it that pill shape look
      }}
    />
  </div>
</div>
     

      <h3 className="text-2xl font-bold text-gray-800">{education.university}</h3>
      <p className="text-blue-600 font-medium mb-6">{education.duration}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {education.degrees.map((degree, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-300">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">{degree.title}</h4>
            {degree.gpa && (
              <p className="text-green-600 font-medium mb-3">GPA: {degree.gpa}</p>
            )}
            <div className="space-y-2">
              <h5 className="font-medium text-gray-700">Key Courses:</h5>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {degree.courses.map((course, i) => (
                  <li key={i}>{course}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)}
       {/* Experience Section */}
{activeSection === 'experience' && (
  <div className="space-y-8">
    {experiences.map((exp, index) => (
      <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
          {/* Left Content */}
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-4">
              <BriefcaseIcon className="w-8 h-8 text-blue-600" />
              <div>
                <h3 className="text-2xl font-bold text-gray-800">{exp.title}</h3>
                <p className="text-blue-600 font-medium">{exp.company}</p>
              </div>
            </div>
            <p className="text-gray-600 mb-2">{exp.location}</p>
            <p className="text-gray-500 mb-6">{exp.duration}</p>
            
            <div className="mb-6">
              <h4 className="font-semibold text-gray-700 mb-3">Responsibilities:</h4>
              <ul className="space-y-3">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <ChevronRightIcon className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold text-gray-700 mb-3">Key Achievements:</h4>
              <ul className="space-y-3">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <AwardIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-700 mb-3">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Media Content */}
          <div className="w-full md:w-96">
  {exp.media?.image && (
    <img
      src={exp.media.image}
      alt={`${exp.company} work`}
      className="w-full rounded-lg mb-4"
    />
  )}
  <div className="flex gap-3">
    {exp.media?.video && (
      <a                 
        href={exp.media.video}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
      >
        <PlayIcon className="w-5 h-5" />
        <span>Watch Demo</span>
      </a>
    )}
    {exp.media?.demo_url && (
      <a                 
        href={exp.media.demo_url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
      >
        <ExternalLinkIcon className="w-5 h-5" />
        <span>View Demo</span>
      </a>
    )}
  </div>
</div>
        </div>
      </div>
    ))}
  </div>
)}

       {/* Projects Section */}
{activeSection === 'projects' && (
  <div className="grid grid-cols-1 gap-8">
    {projects.map((project, index) => (
      <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        {/* Media Section - Added at the top */}
        {project.media?.images && (
          <div className="w-full">
            <ImageGallery images={project.media.images} />
          </div>
        )}

        <div className="flex flex-col md:flex-row">
          <div className="p-8 flex-1">
            <div className="flex items-center gap-4 mb-4">
              <CodeIcon className="w-8 h-8 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
            </div>
            <p className="text-gray-600 mb-4">{project.detailed_description}</p>
            
            <div className="mb-6">
              <h4 className="font-semibold text-gray-700 mb-3">Key Features:</h4>
              <ul className="space-y-2">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <ChevronRightIcon className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold text-gray-700 mb-3">Technologies:</h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              {project.github && (
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
                >
                  <GithubIcon className="w-5 h-5" />
                  <span>View Code</span>
                </a>
              )}
              {project.media?.demo_video && (
                <a 
                  href={project.media.demo_video}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
                >
                  <PlayIcon className="w-5 h-5" />
                  <span>Watch Demo</span>
                </a>
              )}
              {project.media?.live_demo_url && (
                <a 
                  href={project.media.live_demo_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
                >
                  <ExternalLinkIcon className="w-5 h-5" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
)}
       
        {/* Skills Section */}
        {activeSection === 'skills' && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-4 mb-8">
                <WrenchIcon className="w-8 h-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-800">Technical Skills</h2>
              </div>

              {/* Programming Languages */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Programming Languages</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {skills.languages.map((skill, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-300">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-800">{skill.name}</span>
                        <span className="text-sm text-blue-600">{skill.level}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 rounded-full h-2 transition-all duration-500"
                          style={{ 
                            width: skill.level === 'Expert' ? '90%' : 
                                   skill.level === 'Advanced' ? '75%' : '60%' 
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Frameworks & Libraries */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Frameworks & Libraries</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Object.entries(
                    skills.frameworks.reduce((acc, curr) => {
                      if (!acc[curr.category]) acc[curr.category] = [];
                      acc[curr.category].push(curr.name);
                      return acc;
                    }, {})
                  ).map(([category, items], index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-800 mb-4">{category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {items.map((item, i) => (
                          <span key={i} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Developer Tools */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Developer Tools</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Object.entries(
                    skills.tools.reduce((acc, curr) => {
                      if (!acc[curr.category]) acc[curr.category] = [];
                      acc[curr.category].push(curr.name);
                      return acc;
                    }, {})
                  ).map(([category, items], index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-800 mb-4">{category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {items.map((item, i) => (
                          <span key={i} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Awards Section */}
        {activeSection === 'awards' && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-4 mb-8">
                <AwardIcon className="w-8 h-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-800">Awards & Achievements</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {awards.map((award, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-300">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <AwardIcon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{award.title}</h3>
                        <p className="text-blue-600 font-medium mb-2">{award.year}</p>
                        <p className="text-gray-600">{award.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-20">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600">© 2024 Aryan Roy. </p>
            <div className="flex gap-6">
              <a href="https://github.com" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                <GithubIcon className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/aryan-roy-837447263" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                <LinkedinIcon className="w-6 h-6" />
              </a>
              <a href="mailto:aryanroy@wharton.upenn.edu" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                <MailIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;