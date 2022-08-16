import React from "react";
import aocna from "../assets/aocnaimg.png";
import verifid from "../assets/verifidimg.png";
import quickmail from "../assets/quikmail.png";

const Projects = () => {
  const portfolios = [
    {
      id: 1,
      src: aocna,
      demo:"https://manosijmckvie.pythonanywhere.com/",
      href:"https://github.com/ManosijTarafdar/weAOCNA",
    },
    {
      id: 2,
      src: verifid,
      demo:"https://verifidhome.herokuapp.com/",
      href:"https://github.com/ManosijTarafdar/verifID_on_heroku"
    },
    {
      id: 3,
      src: quickmail,
      demo:"https://quikmail.pythonanywhere.com/",
      href:"https://github.com/ManosijTarafdar/QuikMail"
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-gray-800 to-gray-900 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 sm:mt-10">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src , demo , href}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={demo} target="_blank" rel="noreferrer"><button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button></a>
                <a href={href} target="_blank" rel="noreferrer"><button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;