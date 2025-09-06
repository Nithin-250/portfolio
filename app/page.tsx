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
      {/* ... your nav code unchanged ... */}

      {/* Hero Section */}
      {/* ... your hero section unchanged ... */}

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Education */}
            {/* ... your education card unchanged ... */}

            {/* Right: Skills */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="space-y-6">
              {/* Skills Cards (Programming, Tools, Interests) */}
              {/* ... your skills cards unchanged ... */}

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
      {/* ... your full projects code unchanged ... */}

      {/* Contact Section */}
      {/* ... your full contact code unchanged ... */}

      {/* Footer */}
      {/* ... your footer code unchanged ... */}

      {/* Custom Cursor */}
      {/* ... your cursor code unchanged ... */}
    </div>
  );
}
