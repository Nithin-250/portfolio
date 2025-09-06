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

  const funFacts = [
    "I can debug faster with coffee in hand ☕",
    "Once pulled an all-nighter just to finish a side project 🚀",
    "I play cricket every weekend 🏏",
    "I love playing the keyboard and composing short tunes 🎹",
    "Memes are my second language 😂",
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? 'dark' : ''
      } bg-white dark:bg-gray-900 text-gray-900 dark:text-white cursor-none`}
    >
      {/* Navigation */}
      {/* ... existing nav code stays unchanged ... */}

      {/* Hero Section */}
      {/* ... existing hero code stays unchanged ... */}

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
        {/* ... your about section code stays unchanged ... */}
      </section>

      {/* ✅ Fun Facts Section */}
      <section id="funfacts" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Fun Facts</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 mt-4">
              A few light-hearted facts about me as a college student 🎓
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {funFacts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <p className="text-gray-700 dark:text-gray-300 text-lg">{fact}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      {/* ... existing projects code stays unchanged ... */}

      {/* Contact Section */}
      {/* ... existing contact code stays unchanged ... */}

      {/* Footer */}
      {/* ... existing footer code stays unchanged ... */}

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
            className={`absolute rounded-full blur-md ${
              darkMode ? 'border-purple-500/30' : 'border-purple-400/50'
            }`}
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
            cursorHover
              ? darkMode
                ? 'w-10 h-10 bg-purple-400/85'
                : 'w-10 h-10 bg-purple-500/85'
              : 'w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500'
          }`}
        />
      </div>
    </div>
  );
}
