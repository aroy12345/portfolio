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
  GraduationCapIcon,
  ArrowLeftIcon,
  ZoomInIcon
} from 'lucide-react';

import { projects, experiences, skills, education, awards } from './arrays';

const MediaGallery = ({ media }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!media) return null;

  // Create an array that includes both images and videos
  const mediaItems = [];
  
  // Add images first
  if (media.images && media.images.length > 0) {
    media.images.forEach(image => {
      mediaItems.push({ type: 'image', src: image });
    });
  }
  
  // Add single video (backward compatibility)
  if (media.demo_video) {
    mediaItems.push({ type: 'video', src: media.demo_video });
  }
  
  // Add multiple videos
  if (media.demo_videos && media.demo_videos.length > 0) {
    media.demo_videos.forEach(video => {
      mediaItems.push({ type: 'video', src: video });
    });
  }

  if (mediaItems.length === 0) return null;

  const currentItem = mediaItems[currentIndex];

  return (
    <div className="mb-6 w-full">
      <div className="relative aspect-video mb-2 rounded-lg overflow-hidden bg-white border border-gray-200 shadow-lg">
        {currentItem.type === 'image' ? (
          <img
            src={currentItem.src}
            alt="Project preview"
            className="w-full h-full object-contain bg-white"
          />
        ) : (
          <video
            src={currentItem.src}
            controls
            muted
            className="w-full h-full video-correct-orientation"
            style={{ 
              backgroundColor: '#ffffff'
            }}
            playsInline
            preload="metadata"
          >
            Your browser does not support the video tag.
          </video>
        )}
        
        {mediaItems.length > 1 && (
          <>
            <button
              onClick={() => setCurrentIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length)}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white/90 hover:bg-white rounded-full transition-colors backdrop-blur-sm border border-gray-200 shadow-md"
            >
              <ChevronLeftIcon className="w-4 h-4 text-gray-700" />
            </button>
            <button
              onClick={() => setCurrentIndex((prev) => (prev + 1) % mediaItems.length)}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white/90 hover:bg-white rounded-full transition-colors backdrop-blur-sm border border-gray-200 shadow-md"
            >
              <ChevronRightIcon className="w-4 h-4 text-gray-700" />
            </button>
          </>
        )}
      </div>
      {mediaItems.length > 1 && (
        <div className="flex gap-2 justify-center">
          {mediaItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-colors ${
                idx === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
              }`}
              title={item.type === 'video' ? 'Video' : 'Image'}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// New Project Graph Component
const ProjectGraph = ({ projects, onProjectClick }) => {
  const [hoveredProject, setHoveredProject] = useState(null);

  // Generate positions for circles in a network-like pattern
  const generateCirclePositions = (count) => {
    const positions = [];
    const centerX = window.innerWidth / 2;  // Use full viewport width
    const centerY = 500;  // Move center down more to avoid title overlap (was 450)
    const radius = Math.min(window.innerWidth * 0.3, 350);  // Slightly smaller to prevent cutoff
    
    // Main ring
    for (let i = 0; i < Math.min(count, 8); i++) {
      const angle = (i * 2 * Math.PI) / Math.min(count, 8);
      positions.push({
        x: centerX + radius * Math.cos(angle),
        y: centerY + radius * Math.sin(angle),
        size: 120 + Math.random() * 20  // Increased size for text
      });
    }
    
    // Inner ring for remaining projects
    for (let i = 8; i < count; i++) {
      const angle = ((i - 8) * 2 * Math.PI) / (count - 8);
      const innerRadius = Math.min(window.innerWidth * 0.15, 180);  // Slightly smaller inner radius
      positions.push({
        x: centerX + innerRadius * Math.cos(angle),
        y: centerY + innerRadius * Math.sin(angle),
        size: 100 + Math.random() * 15  // Increased size for text
      });
    }
    
    return positions;
  };

  const positions = generateCirclePositions(projects.length);

  const getProjectColor = (index) => {
    const colors = [
      'from-blue-500 to-purple-600',
      'from-green-500 to-blue-500',
      'from-purple-500 to-pink-500',
      'from-orange-500 to-red-500',
      'from-teal-500 to-green-500',
      'from-indigo-500 to-purple-500',
      'from-pink-500 to-rose-500',
      'from-cyan-500 to-blue-500',
      'from-emerald-500 to-teal-500',
      'from-violet-500 to-purple-500',
      'from-amber-500 to-orange-500'
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden" style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)', paddingTop: '2rem' }}>
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-20 grid-rows-20 h-full w-full">
          {Array.from({ length: 400 }).map((_, i) => (
            <div key={i} className="border border-blue-500/10 animate-pulse" style={{ animationDelay: `${i * 0.01}s` }} />
          ))}
        </div>
      </div>

      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {positions.map((pos, i) => (
          positions.slice(i + 1).map((otherPos, j) => {
            const distance = Math.sqrt(Math.pow(pos.x - otherPos.x, 2) + Math.pow(pos.y - otherPos.y, 2));
            if (distance < Math.min(window.innerWidth * 0.35, 450)) {  // Scale connection distance with viewport
              return (
                <line
                  key={`${i}-${j}`}
                  x1={pos.x}
                  y1={pos.y}
                  x2={otherPos.x}
                  y2={otherPos.y}
                  stroke="url(#connectionGradient)"
                  strokeWidth="2"
                  opacity="0.4"
                  className="animate-pulse"
                />
              );
            }
            return null;
          })
        )).flat()}
        <defs>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
      </svg>

      {/* Title */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20">
        <h2 className="text-4xl font-bold text-gray-800 mb-2 text-center">
          Project <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Network</span>
        </h2>
        <p className="text-gray-600 text-center">Click any node to explore the project</p>
      </div>

      {/* Project circles */}
      {projects.map((project, index) => {
        const position = positions[index];
        const isHovered = hoveredProject === index;
        
        return (
          <div
            key={index}
            className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-500 hover:scale-110 ${
              isHovered ? 'z-30 scale-110' : 'z-10'
            }`}
            style={{
              left: position.x,
              top: position.y,
              width: position.size,
              height: position.size
            }}
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
            onClick={() => onProjectClick(project)}
          >
            {/* Outer glow */}
            <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${getProjectColor(index)} opacity-20 blur-md animate-pulse`} />
            
            {/* Main circle */}
            <div className={`relative w-full h-full rounded-full bg-gradient-to-r ${getProjectColor(index)} flex flex-col items-center justify-center border-2 border-white/30 shadow-2xl transition-all duration-300 hover:border-white/60 hover:shadow-3xl p-2`}>
              {/* Project name */}
              <div className="text-white font-bold text-center leading-tight drop-shadow-lg">
                <div className="text-xs mb-1 opacity-95">
                  {project.title.split(' ').slice(0, 2).join(' ')}
                </div>
                {project.title.split(' ').length > 2 && (
                  <div className="text-xs opacity-85">
                    {project.title.split(' ').slice(2).join(' ')}
                  </div>
                )}
              </div>
              
              {/* Hover overlay */}
              {isHovered && (
                <div className="absolute inset-0 bg-black/20 rounded-full flex items-center justify-center">
                  <ZoomInIcon className="w-6 h-6 text-white" />
                </div>
              )}
            </div>

            {/* Enhanced tooltip */}
            {isHovered && (
              <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 bg-white/95 text-gray-800 px-4 py-3 rounded-lg text-sm backdrop-blur-sm border border-gray-200 shadow-xl max-w-xs">
                <div className="font-semibold">{project.title}</div>
                <div className="text-xs text-gray-600 mt-1">{project.description}</div>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-white/95" />
              </div>
            )}

            {/* Animated particles */}
            <div className="absolute inset-0 pointer-events-none">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full animate-ping opacity-80"
                  style={{
                    left: `${20 + i * 30}%`,
                    top: `${20 + i * 30}%`,
                    animationDelay: `${i * 0.5}s`,
                    animationDuration: '2s'
                  }}
                />
              ))}
            </div>
          </div>
        );
      })}

      {/* Central hub */}
      <div 
        className="absolute transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center border-4 border-white/50 shadow-2xl z-20"
        style={{ left: window.innerWidth / 2, top: '500px' }}
      >
        <CodeIcon className="w-10 h-10 text-white" />
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-30 blur-lg animate-pulse" />
      </div>
    </div>
  );
};

// Detailed Project View Component
const ProjectDetailView = ({ project, onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-10 grid-rows-10 h-full w-full">
          {Array.from({ length: 100 }).map((_, i) => (
            <div key={i} className="border border-blue-500/10 animate-pulse" style={{ animationDelay: `${i * 0.02}s` }} />
          ))}
        </div>
      </div>

      {/* Back button */}
      <button
        onClick={onBack}
        className="fixed top-8 left-8 z-50 flex items-center gap-2 bg-white/80 backdrop-blur-md text-gray-800 px-4 py-2 rounded-lg hover:bg-white/90 transition-all duration-300 border border-gray-200 shadow-lg"
      >
        <ArrowLeftIcon className="w-5 h-5" />
        Back to Network
      </button>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        {/* Project header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {project.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {project.detailed_description}
          </p>
        </div>

        {/* Media Gallery */}
        {(project.media?.images || project.media?.demo_video || project.media?.demo_videos) && (
          <div className="mb-12">
            <MediaGallery media={project.media} />
          </div>
        )}

        {/* Project details grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Features */}
          <div className="bg-white/80 backdrop-blur-md rounded-xl p-6 border border-gray-200 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center">
                <ChevronRightIcon className="w-4 h-4 text-white" />
              </div>
              Key Features
            </h3>
            <ul className="space-y-3">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mt-2 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="bg-white/80 backdrop-blur-md rounded-xl p-6 border border-gray-200 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <WrenchIcon className="w-4 h-4 text-white" />
              </div>
              Technologies
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech, i) => (
                <span 
                  key={i} 
                  className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 rounded-full text-sm text-gray-800 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          {project.github && (
            <a 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-gray-800 to-gray-900 text-white px-6 py-3 rounded-lg hover:from-gray-700 hover:to-gray-800 transition-all duration-300 shadow-lg"
            >
              <GithubIcon className="w-5 h-5" />
              View Code
            </a>
          )}
          {project.media?.demo_video && (
            <a 
              href={project.media.demo_video}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-lg hover:from-red-400 hover:to-red-500 transition-all duration-300 shadow-lg"
            >
              <PlayIcon className="w-5 h-5" />
              Watch Demo
            </a>
          )}
          {project.media?.live_demo_url && (
            <a 
              href={project.media.live_demo_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg hover:from-blue-400 hover:to-purple-400 transition-all duration-300 shadow-lg"
            >
              <ExternalLinkIcon className="w-5 h-5" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isProjectDetailView, setIsProjectDetailView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsProjectDetailView(true);
  };

  const handleBackToGraph = () => {
    setIsProjectDetailView(false);
    setSelectedProject(null);
  };

  // If in project detail view, render only the project detail
  if (isProjectDetailView && selectedProject) {
    return <ProjectDetailView project={selectedProject} onBack={handleBackToGraph} />;
  }

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
        <div className="max-w-7xl mx-auto px-10">
          <div className="flex space-x-10">
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
              create innovative software solutions that have an impact on diverse domains, from healthcare and automation to finance and environmental sustainability.
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
          alt="Aryan Roy Profile" 
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
      alt="University of Pennsylvania GRASP Lab"
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
  <ProjectGraph projects={projects} onProjectClick={handleProjectClick} />
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
            <p className="text-gray-600">© 2024 Aryan Roy.</p>
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