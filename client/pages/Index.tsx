import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}
