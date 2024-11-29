

import AlertPage from "@/app/componets/AlertPage";
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
        <div className=" font-thin text-4xl p-40 text-justify text-white">
          Our wedding event planner is your one-stop 
          destination for creating the perfect celebration of love. From venue selection and décor inspiration to
          managing guest lists and timelines, we simplify every detail. Customize your wedding vision with 
          interactive tools, personalized recommendations, and trusted vendor connections. Let us take the stress out
          of planning, so you can focus on cherishing every moment of your big day.
        </div>
      </div>
      <div className="flex row-span-2">
        <div className=" font-thin text-4xl p-40 text-justify text-white">
        Our vacation event planning website helps you
         design the perfect getaway, tailored to your dreams. From booking accommodations and transportation to 
         curating activities and excursions, we make planning seamless and stress-free. Explore destinations
          with personalized recommendations and exclusive deals that fit your preferences and budget. Let us handle the
           details so you can focus on relaxing and making unforgettable memories.
        </div>
        <img src="landmark.jpg" className="w-2/4" />
      </div>
    </div>
  );
};

export default About;
