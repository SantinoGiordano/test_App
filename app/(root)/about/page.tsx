import React from "react";

const About = () => {
  return (
    <div className="bg-slate-600">
      <div className="h-screen bg-fixed bg-center bg-cover bg-background-image-home">
        <div className="h-full bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold">
            Parallax Effect
          </h1>
        </div>
      </div>
      <div className="flex row-span-2 pt-40">
        <img src="wedding.jpg" className="w-2/4" />
        <div className="mt-40 p-5">hello world</div>
      </div>
    </div>
  );
};

export default About;
