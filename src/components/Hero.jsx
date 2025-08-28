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
    <section className="w-full flex flex-col lg:flex-row justify-center items-center py-8 lg:gap-x-25">
      {/* Profile Picture */}
      <div className="lg:order-last hover:scale-110 hover:m-2 transition-all bg-gradient-to-r from-gradient-1 to-gradient-2 rounded-full w-60 p-1.25">
        <img src={profilePic} alt="Profile Picture" className="rounded-full" />
      </div>

      {/* Second Part of Hero Section */}
      <div className="flex flex-col justify-center items-center lg:items-start gap-y-1.5">
        {/* Greeting Title */}
        <h1 className="lg:text-left hover:scale-110 hover:m-2 transition-all font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-gradient-1 to-gradient-2">
          Hi, I'm Lim Chanvirakyuth
        </h1>

        {/* Greeting Description */}
        <p className="lg:text-left text-center leading-5">
          I build responsive and beautiful websites.
          <br />
          My goal is to create seamless digital experiences
          <br />
          that are a joy for people to use.
        </p>

        {/* Group Buttons */}
        <div className="lg:mt-5 flex justify-center items-center gap-x-1 mt-1">
          {/* GitHub Button */}
          <a
            className="hover:scale-110 hover:m-2 transition-all h-12 p-3 text-black font-bold bg-gradient-to-r from-gradient-1 to-gradient-2 rounded-full flex justify-center items-center"
            href="https://github.com/TheVictorDevX"
            target="_blank"
          >
            <FaGithub className="text-3xl mr-2" /> GitHub
          </a>
          {/* Telegram Button */}
          <a
            className="hover:scale-110 hover:m-2 transition-all h-12 p-3 text-black font-bold bg-gradient-to-r from-gradient-1 to-gradient-2 rounded-full flex justify-center items-center"
            href="https://t.me/TaiKaizenToo"
            target="_blank"
          >
            <FaTelegram className="text-3xl mr-2" /> Telegram
          </a>
        </div>

        {/* Download CV Button */}
        <a
          className="lg:w-63 hover:scale-110 hover:m-2 transition-all h-12 p-3 mt-0.5 text-black font-bold bg-gradient-to-r from-gradient-1 to-gradient-2 rounded-full flex justify-center items-center"
          href={CV}
          target="_blank"
          download
        >
          <FaFileDownload className="text-3xl mr-2" /> Download CV
        </a>
      </div>
    </section>
  );
};

export default Hero;
