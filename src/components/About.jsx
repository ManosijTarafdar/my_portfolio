import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Aspiring to be a part of a reputed organization, working in a responsible 
        position and performing consistently to the best of my skills and abilities in 
        order to learn and grow along with the organization. 
        </p>

        <br />

        <p className="text-xl">
        Currently pursuing B. Tech in Computer Science and Engineering from MCKV Institute of Engineering under Maulana Abul Kalam Azad University of Technology. Presently in 7th semester with an average CGPA of 9.31.
        </p>
      </div>
    </div>
  );
};

export default About;