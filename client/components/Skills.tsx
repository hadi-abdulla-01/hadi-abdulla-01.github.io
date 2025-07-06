import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "USING NOW:",
      skills: [
        { name: "HTML5", icon: "🌐", color: "bg-orange-500" },
        { name: "CSS3", icon: "🎨", color: "bg-blue-500" },
        { name: "SASS", icon: "💅", color: "bg-pink-500" },
        { name: "JAVASCRIPT", icon: "⚡", color: "bg-yellow-500" },
        { name: "REACT", icon: "⚛️", color: "bg-cyan-500" },
        { name: "TYPESCRIPT", icon: "📘", color: "bg-blue-600" },
        { name: "TAILWIND", icon: "🎯", color: "bg-teal-500" },
        { name: "FIGMA", icon: "🔧", color: "bg-purple-500" },
      ],
    },
    {
      title: "LEARNING:",
      skills: [
        { name: "NODE.JS", icon: "🟢", color: "bg-green-600" },
        { name: "NEXT.JS", icon: "▲", color: "bg-black" },
        { name: "MONGODB", icon: "🍃", color: "bg-green-500" },
        { name: "PYTHON", icon: "🐍", color: "bg-blue-400" },
      ],
    },
    {
      title: "OTHER SKILLS:",
      skills: [
        { name: "GIT", icon: "📚", color: "bg-red-500" },
        { name: "PHOTOSHOP", icon: "🖼️", color: "bg-blue-700" },
        { name: "UI/UX DESIGN", icon: "✨", color: "bg-purple-600" },
        { name: "RESPONSIVE DESIGN", icon: "📱", color: "bg-indigo-500" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block border-4 border-black p-4 mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-[0.3em]">
              SKILLS
            </h2>
          </motion.div>
        </div>

        {/* Skills Categories */}
        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.2 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 tracking-wider">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: categoryIndex * 0.2 + skillIndex * 0.1,
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
                      className={`w-20 h-20 md:w-24 md:h-24 ${skill.color} rounded-xl flex items-center justify-center text-white text-2xl md:text-3xl shadow-lg group-hover:shadow-xl transition-shadow mb-4`}
                    >
                      {skill.icon}
                    </motion.div>

                    {/* Skill Name */}
                    <h4 className="text-center font-semibold text-sm md:text-base tracking-wider group-hover:text-gray-600 transition-colors">
                      {skill.name}
                    </h4>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            I'm always eager to learn new technologies and improve my skills.
            Currently focusing on full-stack development and exploring modern
            frameworks to create even better user experiences.
          </p>
        </motion.div>

        {/* Progress Bars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {[
            { skill: "Frontend Development", level: 90 },
            { skill: "UI/UX Design", level: 85 },
            { skill: "Responsive Design", level: 95 },
            { skill: "Problem Solving", level: 88 },
          ].map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between">
                <span className="font-semibold">{item.skill}</span>
                <span className="text-gray-600">{item.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                ></motion.div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
