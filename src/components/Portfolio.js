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
      <div className="relative aspect-video mb-2 rounded-lg overflow-hidden bg-gray-50">
        {currentItem.type === 'image' ? (
          <img
            src={currentItem.src}
            alt="Project preview"
            className="w-full h-full object-contain"
          />
        ) : (
          <video
            src={currentItem.src}
            controls
            muted
            className="w-full h-full object-contain"
            style={{ backgroundColor: '#000' }}
          >
            Your browser does not support the video tag.
          </video>
        )}
        
        {mediaItems.length > 1 && (
          <>
            <button
              onClick={() => setCurrentIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length)}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 bg-black/10 hover:bg-black/20 rounded-full transition-colors"
            >
              <ChevronLeftIcon className="w-4 h-4 text-white" />
            </button>
            <button
              onClick={() => setCurrentIndex((prev) => (prev + 1) % mediaItems.length)}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-black/10 hover:bg-black/20 rounded-full transition-colors"
            >
              <ChevronRightIcon className="w-4 h-4 text-white" />
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
              className={`w-1.5 h-1.5 rounded-full transition-colors ${
                idx === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              title={item.type === 'video' ? 'Video' : 'Image'}
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
        {(project.media?.images || project.media?.demo_video || project.media?.demo_videos) && (
          <div className="w-full">
            <MediaGallery media={project.media} />
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