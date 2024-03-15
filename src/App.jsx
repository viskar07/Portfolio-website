import ButtonGradient from "./assets/svg/ButtonGradient";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Feedback from "./components/Feedback";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Tech from "./components/Tech";
import Work from "./components/Work";
import { StarsCanvas } from "./components/canvas";


const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Work />
        <Feedback />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
