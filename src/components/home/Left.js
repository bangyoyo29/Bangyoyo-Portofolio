import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { BsCloudLightningFill} from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiSpotify } from "react-icons/si";
import { SiTiktok } from "react-icons/si";
import { SiYoutube } from "react-icons/si";
import { SiYoutubemusic } from "react-icons/si";
import { FiInstagram, FiSend } from "react-icons/fi";
import CV from "../../assets/Setyo_resume.pdf";
import { bannerImg } from "../../assets/index";

const Left = () => {
  const [text] = useTypewriter({
    words: ["Web Developer", "Full Stack Developer", "UI Designer", "Song Writer", "Music Arranger"],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-5/12 h-full bg-bodyColor rounded-2xl shadow-testShwdow z-10">
      <div className="w-full h-3/5">
        <img
          className="w-full h-full object-cover rounded-2xl"
          src={bannerImg}
          loading="priority"
          alt="bannerImage"
        />
      </div>
      <div className="w-full h-2/5 flex flex-col justify-between border-t-0 rounded-bl-xl rounded-br-xl">
        <div className="flex flex-col items-center gap-2 py-10">
          <h1 className="text-textColor text-3xl font-semibold">M. SETYO DWI PUTRA</h1>
          <p className="text-base text-designColor tracking-wide">
            {text}
            <Cursor cursorBlinking="false" cursorStyle="|" />
          </p>
          <div className="flex justify-center gap-2 mt-2">
            <a href="https://github.com/bangyoyo29"
            target="_blank"
            rel="noreferrer"
            >
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <FaGithub />
            </span>
            </a>
            <a href="https://www.linkedin.com/in/m-setyo-dwi-putra-39303b224/"
            target="_blank"
            rel="noreferrer"
            >
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <FaLinkedin />
            </span>
            </a>
            <a href="https://www.youtube.com/@bangyoyo_"
            target="_blank"
            rel="noreferrer"
            >
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <SiYoutube />
            </span>
            </a>
            <a href="https://www.tiktok.com/@bangyoyo__"
            target="_blank"
            rel="noreferrer"
            >
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <SiTiktok />
            </span>
            </a>
            <a href="https://www.instagram.com/bangyoyo__/"
            target="_blank"
            rel="noreferrer"
            >
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <FiInstagram />
            </span>
            </a>
            <a href="https://open.spotify.com/artist/7wLsNISkN6vTun2ymTCbke?si=laCowa4BSMeONQsHC3F7BQ&nd=1&dlsi=fbf620ecfb4048cc"
            target="_blank"
            rel="noreferrer"
            >
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <SiSpotify />
            </span>
            </a>
            <a href="https://music.youtube.com/watch?v=kqWSsDqkOnY"
            target="_blank"
            rel="noreferrer"
            >
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <SiYoutubemusic />
            </span>
            </a>
          </div>
        </div>
        <div className="flex h-14">
          <a
            href={CV}
            target="_blank"
            className="w-1/2 border-t-[1px] borderRight border-t-zinc-800 text-sm tracking-wide uppercase  gap-2 hover:text-designColor duration-300"
            rel="noreferrer"
          >
            <button className="w-full h-full flex justify-center items-center gap-2">
              Download CV <BsCloudLightningFill />
            </button>
          </a>
          <a
            href="https://wa.me/6285156492719"
            target="_blank"
            className="w-1/2 border-t-[1px] border-t-zinc-800 text-sm tracking-wide uppercase  gap-2 hover:text-designColor duration-300"
            rel="noreferrer"
          >
          <button className="w-full h-full flex justify-center items-center gap-2">
            Contact Me <FiSend />
          </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Left;
