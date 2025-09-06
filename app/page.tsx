'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, MapPin, Sun, Moon, Menu, X, ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

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

  // 🔹 Custom Cursor Logic
  useEffect(() => {
    const cursor = document.getElementById("cursor");

    const moveCursor = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.left = e.pageX + "px";
        cursor.style.top = e.pageY + "px";
      }
    };

    const addActive = () => cursor?.classList.add("active");
    const removeActive = () => cursor?.classList.remove("active");

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mousedown", addActive);
    document.addEventListener("mouseup", removeActive);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mousedown", addActive);
      document.removeEventListener("mouseup", removeActive);
    };
  }, []);

  const projects = [
    {
      title: "AI ANALYST - Financial Intelligence Platform",
      description: "Advanced AI-powered financial analysis platform with fraud detection, real-time analytics, and market intelligence designed for Indian banking systems.",
      tech: ["React", "TypeScript", "AI/ML", "Financial APIs"],
      liveUrl: "https://project-mopb.vercel.app/",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Weather Forecast App",
      description: "Real-time weather application providing current conditions, 5-day forecasts, and location-based weather data with a clean, responsive interface.",
      tech: ["React", "Weather API", "CSS3", "JavaScript"],
      liveUrl: "https://weather-pi-umber-43.vercel.app/",
      image: "/api/placeholder/400/250"
    },
    {
      title: "React Portfolio Application",
      description: "Interactive React application showcasing modern web development practices with responsive design and smooth user interactions.",
      tech: ["React", "JavaScript", "CSS3", "Responsive Design"],
      liveUrl: "https://rman-6.vercel.app/",
      image: "/api/placeholder/400/250"
    }
  ];

  const skills = {
    programming: ["Python", "C++", "JavaScript", "TypeScript"],
    tools: ["Git", "VS Code", "React", "Next.js", "Node.js"],
    interests: ["Web Development", "Accessibility in Tech", "Game Design", "AI/ML"]
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''} bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}>
      {/* 🔹 Custom Cursor */}
      <div id="cursor"></div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Nithin S
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['home', 'about', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
                    activeSection === section ? 'text-blue-600 dark:text-blue-400' : ''
                  }`}
                >
                  {section}
                </button>
              ))}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile Navigation Toggle */}
            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
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
                  className="block w-full text-left py-2 capitalize transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {section}
                </button>
              ))}
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-40 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                Nithin S
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
              🚀 Building <span className="font-semibold">impactful digital experiences</span> with code & creativity.
            </p>

            <p className="text-lg text-gray-500 dark:text-gray-400 mb-12">
              Full-Stack Developer | AI Enthusiast | Passionate about accessibility in tech
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
                className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 rounded-full hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>

            <div className="flex justify-center space-x-6">
              <a href="https://github.com/Nithin-250" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/nithin-s-63a7b3321" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:nithin.s2024@vitstudent.ac.in" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About, Projects, Contact, Footer remain same... */}
    </div>
  );
}
