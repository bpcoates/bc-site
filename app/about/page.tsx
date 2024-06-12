import React from "react";

const About = () => {
  return (
    <div className="flex w-full h-screen py-16 bg-slate-600 p-4 justify-center items-center">
      <div className=" max-w-[1240px] m-auto md:grid px-8 grid-cols-3">
        <div className="col-span-2">
          <p className="py-2 text-xl tracking-widest text-slate-400 border-b-2 border-[#1a363d] ">
            about
          </p>
          <p className="px-2 text-sm pt-2 text-slate-200">
            I started my career in Stillwater, Oklahoma helping all kinds of
            people with installation and configuration of their sound cards and
            other computer things. Later, I moved into testing and QA. One day,
            I decided to head out to the Seattle area to continue my journey.
            There, my experience expoloded into hardware and software testing
            and development, systems setup and administration, and even some
            work on satellites. I am always looking for opportunities to expand
            my skills.
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default About;
