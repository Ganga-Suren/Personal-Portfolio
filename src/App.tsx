import React, { useState, useEffect } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ChevronDown,
  ExternalLink,
  Download,
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = [
        'hero',
        'about',
        'experience',
        'education',
        'projects',
        'skills',
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const bounds = element.getBoundingClientRect();
          return bounds.top <= 50 && bounds.bottom >= 50;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolling ? 'bg-gray-900/90 backdrop-blur-md' : ''
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">Ganga Surendra Basva</div>
            <div className="flex items-center">
              <div className="hidden md:flex space-x-8 mr-8">
                {['About', 'Experience', 'Education', 'Projects', 'Skills'].map(
                  (item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className={`hover:text-blue-400 transition-colors ${
                        activeSection === item.toLowerCase()
                          ? 'text-blue-400'
                          : ''
                      }`}
                    >
                      {item}
                    </button>
                  )
                )}
              </div>
              <a
                href="https://drive.google.com/uc?export=download&id=11oI13BzXJ-Tsk71YfeouOXLJer9Uw4kz"
                target="_blank"
                download
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
              >
                <Download size={18} />
                <span>Resume</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center pt-20"
      >
        <div className="container mx-auto px-6 py-8 text-center">
          <h1 className="text-6xl font-bold mb-6">
            Hi, I'm Ganga Surendra Basva
          </h1>
          <p className="text-xl text-gray-300 mb-12">
            Data Scientist | Full Stack Developer
          </p>
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="mailto:basvag34@students.rowan.edu"
              className="hover:text-blue-400 transition-colors"
            >
              <Mail size={24} />
            </a>
            <a
              href="tel:8565267286"
              className="hover:text-blue-400 transition-colors"
            >
              <Phone size={24} />
            </a>
            <a
              href="https://linkedin.com/in/ganga-surendra-basva-14239317a"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/Ganga-Suren"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <Github size={24} />
            </a>
          </div>
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce inline-flex items-center"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-[60vh] flex items-center justify-center"
      >
        <div className="container mx-auto px-6 py-8">
          <h2 className="text-4xl font-bold mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-gray-300">
                I am a passionate Data Scientist with expertise in full-stack
                development. My journey in technology has equipped me with
                strong problem-solving skills and a deep understanding of
                software development principles.
              </p>
              <p className="text-lg text-gray-300">
                Currently pursuing my Master's in Data Science at Rowan
                University, I bring hands-on experience in developing scalable
                applications and implementing innovative solutions.
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Quick Facts</h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <span className="text-blue-400">•</span>
                  <span>Master's in Data Science</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-blue-400">•</span>
                  <span>Full Stack Development</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-blue-400">•</span>
                  <span>Problem Solving</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-blue-400">•</span>
                  <span>Team Collaboration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="min-h-[60vh] flex items-center justify-center"
      >
        <div className="container mx-auto px-6 py-8">
          <h2 className="text-4xl font-bold mb-12">Experience</h2>
          <div className="space-y-8">
            <div className="bg-gray-800/50 rounded-lg p-8 hover:bg-gray-800 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold">Full Stack Developer</h3>
                  <p className="text-blue-400">Tata Elxsi</p>
                </div>
                <div className="text-right text-gray-400">
                  <p>2021 - 2023</p>
                  <p>Bangalore, India</p>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Developed and maintained scalable web applications</li>
                <li>Collaborated with cross-functional teams</li>
                <li>Implemented new features and optimized performance</li>
                <li>
                  Worked with modern JavaScript frameworks and tools like
                  Angular
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className="min-h-[90vh] flex items-center justify-center"
      >
        <div className="container mx-auto px-6 py-8">
          <h2 className="text-4xl font-bold mb-12">Education</h2>
          <div className="space-y-8">
            <div className="bg-gray-800/50 rounded-lg p-8 hover:bg-gray-800 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold">
                    Primary & Secondary Education
                  </h3>
                  <p className="text-blue-400">Kumar Convent School</p>
                </div>
                <div className="text-right text-gray-400">
                  <p>2005 - 2015</p>
                  <p>Chitrada, Andhra Pradesh, India</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-8 hover:bg-gray-800 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold">
                    Bachelor of Technology in Computer Science
                  </h3>
                  <p className="text-blue-400">Bharath University</p>
                  <a
                    href="https://www.bharathuniv.ac.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    <ExternalLink size={24} />
                  </a>
                </div>
                <div className="text-right text-gray-400">
                  <p>2017 - 2021</p>
                  <p>Tambaram, India</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-8 hover:bg-gray-800 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold">
                    Master's in Data Science
                  </h3>
                  <p className="text-blue-400">Rowan University</p>
                  <a
                    href="https://www.rowan.edu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    <ExternalLink size={24} />
                  </a>
                </div>
                <div className="text-right text-gray-400">
                  <p>2023 - 2025</p>
                  <p>New Jersey, USA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-[100vh] flex items-center justify-center"
      >
        <div className="container mx-auto px-6 py-8">
          <h2 className="text-4xl font-bold mb-12">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 rounded-lg p-8 hover:bg-gray-800 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold">
                    Early Prediction of Alzhiemer's Disease using Deep Learning
                  </h3>
                  <p className="text-blue-400">Deep Learning</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Built a Convolutional Neural Network (CNN) model using Python,
                TensorFlow,and Keras to analyze medical imaging data for early
                signs of Alzheimer's. Processed and analyzed 1000+ patient scans
                to train the model.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-400">
                  Machine Learning
                </span>
                <span className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-400">
                  Node.js
                </span>
                <span className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-400">
                  Excel
                </span>
                <span className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-400">
                  CNN
                </span>
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-8 hover:bg-gray-800 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold">
                    Alcohol Detector in vehicle using IOT
                  </h3>
                  <p className="text-blue-400">IOT</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Integrated MQ-3 alcohol sensors with a microcontroller and
                designed a real-time detection system that blocked vehicle
                ignition when alcohol levels exceeded safe limits.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-400">
                  Arduino
                </span>
                <span className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-400">
                  C++
                </span>
                <span className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-400">
                  IoT Sensors
                </span>
                <span className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-400">
                  Embedded Systems
                </span>
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-8 hover:bg-gray-800 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold">VAST Challenge MC3</h3>
                  <p className="text-blue-400">Data Science</p>
                </div>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300"
                >
                  <ExternalLink size={24} />
                </a>
              </div>
              <p className="text-gray-300 mb-4">
                Handled large-scale datasets (over 10 GB), using Tableau, D3.js,
                and Graph Neural Networks to identify key patterns in the data.
                Created interactive dashboards and presentations that enabled
                users to explore complex data relationships, leading to
                actionable insights.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-400">
                  Python
                </span>
                <span className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-400">
                  Graph Neural Nets
                </span>
                <span className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-400">
                  Tableau
                </span>
                <span className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-400">
                  D3.js
                </span>
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-8 hover:bg-gray-800 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold">
                    NFL Running Back Performance Prediction
                  </h3>
                  <p className="text-blue-400">Data Science</p>
                </div>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300"
                >
                  <ExternalLink size={24} />
                </a>
              </div>
              <p className="text-gray-300 mb-4">
                Analyzed NFL running back performance using datasets from PFF
                and NFL websites, comprising 40 variables. Built predictive
                models in RapidMiner, including Random Forest and Linear
                Regression, to forecast player performance. Visualized insights
                to identify key performance drivers, improving team strategies
                and fantasy predictions.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-400">
                  Rapid Miner
                </span>
                <span className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-400">
                  Open Refine
                </span>
                <span className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-400">
                  Excel
                </span>
                <span className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-400">
                  HTML
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="min-h-[80vh] flex items-center justify-center"
      >
        <div className="container mx-auto px-6 py-8">
          <h2 className="text-4xl font-bold mb-12">Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 rounded-lg p-8 hover:bg-gray-800 transition-colors">
              <h3 className="text-2xl font-bold mb-6">Frontend</h3>
              <ul className="space-y-3">
                <li>Node.js</li>
                <li>JavaScript/TypeScript</li>
                <li>HTML/CSS</li>
              </ul>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-8 hover:bg-gray-800 transition-colors">
              <h3 className="text-2xl font-bold mb-6">Backend</h3>
              <ul className="space-y-3">
                <li>Python</li>
                <li>Java</li>
                <li>C#</li>
                <li>MYSQL</li>
              </ul>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-8 hover:bg-gray-800 transition-colors">
              <h3 className="text-2xl font-bold mb-6">Tools & Others</h3>
              <ul className="space-y-3">
                <li>Git</li>
                <li>Angular</li>
                <li>Tableau</li>
                <li>MS Office</li>
                <li>Rapid Miner</li>
                <li>VS Code</li>
                <li>IOT</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-gray-400 py-6 mt-12">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Ganga Surendra Basva. All rights
            reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="mailto:basvag34@students.rowan.edu"
              className="hover:text-blue-400 transition-colors"
            >
              <Mail size={20} />
            </a>
            <a
              href="tel:8565267286"
              className="hover:text-blue-400 transition-colors"
            >
              <Phone size={20} />
            </a>
            <a
              href="https://linkedin.com/in/ganga-surendra-basva-14239317a"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/Ganga-Suren"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
