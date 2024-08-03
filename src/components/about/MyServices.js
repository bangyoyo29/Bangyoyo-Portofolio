import React from "react";
import { FaAppStoreIos } from "react-icons/fa";
import { AiTwotoneAppstore } from "react-icons/ai";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import ServicesCard from "./ServicesCard";

const MyServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <ServicesCard
        icons={<BiCodeAlt />}
        title="Web Development"
        subTitle="Create Website for individual or company."
      />
      <ServicesCard
        icons={<SiAntdesign />}
        title="Web Design"
        subTitle="Create Website design for individual or company."
      />
      <ServicesCard
        icons={<AiTwotoneAppstore />}
        title="Song Writer"
        subTitle="A song writer Javanese song with the pop dangdut genre."
      />
      <ServicesCard
        icons={<FaAppStoreIos />}
        title="Data Analyst"
        subTitle="Researches and analyzes information by data."
      />
    </div>
  );
};

export default MyServices;
