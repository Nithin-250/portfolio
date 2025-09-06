'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, MapPin, Sun, Moon, Menu, X, ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [cursorHover, setCursorHover] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) setDarkMode(savedTheme === 'dark');
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    if (darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [darkMode]);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => setCursorPos({ x: e.clientX, y: e.clientY });
    const handlePointerOver = (e: PointerEvent) => {
      if ((e.target as HTMLElement)?.closest('a, button, input, textarea, select, [data-cursor-hover]')) setCursorHover(true);
    };
    const handlePointerOut = (e: PointerEvent) => {
      if ((e.target as HTMLElement)?.closest('a, button, input, textarea, select, [data-cursor-hover]')) setCursorHover(false);
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

  const toggleDarkMode = () => setDarkMode(!darkMode);

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
    },
    {
      title: "Weather Forecast App",
      description: "Real-time weather application providing current conditions, 5-day forecasts, and location-based weather data with a clean, responsive interface.",
      tech: ["React", "Weather API", "CSS3", "JavaScript"],
      liveUrl: "https://weather-pi-umber-43.vercel.app/",
    },
    {
      title: "React Talkify Application",
      description: "Interactive Website URL to audio Podcast convertor to help visually impaired people.",
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
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''} bg-white dark:bg-gray-900 text-gray-900 dark:text-white cursor-none`}>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Nithin S
          </motion.div>
          <div className="hidden md:flex items-center space-x-8">
            {['home', 'about', 'projects', 'contact'].map((section) => (
              <button key={section} onClick={() => scrollToSection(section)} className={`capitalize transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${activeSection === section ? 'text-blue-600 dark:text-blue-400' : ''}`}>
                {section}
              </button>
            ))}
            <button onClick={toggleDarkMode} className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
          <div className="md:hidden flex items-center space-x-4">
            <button onClick={toggleDarkMode} className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="md:hidden mt-4 py-4 border-t border-gray-200 dark:border-gray-700">
            {['home', 'about', 'projects', 'contact'].map((section) => (
              <button key={section} onClick={() => scrollToSection(section)} className="block w-full text-left py-2 capitalize transition-colors hover:text-blue-600 dark:hover:text-blue-400">
                {section}
              </button>
            ))}
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-pink-50 to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
          <div className="absolute top-40 right-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
          <div className="absolute bottom-20 left-40 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I&apos;m <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">Nithin S</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">Computer Science Student at VIT Chennai | Full-Stack Developer | AI Enthusiast</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button onClick={() => scrollToSection('projects')} className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">View My Work</button>
              <button onClick={() => scrollToSection('contact')} className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 rounded-full hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-300">Get In Touch</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6">I&apos;m a B.Tech CSE student at VIT Chennai with a passion for building innovative web apps, exploring AI/ML, and creating solutions that make a difference. I enjoy designing projects that are both visually appealing and highly functional.</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Programming</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.programming.map((skill) => <span key={skill} className="px-3 py-1 bg-gradient-to-r from-blue-400 to-purple-400 text-white rounded-full text-sm">{skill}</span>)}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Tools & Interests</h3>
                  <div className="flex flex-wrap gap-2">
                    {[...skills.tools, ...skills.interests].map((skill) => <span key={skill} className="px-3 py-1 bg-gradient-to-r from-pink-400 to-purple-500 text-white rounded-full text-sm">{skill}</span>)}
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <img src="/api/placeholder/400/400" alt="About Me" className="rounded-xl shadow-xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-r from-purple-50 via-pink-50 to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div key={project.title} whileHover={{ scale: 1.05 }} className="bg-gradient-to-tr from-blue-400 via-purple-400 to-pink-400 text-white rounded-xl shadow-xl p-6 flex flex-col justify-between">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => <span key={tech} className="bg-white/20 px-2 py-1 rounded-full text-xs">{tech}</span>)}
                </div>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="mt-auto inline-block bg-white text-blue-600 font-semibold px-4 py-2 rounded-full hover:bg-blue-600 hover:text-white transition-all">Live Demo</a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-yellow-50 via-pink-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Contact Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-600 to-pink-600 mx-auto"></div>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <form className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl flex flex-col gap-4">
                <input type="text" placeholder="Your Name" className="p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white" />
                <input type="email" placeholder="Your Email" className="p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white" />
                <textarea placeholder="Your Message" rows={4} className="p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"></textarea>
                <button type="submit" className="bg-gradient-to-r from-yellow-500 to-pink-500 text-white font-bold py-3 rounded-full hover:from-yellow-600 hover:to-pink-600 transition-all">Send Message</button>
              </form>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="space-y-6 text-left">
              <div className="flex items-center gap-4">
                <MapPin size={24} />
                <span>Chennai, India</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail size={24} />
                <span>nithin.s2024@vitstudent.ac.in</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone size={24} />
                <span>+91 12345 67890</span>
              </div>
              <div className="flex items-center gap-4">
                <Github size={24} />
                <Linkedin size={24} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center">
        <p>&copy; {new Date().getFullYear()} Nithin S. All rights reserved.</p>
      </footer>
    </div>
  );
}
