'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
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
  ExternalLink,
} from 'lucide-react'

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev)
    document.documentElement.classList.toggle('dark')
  }

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(id)
    }
  }

  const skills = {
    programming: ['JavaScript', 'TypeScript', 'Python', 'C', 'C++'],
    tools: ['React', 'Next.js', 'Node.js', 'MongoDB', 'TailwindCSS'],
    interests: ['AI/ML', 'Web Development', 'Problem Solving'],
  }

  const projects = [
    {
      title: 'Talkify – Audio Podcast from Links',
      description:
        'Built an app that converts any article or blog into an AI-narrated podcast. Aimed at helping visually impaired readers consume content more easily.',
      tech: ['Next.js', 'TypeScript', 'OpenAI API', 'MongoDB'],
      liveUrl: 'https://github.com/Nithin-250',
    },
    {
      title: 'Fraud Detection Web App',
      description:
        'FastAPI backend + Express frontend project that flags suspicious transactions using AI-driven anomaly detection.',
      tech: ['FastAPI', 'Express', 'MongoDB', 'Python'],
      liveUrl: 'https://github.com/Nithin-250',
    },
    {
      title: 'Smart Elevator System',
      description:
        'Designed and simulated a digital system with dual lifts and optimized routing, capacity management, and LED-based visualization.',
      tech: ['Tinkercad', 'C', 'Digital Systems'],
      liveUrl: 'https://github.com/Nithin-250',
    },
  ]

  return (
    <div className="min-h-screen transition-colors duration-300 bg-white dark:bg-black text-black dark:text-white cursor-none">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 dark:bg-black/90 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-bold bg-gradient-to-r from-blue-600 to-black bg-clip-text text-transparent text-base sm:text-lg md:text-2xl lg:text-3xl"
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
              className="p-2 rounded-lg transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile menu */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
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
                className="block w-full text-left py-2 capitalize transition-colors hover:text-blue-600"
              >
                {section}
              </button>
            ))}
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white dark:bg-black"
      >
        {/* background blobs */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full blur-xl opacity-20 animate-blob" />
          <div className="absolute top-40 right-20 w-72 h-72 bg-purple-400 rounded-full blur-xl opacity-20 animate-blob animation-delay-2000" />
          <div className="absolute bottom-20 left-40 w-72 h-72 bg-pink-400 rounded-full blur-xl opacity-20 animate-blob animation-delay-4000" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6">
              Hi, I&apos;m{' '}
              <span className="bg-gradient-to-r from-blue-600 to-black bg-clip-text text-transparent">
                Nithin S
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Computer Science Student at VIT Chennai | Passionate Full-Stack
              Developer | AI Enthusiast
            </p>
            <p className="text-lg mb-12">
              Building innovative web solutions and exploring the intersection
              of technology and accessibility
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
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-black p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-6">Education</h3>
              <ul className="space-y-2">
                <li>B.Tech CS @ VIT Chennai (2028)</li>
                <li>World Scholar’s Cup @ Yale – Top 50</li>
                <li>Hackathon participant | Cricket | Keyboard</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white dark:bg-black p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Programming</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.programming.map((s, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white dark:bg-black p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((s, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white dark:bg-black p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.interests.map((s, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fun Facts Section */}
      <section id="funfacts" className="py-20 bg-white dark:bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold">Fun Facts</h2>
            <p>A few fun things about me beyond coding:</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {['Music Lover', 'Cricket Enthusiast', 'Puzzle Solver'].map(
              (fact, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-black p-6 rounded-2xl shadow-lg text-center"
                >
                  <h3 className="font-semibold">{fact}</h3>
                </motion.div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white dark:bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
            <p className="text-xl">
              Here are some of my recent works showcasing skills in web
              development.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-black rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2"
              >
                <div className="h-48 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-400" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{p.title}</h3>
                  <p className="mb-4 line-clamp-3">{p.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.tech.map((t, j) => (
                      <span
                        key={j}
                        className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-blue-600 dark:text-blue-400"
                  >
                    <span>View Live</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold">Get In Touch</h2>
            <p className="text-xl">
              Always open to new opportunities, projects, or a chat on tech.
            </p>
          </motion.div>

          <form className="bg-white dark:bg-black p-8 rounded-2xl shadow-lg space-y-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-black rounded"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-black rounded"
            />
            <textarea
              rows={5}
              placeholder="Message"
              className="w-full p-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-black rounded"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg"
            >
              Send
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 Nithin S | Built with Next.js + TailwindCSS</p>
        </div>
      </footer>
    </div>
  )
}
