import { background, curve, heroBackground } from "../assets";
import { BackgroundCircles, Gradient } from "./design/Hero";
import { Suspense, useRef } from "react";
import Robot from "./Robot";
import Notification from "./shared/Notification";
import { ScrollParallax } from "react-just-parallax";
import { heroIcons } from "../constants";
import CanvasLoader from "./shared/Loader";





const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <section
      className={`relative w-full h-screen mx-auto mt-20`}
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            Hi I am  {` `}
            <span className="inline-block relative gradient-blue">
              Viskar{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            I develop 3D visuals, user interfaces and web applicationsI'm a
            content creator and full-stack developer specializing in 3D visuals,
            user interfaces, and web applications.
          </p>
          <Suspense fallback={<CanvasLoader />}>
            <Robot />
          </Suspense>

        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">

          <div>
            <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
            </div>
            <Gradient />
          </div>

          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroBackground}
              className="w-full absolute inset-0 bg-black opacity-60"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>
          <BackgroundCircles />
          <div className="relative z-20">
            <ScrollParallax isAbsolutelyPositioned className="absolute z-2">
              <ul className="hidden absolute z-50 -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex" >
                {heroIcons.map((icon, index) => (
                  <li className="p-5" key={index}>
                    <a href="#tech" >
                      <img src={icon} width={34} height={35} alt={icon} />
                    </a>
                  </li>
                ))}
              </ul>
            </ScrollParallax>

            <ScrollParallax isAbsolutelyPositioned>
              <a href="#feedback">
              <Notification
                className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                title="Testimonials "
              />
              </a>
            </ScrollParallax>
          </div>
        </div>

      </div>

    </section>
  );
};

export default Hero;


