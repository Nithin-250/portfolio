'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Menu, X } from 'lucide-react';

export default function Portfolio() {
  // Mobile menu & active section
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Cursor states
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [cursorHover, setCursorHover] = useState(false);

  // Cursor movement & hover detection
  useEffect(() => {
    const handleMove = (e: MouseEvent) => setCursorPos({ x: e.clientX, y: e.clientY });

    const handlePointerOver = (e: PointerEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest('a, button, input, textarea, select, [data-cursor-hover]')) setCursorHover(true);
    };

    const handlePointerOut = (e: PointerEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest('a, button, input, textarea, select, [data-cursor-hover]')) setCursorHover(false);
    };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('pointerover', handlePointerOver);
    window.addEventListener('pointerout', handlePointerOut);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('pointerover', handlePointerOver);
      window.removeEventListener('pointerout', handlePointerOut);
    };
  }, []);

  // Scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setMobileMenuOpen(false);
    }
  };

  // Projects
  const projects = [
    {
      title: "AI ANALYST - Financial Intelligence Platform",
      description:
        "Advanced AI-powered financial analysis platform with fraud detection, real-time analytics, and market intelligence designed for Indian banking systems.",
      tech: ["React", "TypeScript", "AI/ML", "Financial APIs"],
      liveUrl: "https://project-mopb.vercel.app/",
    },
    {
      title: "Weather Forecast App",
      description:
        "Real-time weather application providing current conditions, 5-day forecasts, and location-based weather data with a clean, responsive interface.",
      tech: ["React", "Weather API", "CSS3", "JavaScript"],
      liveUrl: "https://weather-pi-umber-43.vercel.app/",
    },
    {
      title: "React Talkify Application",
      description:
        "Interactive Website URL to audio Podcast convertor in an attempt to help visually impaired people.",
      tech: ["React", "JavaScript", "CSS3", "Responsive Design"],
      liveUrl: "https://rman-6.vercel.app/",
    },
  ];

  const skills = {
    programming: ["Python", "C++", "JavaScript", "TypeScript"],
    tools: ["Git", "VS Code", "React", "Next.js", "Node.js"],
    interests: ["Web Development", "Accessibility in Tech", "Game Design", "AI/ML"],
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 cursor-none transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-base sm:text-lg md:text-2xl lg:text-3xl"
          >
            Nithin S
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {['home', 'about', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-colors hover:text-blue-600 ${
                  activeSection === section ? 'text-blue-600' : ''
                }`}
              >
                {section}
              </button>
            ))}
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg transition-colors hover:bg-gray-200"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 py-4 border-t border-gray-200"
          >
            {['home', 'about', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="block w-full text-left py-2 capitalize transition-colors hover:text-blue-600"
              >
                {section}
              </button>
            ))}
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-pink-50 to-purple-100"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 relative z-10">
              Hi, I&apos;m{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                Nithin S
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-900 mb-8 max-w-3xl mx-auto">
              Computer Science Student at VIT Chennai | Passionate Full-Stack Developer | AI Enthusiast
            </p>

            <p className="text-lg text-gray-700 mb-12">
              Building innovative web solutions and exploring the intersection of technology and accessibility
              <br />
              <span className="block text-xl font-semibold text-gray-800 mt-2">
                Tagline- “Designing for Impact, Building with Purpose”
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>

            <div className="flex justify-center space-x-6">
              <a href="https://github.com/Nithin-250" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-blue-600 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/nithin-s-63a7b3321" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-blue-600 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:nithin.s2024@vitstudent.ac.in" className="text-gray-900 hover:text-blue-600 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-semibold mb-6 text-blue-600">Education & Background</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900">B.Tech Computer Science (Core)</h4>
                    <p className="text-gray-700">Vellore Institute of Technology, Chennai</p>
                    <p className="text-gray-600">Expected Graduation: 2028 | CGPA: 9.08</p>
                  </div>
                  <div className="pt-4">
                    <h4 className="font-semibold text-lg mb-2 text-gray-900">Achievements</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Top 50 rank at World Scholar&apos;s Cup Global Round, Yale University</li>
                      <li>• Active participant in multiple hackathons</li>
                      <li>• Cricket enthusiast and keyboard player</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-purple-600">Programming Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.programming.map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-purple-600">Tools & Frameworks</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((tool, index) => (
                    <span key={index} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-purple-600">Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.interests.map((int, index) => (
                    <span key={index} className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">
                      {int}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="bg-gray-50 p-6 rounded-2xl shadow-lg flex flex-col justify-between">
                <div className="mb-4">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors">
                  View Project
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Contact Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </motion.div>

          <div className="max-w-2xl mx-auto space-y-6 text-center">
            <p className="text-gray-700 text-lg">Want to work together or just say hi? Reach out!</p>
            <div className="flex justify-center gap-6 text-gray-900">
              <a href="mailto:nithin.s2024@vitstudent.ac.in" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                <Mail size={24} /> Email
              </a>
              <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                <Phone size={24} /> Phone
              </a>
              <a href="https://goo.gl/maps/xyz" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                <MapPin size={24} /> Location
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-white border-t border-gray-200 text-center text-gray-600">
        &copy; {new Date().getFullYear()} Nithin S. All rights reserved.
      </footer>

      {/* Custom Cursor */}
      <div className="fixed top-0 left-0 pointer-events-none z-[9999]">
        {cursorHover && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{
              x: cursorPos.x - 30,
              y: cursorPos.y - 30,
              opacity: 0.9,
              scale: [1, 1.2, 1],
            }}
            transition={{ repeat: Infinity, repeatType: 'loop', duration: 1.2 }}
            className="absolute rounded-full blur-md border-purple-400/50"
            style={{ width: 60, height: 60 }}
          />
        )}

        <motion.div
          animate={{
            x: cursorPos.x - (cursorHover ? 20 : 12),
            y: cursorPos.y - (cursorHover ? 20 : 12),
          }}
          transition={{ type: 'spring', stiffness: 500, damping: 35 }}
          className={`absolute rounded-full shadow-lg ${
            cursorHover ? 'w-10 h-10 bg-purple-500/85' : 'w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500'
          }`}
        />
      </div>
    </div>
  );
}
