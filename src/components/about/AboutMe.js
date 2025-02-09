import React from "react";

const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row pb-6">
      <div className="w-full md:w-1/2 text-zinc-400 px-6 border-r-[1px] border-r-zinc-800 flex items-center">
        <div className="py-6">
          <h2 className="font-semibold mb-1">Hello! I'm M. Setyo Dwi Putra</h2>
          <p className="text-base leading-6 ">
          Musician from Java with the pop dangdut genre and started his career in Yogyakarta City. It started with studying Informatics Engineering at a university in Yogyakarta. That's where the skills of content creators, graphic design and data analysis are obtained.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-6">
        <ul className="flex flex-col gap-1">
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Age:</span>
            24
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Residence:</span>
            Yogyakarta
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Freelance:</span>
            Available
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Address:</span>
            Bantul, DIY
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
