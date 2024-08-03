import React from "react";
import { BsTrophyFill } from "react-icons/bs";
import { SiAntdesign } from "react-icons/si";
import { SiSpotify } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import { IoLogoYoutube } from "react-icons/io";
import FunFactCard from "./FunFactCard";

const FunFact = () => {
  return (
    <div className="px-0 grid grid-cols-2 md:grid-cols-4 pb-10">
      <FunFactCard icon={<BsTrophyFill />} des="10 Awards Won" />
      <FunFactCard icon={<SiAntdesign />} des="20 Finished Projects" />
      <FunFactCard icon={<SiSpotify />} des="2 Released Song" />
      <FunFactCard icon={<IoLogoYoutube />} des="385 Subscription" />
    </div>
  );
};

export default FunFact;
