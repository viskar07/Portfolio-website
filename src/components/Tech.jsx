import React from "react";
import { techLogo } from "../assets";
import { SectionWrapper } from "../hoc";
import { technologies, workingTech } from "../constants";
import { LeftCurve, RightCurve } from "../components/design/Collabration"

const Tech = () => {
  return (
    <div className="flex flex-col gap-20 sm:gap-40 pt-28 " id="tech">
      <div className="container lg:flex justify-between ">

        <div className="max-w-[25rem] mb-10">
          <h2 className="h2 mb-4 md:mb-8">
          Tech Odyssey
          </h2>
          <p className='mt-8 text-secondary text-[17px] max-w-3xl leading-[30px]'>I am currently immersed in working with these technologies on a daily basis</p>
        </div>

        <div >
          <div className="  relative left-1/2 flex w-[18rem] sm:w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
            <div className="flex w-48 sm:w-60 aspect-square m-auto border border-n-6 rounded-full animate-spin">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full ">
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <img
                    src={techLogo}
                    width={80}
                    height={80}
                    alt="techLogo"
                    className="pr-1"
                  />
                </div>
              </div>
            </div>

            <ul className="">
              {workingTech.map((app, index) => (
                <li
                  key={app.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${index * 45
                    }`}
                >
                  <div
                    className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${index * 45
                      }`}
                  >
                    <img
                      className="m-auto"
                      width={app.width}
                      height={app.height}
                      alt={app.title}
                      src={app.icon}
                    />
                  </div>
                </li>
              ))}
            </ul>

            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>

      {/* Icon Rendered */}
      <div className=" w- flex justify-center gap-8 md:gap-20 flex-wrap ">
        {technologies.map((tech, index) => (
          <div className="flex flex-col gap-2 items-center hover:scale-125 transition duration-75 " key={`tech-${index}`}>
            <img src={tech.icon} width={40} height={40} className="w-[40px] " />
            <p className="hidden md:block">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "#tech");