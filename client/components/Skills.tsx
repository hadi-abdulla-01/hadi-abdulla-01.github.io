import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    { name: "PYTHON", icon: "🐍", color: "bg-blue-500" },
    { name: "JAVA", icon: "☕", color: "bg-red-500" },
    { name: "REACT", icon: "⚛️", color: "bg-cyan-500" },
    { name: "TAILWIND CSS", icon: "🎯", color: "bg-teal-500" },
    { name: "MYSQL", icon: "🗄️", color: "bg-orange-500" },
    { name: "GIT", icon: "📚", color: "bg-gray-600" },
    { name: "STREAMLIT", icon: "🚀", color: "bg-red-600" },
    { name: "FIGMA", icon: "🔧", color: "bg-purple-500" },
    { name: "TENSORFLOW", icon: "🧠", color: "bg-amber-500" },
    { name: "FLUTTER", icon: "💙", color: "bg-blue-400", learning: true },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block border-4 border-white p-4 mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-[0.3em] text-white">
              SKILLS
            </h2>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                scale: 1.05,
                y: -5,
                transition: { type: "spring", stiffness: 300 },
              }}
              className="flex flex-col items-center group cursor-pointer"
            >
              {/* Icon Container */}
              <motion.div
                whileHover={{ rotate: 5 }}
                className={`w-20 h-20 md:w-24 md:h-24 ${skill.color} rounded-xl flex items-center justify-center text-white text-2xl md:text-3xl shadow-lg group-hover:shadow-xl transition-shadow mb-4 relative`}
              >
                {skill.icon}
                {skill.learning && (
                  <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs px-2 py-1 rounded-full font-bold">
                    NEW
                  </span>
                )}
              </motion.div>

              {/* Skill Name */}
              <h4 className="text-center font-semibold text-sm md:text-base tracking-wider text-white group-hover:text-gray-300 transition-colors">
                {skill.name}
              </h4>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            Passionate about AI/ML technologies and continuously learning new
            tools to build innovative solutions. Currently exploring Flutter for
            mobile development.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
