'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, MapPin, Sun, Moon, Menu, X, ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Cursor states
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [cursorHover, setCursorHover] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Cursor event handlers
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const handlePointerOver = (e: PointerEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      if (target.closest('a, button, input, textarea, select, [data-cursor-hover]')) {
        setCursorHover(true);
      }
    };

    const handlePointerOut = (e: PointerEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      if (target.closest('a, button, input, textarea, select, [data-cursor-hover]')) {
        setCursorHover(false);
      }
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

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setMobileMenuOpen(false);
    }
  };

  const projects = [
    {
      title: "AI ANALYST - Financial Intelligence Platform",
      description:
        "Advanced AI-powered financial analysis platform with fraud detection, real-time analytics, and market intelligence designed for Indian banking systems.",
      tech: ["React", "TypeScript", "AI/ML", "Financial APIs"],
      liveUrl: "https://project-mopb.vercel.app/",
      image: "/api/placeholder/400/250",
    },
    {
      title: "Weather Forecast App",
      description:
        "Real-time weather application providing current conditions, 5-day forecasts, and location-based weather data with a clean, responsive interface.",
      tech: ["React", "Weather API", "CSS3", "JavaScript"],
      liveUrl: "https://weather-pi-umber-43.vercel.app/",
      image: "/api/placeholder/400/250",
    },
    {
      title: "React Talkify Application",
      description:
        "Interactive Website URL to audio Podcast convertor in an attempt to help visually impaired people.",
      tech: ["React", "JavaScript", "CSS3", "Responsive Design"],
      liveUrl: "https://rman-6.vercel.app/",
      image: "/api/placeholder/400/250",
    },
  ];

  const skills = {
    programming: ["Python", "C++", "JavaScript", "TypeScript"],
    tools: ["Git", "VS Code", "React", "Next.js", "Node.js"],
    interests: ["Web Development", "Accessibility in Tech", "Game Design", "AI/ML"],
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? 'dark' : ''
      } bg-white dark:bg-gray-900 text-gray-900 dark:text-white cursor-none`}
    >
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold cursor-pointer" onClick={() => scrollToSection('home')}>
            Portfolio
          </h1>
          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-colors ${
                  activeSection === section
                    ? 'text-blue-600 dark:text-blue-400 font-semibold'
                    : 'hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {section}
              </button>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 px-6 py-4 space-y-4">
            {['home', 'about', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`block w-full text-left capitalize transition-colors ${
                  activeSection === section
                    ? 'text-blue-600 dark:text-blue-400 font-semibold'
                    : 'hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center items-center text-center px-6"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold mb-6"
        >
          Hi, I&apos;m <span className="text-blue-600">Nithin</span>
        </motion.h2>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          Computer Science Student at VIT Chennai | Passionate Full-Stack Developer | AI Enthusiast
        </p>
        <p className="text-lg text-gray-500 dark:text-gray-400 mb-12">
          Building innovative web solutions and exploring the intersection of technology and accessibility
          <br />
          <span className="block text-xl font-semibold text-gray-700 dark:text-gray-300 mt-2">
            “Designing for Impact, Building with Purpose”
          </span>
        </p>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Education */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
                Education
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                B.Tech Computer Science (Core) at VIT Chennai
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Batch of 2028 | Completed schooling at SBOA
              </p>
            </motion.div>

            {/* Right: Skills + Fun Facts */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Skills */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {Object.entries(skills).map(([category, items]) => (
                  <div
                    key={category}
                    className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg"
                  >
                    <h3 className="text-xl font-semibold mb-4 capitalize text-purple-600 dark:text-purple-400">
                      {category}
                    </h3>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      {items.map((item) => (
                        <li key={item} className="flex items-center space-x-2">
                          <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Fun Facts */}
              <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-pink-600 dark:text-pink-400">Fun Facts</h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                  <li>I can debug code faster with music playing 🎶</li>
                  <li>Known as the &quot;tech support&quot; among my college friends 😅</li>
                  <li>Love late-night coding sessions with coffee ☕</li>
                  <li>Cricket fanatic 🏏 and occasional campus guitarist 🎸</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-xl mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-800 text-purple-600 dark:text-purple-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View Project <ExternalLink size={16} className="ml-1" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Contact Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </motion.div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <a href="mailto:nithin@example.com" className="flex items-center space-x-3 hover:text-blue-600">
              <Mail size={24} /> <span>Email</span>
            </a>
            <a href="tel:+919876543210" className="flex items-center space-x-3 hover:text-blue-600">
              <Phone size={24} /> <span>Phone</span>
            </a>
            <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 hover:text-blue-600">
              <Linkedin size={24} /> <span>LinkedIn</span>
            </a>
            <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 hover:text-blue-600">
              <Github size={24} /> <span>GitHub</span>
            </a>
            <span className="flex items-center space-x-3">
              <MapPin size={24} /> <span>Chennai, India</span>
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center bg-white dark:bg-gray-900">
        <p className="text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Nithin. All rights reserved.
        </p>
      </footer>

      {/* Custom Cursor */}
      <div className="fixed top-0 left-0 pointer-events-none z-[9999]">
        {/* Glow Ring */}
        {cursorHover && (
          <motion.div
            className="absolute rounded-full border-2 border-purple-400/60 blur-md"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              x: cursorPos.x - 30,
              y: cursorPos.y - 30,
              opacity: 1,
              scale: [1, 1.2, 1],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1.5,
            }}
            style={{ width: 60, height: 60 }}
          />
        )}

        {/* Main Cursor */}
        <motion.div
          className={`absolute rounded-full mix-blend-difference ${
            cursorHover
              ? "w-10 h-10 bg-purple-500/70"
              : "w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500"
          }`}
          animate={{
            x: cursorPos.x - (cursorHover ? 20 : 12),
            y: cursorPos.y - (cursorHover ? 20 : 12),
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        />
      </div>
    </div>
  );
}
