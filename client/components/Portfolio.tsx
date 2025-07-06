import { motion } from "framer-motion";
import { ExternalLink, Github, Award, Building } from "lucide-react";
import { useState } from "react";
import Experience from "./Experience";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("EXPERIENCE");

  const project = {
    id: 1,
    title: "Cats vs Dogs Classifier",
    description:
      "AI model that classifies pet images using Convolutional Neural Networks. Built with Python, TensorFlow, and Streamlit for an interactive web interface.",
    image:
      "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=400&fit=crop",
    tech: ["Python", "TensorFlow", "CNN", "Streamlit", "Image Classification"],
    githubUrl: "https://github.com/hadi-abdulla-01/CatsVsDogsClassifier",
    features: [
      "Deep Learning CNN model",
      "Real-time image classification",
      "Interactive Streamlit UI",
      "High accuracy pet detection",
    ],
  };

  const certificates = [
    {
      id: 1,
      title: "Python Data Structures",
      issuer: "University of Michigan",
      description:
        "Comprehensive course covering Python data structures including lists, dictionaries, tuples, and sets.",
      date: "2024",
      link: "https://www.coursera.org/account/accomplishments/verify/4PB883HD6NO1",
      color: "from-blue-500 to-blue-700",
    },
    {
      id: 2,
      title: "AI For Everyone",
      issuer: "Andrew Ng",
      description:
        "Introduction to artificial intelligence concepts, applications, and impact on society.",
      date: "2024",
      link: "https://www.coursera.org/account/accomplishments/verify/77WLVRFNIP7X",
      color: "from-green-500 to-green-700",
    },
    {
      id: 3,
      title: "Machine Learning Foundations",
      issuer: "Coursera",
      description:
        "Fundamental concepts in machine learning including supervised and unsupervised learning.",
      date: "2024",
      link: "https://www.coursera.org/account/accomplishments/verify/94ZFXFVJ0R7C",
      color: "from-purple-500 to-purple-700",
    },
  ];

  const tabs = ["EXPERIENCE", "PROJECTS", "CERTIFICATES"];

  const renderTabContent = () => {
    switch (activeTab) {
      case "EXPERIENCE":
        return <Experience />;

      case "PROJECTS":
        return (
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
                {/* Project Image */}
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                </div>

                {/* Project Content */}
                <div className="p-8 md:p-12">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold mb-4 text-white">
                      Key Features:
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {project.features.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold mb-4 text-white">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {project.tech.map((tech, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-gray-800 rounded-full text-sm font-medium border border-gray-700 hover:border-blue-500 transition-colors text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center space-x-2 bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                    >
                      <Github size={20} />
                      <span>View on GitHub</span>
                    </motion.a>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center space-x-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors"
                    >
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <p className="text-xl text-gray-300">
                More exciting AI/ML projects coming soon!
              </p>
            </motion.div>
          </div>
        );

      case "CERTIFICATES":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-gray-600">
                  {/* Certificate Header */}
                  <div
                    className={`h-32 bg-gradient-to-r ${cert.color} flex items-center justify-center relative overflow-hidden`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="text-white"
                    >
                      <Award size={48} />
                    </motion.div>

                    {/* Decorative elements */}
                    <div className="absolute top-2 right-2 w-8 h-8 border border-white/20 rounded-full"></div>
                    <div className="absolute bottom-2 left-2 w-6 h-6 border border-white/20 rounded-full"></div>
                  </div>

                  {/* Certificate Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gray-200 transition-colors">
                      {cert.title}
                    </h3>

                    <p className="text-blue-400 font-semibold mb-3">
                      {cert.issuer}
                    </p>

                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {cert.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm">{cert.date}</span>

                      <motion.a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-1 text-blue-400 hover:text-blue-300 transition-colors text-sm font-semibold"
                      >
                        <span>Verify</span>
                        <ExternalLink size={14} />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block border-4 border-white p-4 mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-[0.3em]">
              PORTFOLIO
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-3xl mx-auto text-lg"
          >
            My journey in AI/ML development, projects, and continuous learning
          </motion.p>
        </div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12 relative"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 font-semibold transition-all relative ${
                activeTab === tab
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                  initial={false}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {renderTabContent()}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
