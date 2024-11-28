import React from "react";

const About = () => {
  return (
    <div className="bg-gray-800">
      <div className="h-screen bg-fixed bg-center bg-cover bg-background-image-about">
        <div className="h-full bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold">
            About
          </h1>
        </div>
      </div>
      <div className="flex row-span-2">
        <img src="wedding.jpg" className="w-2/4" />
        <div className=" font-thin text-4xl p-40   text-white">
          Our wedding event planner website is your one-stop 
          destination for creating the perfect celebration of love. From venue selection and décor inspiration to
          managing guest lists and timelines, we simplify every detail. Customize your wedding vision with 
          interactive tools, personalized recommendations, and trusted vendor connections. Let us take the stress out
          of planning, so you can focus on cherishing every moment of your big day.
        </div>
      </div>
    </div>
  );
};

export default About;
