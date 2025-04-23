import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <NavBar />

      <main>
        {/* Hero Section */}
        <Hero />
        {/* Skill Section */}
        <Skills />
        <Services />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
