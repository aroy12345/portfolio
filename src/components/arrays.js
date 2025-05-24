const education = {
  university: "University of Pennsylvania",
  duration: "August 2022 - May 2026",
  degrees: [
    {
      title: "M.S.E. Robotics",
      gpa: "3.90/4.00",
      courses: [
        "Advanced Robotics",
        "Machine Learning/Perception",
        "Autonomous Racing Cars",
        "Learning in Robotics",
        "Computer Graphics",
        "Advanced Deep Learning"
      ]
    },
    {
      title: "B.S.E. Computer Science",
      concentration: "Artificial Intelligence",
      gpa: "3.85/4.00",
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
      gpa: "3.90/4.00",
      courses: [
        "Probability",
        "Applied Probability Models",
        "Statistical Inference",
        "Real Analysis",
        "Advanced Linear Algebra"
      ]
    },
    {
      title: "B.S. Business Administration (Wharton)",
      concentration: "Statistics & Finance",
      courses: [
        "Big Data Analytics",
        "Business Economics",
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
  title: "Software Engineering Intern",
  company: "Palantir Technologies",
  location: "Denver, Colorado",
  description: [
    "Palantir Foundry Team - Embedded Ontology"
  ],
  technologies: ["Java", "Rust", "TypeScript"],
  achievements: [
    "Exciting Stuff Coming!"
  ],
  imagePlaceholder: "/images/Honeywell.png"
},
{
  title: "AI/ML Research Intern",
  company: "Honeywell Aerospace",
  location: "Plymouth, Minnesota",
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
  description: [
    "Developed and optimized software algorithms for drone navigation and object detection",
    "Integrated sensor data and machine learning techniques for enhanced autonomous decision-making",
    "Participated in multiple autonomous competitions including SAE Aero Design, PADA Competition, and Mission 10 Competition",
   
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
  "short_description": "Scalable distributed search engine built on AWS with custom multi-threaded HTTP server, PageRank, and TF-IDF.",
  "detailed_description": "Built a scalable distributed search engine from scratch on AWS EC2 with a custom built multi-threaded HTTP server. Implements PageRank and TF-IDF ranking, using AWS S3 for content storage. Features real-time indexing, load balancing, and comprehensive monitoring through a responsive search interface.",
  "tech": ["Java", "HTML/CSS", "AWS", "PageRank", "TF-IDF"],
  "features": [
    "Development of web server, crawler, indexer, and analytics components from scratch",
    "Distributed architecture with horizontal scalability",
    "Real-time indexing and search with PageRank scoring",
    "Advanced caching system with fault-tolerant, custom developed key-value store",
    "Developed analytics engine with distributed RDD operations (join, fold, distinct)",
    "Real-time monitoring and responsive search interface",
    "Multi-threaded web crawler with robots.txt compliance and rate limiting",
    "URL corpus of over a million pages"
  ],
  "github": "https://github.com/aroy12345/Upgraded-Engine"
},
{
  "title": "Robotic Block Stacking System",
  media: {
    images: [
      `${process.env.PUBLIC_URL}/images/Robot2.png`,
      `${process.env.PUBLIC_URL}/images/Robot1.png`,
      `${process.env.PUBLIC_URL}/images/Robot3.png`,
    ],
  },
  "description": "Developed an advanced robotic manipulation system for automated block stacking using inverse kinematics and computer vision",
  "short_description": "Robotic system for automated block stacking using inverse kinematics, computer vision, and multithreaded computation.",
  "detailed_description": "Implemented a comprehensive robotic control system featuring static and dynamic block stacking capabilities. The system utilized inverse kinematics for precise arm control, computer vision for block detection and tracking, and multithreaded computation for optimized performance. Key achievements included developing two distinct approaches for dynamic block manipulation - a sweep-based method and a predictive algorithm - along with robust static stacking using both IK-based and pre-computed configurations. The system demonstrated high reliability with a 93.75% success rate for static stacking and effectively handled dynamic scenarios on a rotating platform.",
  "tech": ["Python", "ROS", "Computer Vision", "Inverse Kinematics", "Multithreading", "Motion Planning"],
  "features": [
    "Real-time block detection and pose estimation using camera feedback",
    "Advanced inverse kinematics for precise robotic arm control",
    "Multithreaded computation for concurrent trajectory planning",
    "Dynamic block interception with predictive tracking",
    "Robust error handling and collision avoidance",
    "Automated stack height management and position control",
    "Integration of both static and dynamic stacking capabilities",
    "Achievement of 93.75% success rate in static stacking trials"
  ],
  "github": "https://github.com/aroy12345/Robotics-Project-Kinematics-Code.git"
},
{
  "title": "FUSE: Vision-Language Model Integration",
  media: {
    images: [
      `${process.env.PUBLIC_URL}/images/model.png`,
      `${process.env.PUBLIC_URL}/images/DINO1.png`,
      `${process.env.PUBLIC_URL}/images/DINO2.png`,

    ],
  },
  "description": "Novel approach to integrate DINO and CLIP vision models for enhanced semantic understanding and visual recognition",
  "detailed_description": "Developed FUSE (Fine-tuned Unified Semantic Embeddings), a novel method to augment vision foundation models by integrating DINO's structural understanding with CLIP's semantic capabilities. The system features a lightweight output head that aligns DINO's representations with CLIP's text-conditioned features, improving performance across multiple computer vision tasks. Key achievements included enhanced instance retrieval with improved mAP scores, efficient depth estimation maintaining baseline performance while reducing embedding dimensionality by 33%, and demonstrations of effective cross-modal learning between vision and language models.",
  "tech": ["PyTorch", "DINO", "CLIP", "Computer Vision", "Deep Learning", "Multimodal ML"],
  "features": [
    "Designed and implemented novel autoencoder architecture for embedding alignment",
    "Achieved superior instance retrieval performance with 0.998 mAP score",
    "Maintained depth estimation accuracy while reducing embedding dimension by 33%",
    "Developed custom loss functions combining reconstruction and alignment objectives",
    "Processed and analyzed large-scale COCO dataset with 118k images",
    "Implemented efficient training pipeline on GPU infrastructure",
    "Demonstrated improved semantic understanding in visual tasks",
    
  ],
  "github": "https://github.com/aroy12345/VisionFineTuneModel.git"
}, {
  "title": "RoboRacer Autonomous Racing Car",
  media: {
    images: [
    
    ],
    demo_videos: [
      `${process.env.PUBLIC_URL}/images/Racing.mov`,
     `${process.env.PUBLIC_URL}/images/Racing2.mov`,
    
    ]
  },
  "description": "1/10th scale autonomous racing car with advanced perception, planning, and control systems",
  "detailed_description": "Designed and built a complete autonomous racing system from a stripped-down 1/10th-scale mechanical chassis capable of 40mph. Implemented comprehensive perception pipelines using LiDAR and camera sensors, advanced SLAM algorithms for mapping and localization, and sophisticated motion planning techniques including Pure Pursuit and RRT-based local planning. Developed reactive control systems with PID-tuned wall following, obstacle avoidance using Follow-the-Gap algorithms, and model predictive control for optimal racing performance. The system integrates particle filter localization, graph-based SLAM, and real-time raceline optimization for competitive autonomous racing.",
  "tech": ["C++", "Python", "ROS 2", "Computer Vision", "SLAM", "Motion Planning", "Control Systems", "Embedded Systems"],
  "features": [
    "Complete hardware integration with sensors, compute boards, and electronics",
    "Real-time LiDAR-based perception and obstacle detection",
    "Particle filter localization with sub-meter accuracy",
    "Graph-based SLAM for autonomous mapping and navigation",
    "Pure Pursuit and RRT-based motion planning algorithms",
    "PID-controlled wall following and emergency braking systems",
    "Follow-the-Gap reactive obstacle avoidance",
    "Model Predictive Control (MPC) for optimal trajectory tracking",
    "Raceline optimization for competitive lap times",
    "Machine learning-based perception for visual navigation",
    "Real-time tf2 transforms and coordinate frame management",
    "Competitive racing performance in head-to-head competitions"
  ],
  "github": "https://github.com/yourusername/roboracer-autonomous-racing"
},
{
  "title": "Mini Minecraft",
  media: {
    images: [
      `${process.env.PUBLIC_URL}/images/Minecraft.png`,
    ],
  },
  "description": "Interactive 3D world exploration and block manipulation game engine built with OpenGL",
  "detailed_description": "Developed a comprehensive Minecraft-style game engine featuring procedural terrain generation, efficient chunk-based rendering, and advanced graphics programming. Implemented sophisticated noise-based terrain generation with multiple biomes, cave systems, and fluid simulation. Created a multithreaded architecture for seamless world loading, complete with physics-based player movement, collision detection, and block manipulation mechanics. The engine features advanced OpenGL techniques including texture mapping, alpha blending, post-processing effects, and optimized rendering pipelines.",
  "tech": ["C++", "OpenGL", "GLSL", "Qt", "Multithreading", "Computer Graphics", "Procedural Generation"],
  "features": [
    "Procedural terrain generation using Perlin noise with multiple biomes",
    "Efficient chunk-based rendering system with VBO optimization",
    "Physics-based player movement with collision detection and terrain interaction",
    "3D cave system generation and fluid simulation (water/lava)",
    "Advanced texture mapping with animated fluid textures",
    "Multithreaded terrain loading for seamless world expansion",
    "Post-processing pipeline for underwater/lava overlay effects",
    "Alpha blending for transparent blocks and smooth visual transitions",
    "Block placement and destruction mechanics with raycasting",
    "Optimized rendering with interleaved VBOs and face culling"
  ],
  "github": "https://github.com/yourusername/mini-minecraft"
},
{
  "title": "PennOS",
  media: {
    images: [`${process.env.PUBLIC_URL}/images/os.png`],
  },
  "description": "Unix-like operating system with preemptive multitasking, memory management, and a custom shell",
  "short_description": "Custom Unix-like OS with preemptive multitasking, virtual memory, and a FAT32-like file system.",
  "detailed_description": "Developed PennOS, a Unix-like operating system from scratch with a focus on system-level programming concepts. PennOS includes a custom shell, process control with signals, preemptive multitasking using a priority-based scheduler, virtual memory management (paging, swapping), and a FAT32-like file system. The project involved deep understanding of low-level hardware interactions, memory allocation strategies, and concurrent process execution.",
  "tech": ["C", "Assembly", "Operating Systems", "Memory Management", "File Systems"],
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

export { education, experiences, projects, awards, skills };