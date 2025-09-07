'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Sun,
  Moon,
  Menu,
  X,
  ExternalLink
} from 'lucide-react';

export default function Portfolio() {
  // Default light mode
  const [darkMode, setDarkMode] = useState<boolean>(false);

  // Mobile menu & active section
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Cursor states
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [cursorHover, setCursorHover] = useState(false);

  // Initialize theme on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
        setDarkMode(true);
      } else {
        document.documentElement.classList.remove('dark');
        setDarkMode(false);
      }
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    if (typeof window !== 'undefined') {
      const html = document.documentElement;
      if (darkMode) {
        html.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        setDarkMode(false);
      } else {
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        setDarkMode(true);
      }
    }
  };

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
  <div className="min-h-screen transition-colors duration-300 cursor-none bg-white dark:bg-black text-black dark:text-white">
    {/* Navigation */}
    <nav className="fixed top-0 w-full bg-white dark:bg-black backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-bold text-base sm:text-lg md:text-2xl lg:text-3xl"
        >
          Nithin S
        </motion.div>

        {/* Desktop menu */}
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

          {/* Dark mode toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-4 py-4 border-t border-gray-200 dark:border-gray-700"
        >
          {['home', 'about', 'projects', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="block w-full text-left py-2 capitalize hover:text-blue-600"
            >
              {section}
            </button>
          ))}
        </motion.div>
      )}
    </nav>

    {/* Hero Section */}
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6">
            Hi, I&apos;m <span className="text-blue-600">Nithin S</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Computer Science Student at VIT Chennai | Passionate Full-Stack Developer | AI Enthusiast
          </p>
          <p className="text-lg mb-12">
            Building innovative web solutions and exploring the intersection of technology and accessibility
            <br />
            <span className="block text-xl font-semibold mt-2">
              Tagline – “Designing for Impact, Building with Purpose”
            </span>
          </p>
        </motion.div>
      </div>
    </section>

    {/* About Section */}
    <section id="about" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-6">
        <motion.div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>
        {/* skills etc here with text-black dark:text-white */}
      </div>
    </section>

    {/* Fun Facts Section */}
    <section id="funfacts" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-6">
        <motion.div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Fun Facts</h2>
          <p className="text-xl">A few fun things about me beyond coding:</p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Music Lover", text: "I play keyboard and enjoy composing tunes in my free time." },
            { title: "Cricket Enthusiast", text: "I love playing cricket and follow international matches closely." },
            { title: "Puzzle Solver", text: "I enjoy solving brain teasers and competitive coding challenges." }
          ].map((fact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-black p-6 rounded-2xl shadow-lg text-center"
            >
              <h3 className="text-xl font-semibold mb-2">{fact.title}</h3>
              <p className="text-base">{fact.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Projects */}
    <section id="projects" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-6">
        <motion.div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
          <p className="text-xl">Here are some of my recent projects...</p>
        </motion.div>

        {/* Project cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-black rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="h-48 bg-gradient-to-br from-blue-400 via-purple-500 to-teal-400" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Live
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Contact */}
    <section id="contact" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-6">
        <motion.div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">Get In Touch</h2>
          <p className="text-xl">I&apos;m always open to discussing opportunities...</p>
        </motion.div>
        {/* Contact form */}
      </div>
    </section>

    {/* Footer */}
    <footer className="bg-white dark:bg-black text-center py-12">
      <p>&copy; 2024 Nithin S. All rights reserved.</p>
    </footer>
  </div>
);

}   
