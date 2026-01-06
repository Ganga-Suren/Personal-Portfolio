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
import portrait from '../docs/assets/portrait.png';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 50);

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
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundSize: '110px 140px',
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='110' height='140' viewBox='0 0 110 140'%3E%3Cstyle%3Etext{font-family:monospace;font-size:12px;}%3C/style%3E%3Cg fill='%2322c55e'%3E%3Ctext x='4' y='8' fill-opacity='0.14'%3E1%3C/text%3E%3Ctext x='16' y='18' fill-opacity='0.12'%3E0%3C/text%3E%3Ctext x='30' y='6' fill-opacity='0.15'%3E1%3C/text%3E%3Ctext x='44' y='20' fill-opacity='0.11'%3E0%3C/text%3E%3Ctext x='58' y='10' fill-opacity='0.13'%3E1%3C/text%3E%3Ctext x='72' y='4' fill-opacity='0.12'%3E0%3C/text%3E%3Ctext x='86' y='18' fill-opacity='0.14'%3E1%3C/text%3E%3Ctext x='98' y='10' fill-opacity='0.12'%3E0%3C/text%3E%3Ctext x='8' y='36' fill-opacity='0.14'%3E1%3C/text%3E%3Ctext x='22' y='30' fill-opacity='0.13'%3E0%3C/text%3E%3Ctext x='36' y='42' fill-opacity='0.11'%3E1%3C/text%3E%3Ctext x='50' y='32' fill-opacity='0.14'%3E0%3C/text%3E%3Ctext x='64' y='46' fill-opacity='0.12'%3E1%3C/text%3E%3Ctext x='78' y='34' fill-opacity='0.13'%3E0%3C/text%3E%3Ctext x='92' y='48' fill-opacity='0.11'%3E1%3C/text%3E%3Ctext x='6' y='64' fill-opacity='0.13'%3E0%3C/text%3E%3Ctext x='20' y='56' fill-opacity='0.14'%3E1%3C/text%3E%3Ctext x='34' y='70' fill-opacity='0.12'%3E0%3C/text%3E%3Ctext x='48' y='60' fill-opacity='0.14'%3E1%3C/text%3E%3Ctext x='62' y='74' fill-opacity='0.13'%3E0%3C/text%3E%3Ctext x='76' y='62' fill-opacity='0.14'%3E1%3C/text%3E%3Ctext x='90' y='76' fill-opacity='0.12'%3E0%3C/text%3E%3Ctext x='4' y='92' fill-opacity='0.14'%3E1%3C/text%3E%3Ctext x='18' y='84' fill-opacity='0.13'%3E0%3C/text%3E%3Ctext x='32' y='98' fill-opacity='0.15'%3E1%3C/text%3E%3Ctext x='46' y='86' fill-opacity='0.13'%3E0%3C/text%3E%3Ctext x='60' y='100' fill-opacity='0.14'%3E1%3C/text%3E%3Ctext x='74' y='90' fill-opacity='0.12'%3E0%3C/text%3E%3Ctext x='88' y='104' fill-opacity='0.15'%3E1%3C/text%3E%3Ctext x='8' y='120' fill-opacity='0.14'%3E0%3C/text%3E%3Ctext x='22' y='112' fill-opacity='0.13'%3E1%3C/text%3E%3Ctext x='36' y='126' fill-opacity='0.15'%3E0%3C/text%3E%3Ctext x='50' y='116' fill-opacity='0.14'%3E1%3C/text%3E%3Ctext x='64' y='130' fill-opacity='0.12'%3E0%3C/text%3E%3Ctext x='78' y='118' fill-opacity='0.15'%3E1%3C/text%3E%3Ctext x='92' y='132' fill-opacity='0.13'%3E0%3C/text%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />
      <div className="relative z-10">
        {/* Navigation */}
        <nav
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 shadow-sm ${
            isScrolling
              ? 'bg-gray-950/90 backdrop-blur-md'
              : 'bg-gray-900/85 backdrop-blur-md'
          } border-b border-white/10`}
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
                  href="/docs/assets/Ganga_Surendra_Basva_Resume.pdf"
                  target="_blank"
                  download
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md transition-colors shadow-md"
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
          <div className="relative flex justify-center mb-10">
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-96 h-96 rounded-full blur-3xl opacity-80 animate-[pulse_6s_ease-in-out_infinite]"
                style={{
                  background:
                    'radial-gradient(circle at 30% 30%, rgba(56,189,248,0.35), transparent 50%), radial-gradient(circle at 70% 70%, rgba(167,139,250,0.35), transparent 50%)',
                }}
              />
            </div>
            <img
              src={portrait}
              alt="Portrait of Ganga Surendra Basva"
              className="relative w-60 h-60 rounded-full object-cover border-4 border-gray-800 shadow-xl"
            />
          </div>
          <h1 className="text-6xl font-bold mb-6">
            Hi, I'm Ganga Surendra Basva
          </h1>
          <p className="text-xl text-gray-300 mb-12">
            Full Stack Developer | Data Engineer | Adaptive Learner
          </p>
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="mailto:gangasurendrab@gmail.com"
              className="hover:text-blue-400 transition-colors"
            >
              <Mail size={24} />
            </a>
            <a
              href="tel:+18565267286"
              className="hover:text-blue-400 transition-colors"
            >
              <Phone size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/ganga-surendra-basva"
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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 bg-gray-800/40 hover:bg-gray-900/80 transition-colors rounded-lg p-8 shadow-lg h-full">
              <p className="text-lg text-gray-300">
                Data Scientist &amp; Data Engineer with 4+ years designing
                end-to-end analytics systems, production ML pipelines, and
                scalable ETL workflows. I thrive on turning complex datasets
                into reliable, insight-driven products.
              </p>
              <p className="text-lg text-gray-300">
                I specialize in Python, SQL, Spark, and cloud-native solutions
                (AWS/Azure) paired with strong visualization skills. I’m
                currently completing my M.S. in Data Science at Rowan
                University while delivering production-ready ML and analytics
                features in industry.
              </p>
            </div>
            <div className="bg-gray-800/50 hover:bg-gray-900/85 transition-colors rounded-lg p-8 shadow-lg h-full">
              <h3 className="text-2xl font-bold mb-6">Quick Facts</h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <span className="text-blue-400">&bull;</span>
                  <span>M.S. Data Science, Rowan University (3.5 GPA)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-blue-400">&bull;</span>
                  <span>4+ years across Data Science &amp; Data Engineering</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-blue-400">&bull;</span>
                  <span>ML modeling, real-time analytics, production MLOps</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-blue-400">&bull;</span>
                  <span>Cloud-native ETL (AWS Kinesis, Lambda, Spark, Kafka)</span>
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
            <div className="bg-gray-800/50 hover:bg-gray-900/85 transition-colors rounded-lg p-8 shadow-lg">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold">Software Engineer Trainee</h3>
                  <div className="flex items-center gap-2">
                    <p className="text-blue-400">Quanti</p>
                    <a
                      href="https://www.quanti.llc"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                <div className="text-right text-gray-400">
                  <p>Jun 2025 - Present</p>
                  <p>Philadelphia, USA</p>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>
                  Built an integrated content and ad management platform with
                  Vue.js, FastAPI, and PostgreSQL for multi-network publishing.
                </li>
                <li>
                  Developed and optimized REST APIs for LinkedIn, X, TikTok, and
                  other channels to automate ingestion and performance tracking.
                </li>
                <li>
                  Integrated AI-based content recommendations (NLP/ML) boosting
                  engagement metrics by 40%.
                </li>
                <li>
                  Designed ETL pipelines to schedule, process, and store
                  high-volume content and ad datasets in analytics-ready formats.
                </li>
                <li>
                  Shipped features with Agile practices and CI/CD for faster,
                  reliable releases.
                </li>
              </ul>
            </div>

            <div className="bg-gray-800/50 hover:bg-gray-900/85 transition-colors rounded-lg p-8 shadow-lg">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold">Software Engineer</h3>
                  <div className="flex items-center gap-2">
                    <p className="text-blue-400">Tata Elxsi</p>
                    <a
                      href="https://www.tataelxsi.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                <div className="text-right text-gray-400">
                  <p>Aug 2020 - Aug 2023</p>
                  <p>Bengaluru, India</p>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>
                  Designed scalable ETL and real-time streaming (Kafka, AWS
                  Kinesis) improving data throughput by 30%.
                </li>
                <li>
                  Delivered REST APIs and microservices for internal data
                  platforms, improving data accessibility by 25%.
                </li>
                <li>
                  Built predictive maintenance with IoT sensor data, reducing
                  downtime by 20%.
                </li>
                <li>
                  Containerized analytics workloads with Docker for consistent,
                  reproducible deployments.
                </li>
              </ul>
            </div>

            <div className="bg-gray-800/50 hover:bg-gray-900/85 transition-colors rounded-lg p-8 shadow-lg">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold">Software Developer Intern</h3>
                  <div className="flex items-center gap-2">
                    <p className="text-blue-400">Sutherlands</p>
                    <a
                      href="https://www.sutherlandglobal.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                <div className="text-right text-gray-400">
                  <p>Jul 2019 - May 2020</p>
                  <p>Tamilnadu, India</p>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>
                  Automated customer support workflows with Python and Excel
                  macros, cutting handling time by 20%.
                </li>
                <li>
                  Built dashboards to monitor customer interactions and service
                  efficiency.
                </li>
                <li>
                  Supported debugging, feature enhancements, and data validation
                  across SQL and Python pipelines.
                </li>
                <li>
                  Documented and streamlined reporting processes to improve BI
                  accessibility.
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
            <div className="bg-gray-800/50 hover:bg-gray-900/85 transition-colors rounded-lg p-8 shadow-lg">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold">
                    Master of Science in Data Science
                  </h3>
                  <p className="text-blue-400">Rowan University</p>
                  <p className="text-gray-400">GPA: 3.5</p>
                  <a
                    href="https://www.rowan.edu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 inline-block mt-2"
                  >
                    <ExternalLink size={24} />
                  </a>
                </div>
                <div className="text-right text-gray-400">
                  <p>Aug 2023 - May 2025</p>
                  <p>Glassboro, NJ</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-800/50 hover:bg-gray-900/85 transition-colors rounded-lg p-8 shadow-lg">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold">
                    Bachelor of Technology in Computer Science &amp; Engineering
                  </h3>
                  <p className="text-blue-400">
                    Bharath Institute of Higher Education and Research
                  </p>
                  <p className="text-gray-400">GPA: 3.8</p>
                  <a
                    href="https://www.bharathuniv.ac.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 inline-block mt-2"
                  >
                    <ExternalLink size={24} />
                  </a>
                </div>
                <div className="text-right text-gray-400">
                  <p>Aug 2017 - May 2021</p>
                  <p>Chennai, India</p>
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
            <div className="bg-gray-800/50 hover:bg-gray-900/85 transition-colors rounded-lg p-8 shadow-lg">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold">
                    Early Prediction of Alzheimer's Disease
                  </h3>
                  <p className="text-blue-400">Python • TensorFlow • Flask API • CNN</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Built and trained a CNN on MRI datasets to detect early-stage
                Alzheimer's with 85% accuracy, exposing inference through a
                Flask REST API. Implemented robust preprocessing, logging, and
                Dockerized deployment for production readiness.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-400">
                  TensorFlow
                </span>
                <span className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-400">
                  Keras
                </span>
                <span className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-400">
                  Flask API
                </span>
                <span className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-400">
                  Docker
                </span>
              </div>
            </div>

            <div className="bg-gray-800/50 hover:bg-gray-900/85 transition-colors rounded-lg p-8 shadow-lg">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold">
                    Alcohol Detector in Vehicle using IoT
                  </h3>
                  <p className="text-blue-400">MQ-3 Sensor • Microcontroller • Safety System</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Integrated MQ-3 alcohol sensors with a microcontroller to
                prevent ignition when unsafe levels are detected. Built a
                real-time detection and alerting loop to improve driver and
                passenger safety.
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

            <div className="bg-gray-800/50 hover:bg-gray-900/85 transition-colors rounded-lg p-8 shadow-lg">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold">VAST Challenge MC3</h3>
                  <p className="text-blue-400">
                    Apache Spark • Hadoop • Graph Neural Networks • Tableau • D3.js
                  </p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Processed 10+ GB of structured and unstructured data with Spark
                and Hadoop, uncovering relationships via GNNs and delivering
                interactive dashboards with Tableau/D3.js for real-time
                analytics.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-400">
                  Spark
                </span>
                <span className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-400">
                  Hadoop
                </span>
                <span className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-400">
                  GNN
                </span>
                <span className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-400">
                  Tableau/D3.js
                </span>
              </div>
            </div>

            <div className="bg-gray-800/50 hover:bg-gray-900/85 transition-colors rounded-lg p-8 shadow-lg">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold">
                    NFL Running Back Performance Prediction
                  </h3>
                  <p className="text-blue-400">Web Scraping • Python • FastAPI • Power BI</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Scraped 40+ variables from NFL/PFF sources, built Random Forest
                and Linear Regression models, and served results via FastAPI
                with Power BI dashboards to improve decision-making by 25%.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-400">
                  FastAPI
                </span>
                <span className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-400">
                  Random Forest
                </span>
                <span className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-400">
                  Power BI
                </span>
                <span className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-400">
                  Web Scraping
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
            <div className="bg-gray-800/50 hover:bg-gray-900/85 transition-colors rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Programming &amp; Analytics</h3>
              <ul className="space-y-3">
                <li>Python, R, SQL, C#</li>
                <li>PySpark, NumPy, Pandas</li>
              </ul>
            </div>
            <div className="bg-gray-800/50 hover:bg-gray-900/85 transition-colors rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Machine Learning &amp; AI</h3>
              <ul className="space-y-3">
                <li>TensorFlow, Keras, PyTorch</li>
                <li>Scikit-learn, CNNs, Graph Neural Networks</li>
              </ul>
            </div>
            <div className="bg-gray-800/50 hover:bg-gray-900/85 transition-colors rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Data Engineering &amp; Cloud</h3>
              <ul className="space-y-3">
                <li>Spark, Hadoop, Kafka, ETL</li>
                <li>AWS (S3, EC2, Lambda, Glue, Kinesis), Azure</li>
                <li>Docker, CI/CD</li>
              </ul>
            </div>
            <div className="bg-gray-800/50 hover:bg-gray-900/85 transition-colors rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Visualization</h3>
              <ul className="space-y-3">
                <li>Tableau, Power BI</li>
                <li>D3.js, Matplotlib, Seaborn</li>
              </ul>
            </div>
            <div className="bg-gray-800/50 hover:bg-gray-900/85 transition-colors rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Databases</h3>
              <ul className="space-y-3">
                <li>MySQL, PostgreSQL</li>
                <li>MongoDB, Redis, Neo4j</li>
              </ul>
            </div>
            <div className="bg-gray-800/50 hover:bg-gray-900/85 transition-colors rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Tools &amp; Practices</h3>
              <ul className="space-y-3">
                <li>Git, Linux/Windows</li>
                <li>VS Code, Agile delivery</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-gray-400 py-6 mt-12">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Ganga Surendra Basva. All rights
            reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="mailto:gangasurendrab@gmail.com"
              className="hover:text-blue-400 transition-colors"
            >
              <Mail size={20} />
            </a>
            <a
              href="tel:+18565267286"
              className="hover:text-blue-400 transition-colors"
            >
              <Phone size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/ganga-surendra-basva"
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
    </div>
  );
}

export default App;
