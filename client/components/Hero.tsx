import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-black overflow-hidden w-full"
    >
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 p-6 md:p-8">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-white font-bold text-2xl"
          >
            <p>
              <br />
            </p>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-white hover:text-gray-300 transition-colors"
            >
              About me
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-white hover:text-gray-300 transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-white hover:text-gray-300 transition-colors"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition-colors"
            >
              CONTACT ME
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 bg-black/90 backdrop-blur-sm rounded-lg p-4"
          >
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-white hover:text-gray-300 transition-colors text-left"
              >
                About me
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-white hover:text-gray-300 transition-colors text-left"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-white hover:text-gray-300 transition-colors text-left"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition-colors text-center"
              >
                CONTACT ME
              </button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Content */}
      <div className="relative min-h-screen flex items-center py-20 md:py-0">
        {/* Background Elements */}
        <div className="absolute inset-0 w-full overflow-hidden">
          {/* Gray section */}
          <div className="absolute left-0 top-0 w-1/2 h-full bg-gray-300"></div>
          {/* Black diagonal overlay */}
          <div
            className="absolute top-0 right-0 w-3/5 h-full bg-black transform skew-x-12 origin-top-right max-w-full"
            style={{ clipPath: "polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full overflow-hidden">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-4xl font-light text-white md:text-black mb-4"
            >
              Hi, I am
            </motion.h2>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white md:text-black mb-4"
            >
              Mohammed Hadi Abdulla
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg md:text-xl text-gray-200 md:text-gray-600 mb-8"
            >
              B.Tech CSE (AI & ML) student | Aspiring AI/ML Developer
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex justify-center lg:justify-start space-x-4"
            >
              <motion.a
                href="mailto:mhadiabdulla4@gmail.com?subject=Hello Mohammed&body=Hi Mohammed, I would like to connect with you."
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-gray-400 rounded-lg flex items-center justify-center text-black hover:bg-gray-500 transition-colors shadow-md"
              >
                <Mail size={20} />
              </motion.a>
              <motion.a
                href="https://github.com/hadi-abdulla-01/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-gray-400 rounded-lg flex items-center justify-center text-black hover:bg-gray-500 transition-colors shadow-md"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/mohammed-hadi-abdulla-4033782b5/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-gray-400 rounded-lg flex items-center justify-center text-black hover:bg-gray-500 transition-colors shadow-md"
              >
                <Linkedin size={20} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
            style={{ margin: "24px 0 14px" }}
          >
            <div className="relative">
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 1, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-80 h-96 md:w-96 md:h-[450px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F48f38dd7864840a29a4407bd35c95052%2F9514719161f346c397ec628b5606f25f"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Floating elements for 3D effect */}
              <motion.div
                animate={{
                  x: [0, 10, 0],
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-white rounded-full shadow-lg"
              ></motion.div>

              <motion.div
                animate={{
                  x: [0, -8, 0],
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-2 -left-2 w-6 h-6 bg-gray-300 rounded-full shadow-lg"
              ></motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
