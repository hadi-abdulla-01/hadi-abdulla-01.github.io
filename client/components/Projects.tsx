import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const projects = [
    {
      id: 1,
      title: "EatSome",
      description: "Restaurant browsing app built with React.js using Yelp API",
      category: "coded, designed",
      filters: ["ALL", "CODED", "DESIGNED"],
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
      tech: ["React", "JavaScript", "API Integration", "Responsive Design"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Portfolio Dashboard",
      description: "Modern admin dashboard with data visualization",
      category: "coded",
      filters: ["ALL", "CODED"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tech: ["React", "TypeScript", "Chart.js", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with payment integration",
      category: "coded, designed",
      filters: ["ALL", "CODED", "DESIGNED"],
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tech: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "Mobile App Design",
      description: "UI/UX design for a fitness tracking mobile application",
      category: "designed",
      filters: ["ALL", "DESIGNED"],
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      tech: ["Figma", "UI/UX Design", "Prototyping", "User Research"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 5,
      title: "Weather App",
      description:
        "Beautiful weather application with location-based forecasts",
      category: "coded",
      filters: ["ALL", "CODED"],
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      tech: ["React", "Weather API", "Geolocation", "CSS Animations"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 6,
      title: "Brand Identity",
      description: "Complete brand identity design for a tech startup",
      category: "designed",
      filters: ["ALL", "DESIGNED"],
      image:
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&h=400&fit=crop",
      tech: ["Adobe Illustrator", "Brand Design", "Logo Design", "Style Guide"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  const filters = ["ALL", "CODED", "DESIGNED"];

  const filteredProjects = projects.filter(
    (project) =>
      activeFilter === "ALL" || project.filters.includes(activeFilter),
  );

  return (
    <section id="portfolio" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header with Background Image */}
        <div className="relative mb-16 h-80 bg-gradient-to-r from-gray-800 to-gray-600 rounded-lg overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&h=400&fit=crop')",
            }}
          ></div>
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 flex items-center justify-center h-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-4 border-white p-6"
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-[0.3em]">
                PORTFOLIO
              </h2>
            </motion.div>
          </div>
        </div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 font-semibold transition-all ${
                activeFilter === filter
                  ? "text-white border-b-2 border-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
          <div className="w-full h-px bg-gray-700 mt-4"></div>
          <div
            className="h-px bg-white transition-all duration-300"
            style={{
              width: `${100 / filters.length}%`,
              transform: `translateX(${filters.indexOf(activeFilter) * 100}%)`,
            }}
          ></div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg bg-gray-800">
                {/* Project Image */}
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Project Overlay */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <p className="text-sm italic">{project.category}</p>
                    <p className="text-sm px-4">{project.description}</p>

                    {/* Action Buttons */}
                    <div className="flex justify-center space-x-4">
                      <motion.a
                        href={project.liveUrl}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex items-center space-x-1 text-xs border-b border-white pb-1 hover:border-gray-300 transition-colors"
                      >
                        <span>DEMO</span>
                        <ExternalLink size={12} />
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex items-center space-x-1 text-xs border-b border-white pb-1 hover:border-gray-300 transition-colors"
                      >
                        <span>CODE</span>
                        <Github size={12} />
                      </motion.a>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs px-2 py-1 bg-gray-700 rounded-full text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-xl text-gray-300">And many more to come!</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
