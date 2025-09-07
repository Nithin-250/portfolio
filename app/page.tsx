'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Github,
  Linkedin,
  Mail,
  Phone,  
  MapPin,
  Menu,
  X,
  ExternalLink
} from 'lucide-react';

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
  <div className="min-h-screen transition-colors duration-300 cursor-none">
    {/* Navigation */}
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Responsive "Hi, I’m Nithin S" */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-base sm:text-lg md:text-2xl lg:text-3xl"
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
        </div>

        {/* Mobile menu */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg transition-colors hover:bg-gray-200"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
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
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 relative z-10">
           Hi, I&apos;m{' '}
           <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
           Nithin S
           </span>
           </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Computer Science Student at VIT Chennai | Passionate Full-Stack Developer | AI Enthusiast
          </p>
          <p className="text-lg text-gray-500 mb-12">
            Building innovative web solutions and exploring the intersection of technology and accessibility
            <br />
            <span className="block text-xl font-semibold text-gray-700 mt-2">
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
            <a href="https://github.com/Nithin-250" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/nithin-s-63a7b3321" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:nithin.s2024@vitstudent.ac.in" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>

    {/* About Section */}
    {/* ...rest of your code stays identical, no dark mode toggle removed only */}
    
    {/* Custom Cursor (fixed, pointer-events-none so it doesn't block interaction) */}
    <div className="fixed top-0 left-0 pointer-events-none z-[9999]">
      {/* Glow ring (pulsing) shown only when hovering interactive elements */}
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

      {/* Main cursor dot */}
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
