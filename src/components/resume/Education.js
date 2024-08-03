import React from "react";
import ResumeTitle from "./ResumeTitle";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="w-full grid grid-cols-9 px-6">
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Experience" icon={<MdWork />} />
        <ResumeCard
          badge=""
          title="Content Creator"
          subTitle="PUBG Mobile ID"
          des=""
        />
        <ResumeCard
          badge="2020 - 2022"
          title="Streamer"
          subTitle="Nimo TV"
          des="Streamer Official on Nimo TV"
        />
        <ResumeCard
          badge="2018 - Now"
          title="CEO"
          subTitle="Rinklink.co"
          des="Founder Company Ricklink.co"
        />
      </div>
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Education" icon={<GiGraduateCap />} />
        <ResumeCard
          badge="2012 - 2015"
          title="SMP Pondok Modern Selamat"
          subTitle="Kendal, Jawa Tengah"
          des=""
        />
        <ResumeCard
          badge="2015 - 2018"
          title="SMA Negeri 2 Brebes"
          subTitle="Brebes, Jawa Tengah"
          des="Jurusan IPA"
        />
        <ResumeCard
          badge="2018 - Now"
          title="Universitas Ahmad Dahlan"
          subTitle="Yogyakarta"
          des="S1 - Informatika"
        />
      </div>
    </div>
  );
};

export default Education;
