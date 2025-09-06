'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, MapPin, Sun, Moon, Menu, X, ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Cursor states
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
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

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const addHover = () => setCursorHover(true);
    const removeHover = () => setCursorHover(false);

    window.addEventListener('mousemove', moveCursor);

    const interactiveElements = document.querySelectorAll('a, button');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', addHover);
      el.addEventListener('mouseleave', removeHover);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', addHover);
        el.removeEventListener('mouseleave', removeHover);
      });
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
      title: "React Talkify Application",
      description: "Interactive Website URL to audio Podcast convertor in an attempt to help visually impaired people.",
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
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''} bg-white dark:bg-gray-900 text-gray-900 dark:text-white cursor-none`}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
        {/* ... your existing nav code ... */}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* ... your existing hero code ... */}
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
        {/* ... your existing about code ... */}
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        {/* ... your existing projects code ... */}
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
        {/* ... your existing contact code ... */}
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        {/* ... your existing footer code ... */}
      </footer>

      {/* Custom Cursor */}
      <div className="fixed top-0 left-0 pointer-events-none z-[9999]">
        {/* Glow Ring on hover */}
        {cursorHover && (
          <motion.div
            className="absolute rounded-full border-2 border-purple-400/60 blur-md"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              x: cursorPos.x - 30,
              y: cursorPos.y - 30,
              opacity: 1,
              scale: [1, 1.2, 1], // pulsing effect
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
