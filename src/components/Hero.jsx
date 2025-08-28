import profilePic from "../assets/images/profile_picture.jpg";
import { FaFileDownload, FaGithub, FaTelegram } from "react-icons/fa";
import CV from "../assets/images/profile_picture.jpg";

const Hero = () => {
  const onGitHubClick = () => {
    window.open("https://github.com/TheVictorDevX", "_blank"); // Opens the link in a new tab
  };

  const onTelegramClick = () => {
    window.open("https://t.me/TaiKaizenToo", "_blank"); // Opens the link in a new tab
  };

  return (
    <section className="w-full flex flex-col justify-center items-center gap-y-1">
      {/* Profile Picture */}
      <div className="bg-gradient-to-r from-gradient-1 to-gradient-2 rounded-full w-60 p-1.25">
        <img src={profilePic} alt="Profile Picture" className="rounded-full" />
      </div>

      {/* Greeting Title */}
      <h1 className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-gradient-1 to-gradient-2">
        Hi, I'm Lim Chanvirakyuth
      </h1>

      {/* Greeting Description */}
      <p className="text-center leading-5">
        I build responsive and beautiful websites.
        <br />
        My goal is to create seamless digital experiences
        <br />
        that are a joy for people to use.
      </p>

      {/* Group Buttons */}
      <div className="flex gap-x-1 mt-1">
        {/* GitHub Button */}
        <a
          className="w-32 h-12 text-black font-bold bg-gradient-to-r from-gradient-1 to-gradient-2 rounded-full flex justify-center items-center"
          href="https://github.com/TheVictorDevX"
        >
          <FaGithub className="text-3xl mr-2" /> GitHub
        </a>
        {/* Telegram Button */}
        <a
          className="w-32 h-12 text-black font-bold bg-gradient-to-r from-gradient-1 to-gradient-2 rounded-full flex justify-center items-center"
          href="https://t.me/TaiKaizenToo"
        >
          <FaTelegram className="text-3xl mr-2" /> Telegram
        </a>
      </div>

      {/* Download CV Button */}
      <a
        className="w-42 h-12 mt-0.5 text-black font-bold bg-gradient-to-r from-gradient-1 to-gradient-2 rounded-full flex justify-center items-center"
        href="https://github.com/TheVictorDevX"
      >
        <FaFileDownload className="text-3xl mr-2" /> Download CV
      </a>
    </section>
  );
};

export default Hero;
