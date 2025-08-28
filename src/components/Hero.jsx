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
    <section className="sm:flex sm:flex-col lg:flex-row lg:justify-between lg:p-10 xl:justify-center xl:gap-x-50">
      <div className="lg:flex lg:flex-col lg:justify-center">
        <h1 className="sm:text-center sm:text-5xl lg:text-left font-bold w-full h-15 bg-gradient-to-r from-gradient-1 to-gradient-2 bg-clip-text text-transparent">
          Hi, I'm Chanvirakyuth
        </h1>
        <p className="sm:text-center sm:text-2xl lg:text-base lg:text-left w-full">
          I build responsive and beautiful websites.
          <br />
          My goal is to create seamless digital experiences
          <br />
          that are a joy for people to use.
        </p>
        <div className="w-full my-3 text-black font-bold flex sm:justify-center md:justify-center lg:justify-start lg:mt-5 items-center gap-x-5 lg:gap-x-3">
          <button
            onClick={onGitHubClick}
            className="sm:h-15 sm:w-75 md:w-75 lg:w-50 hover:cursor-pointer hover:scale-110 transition-transform bg-gradient-to-r from-gradient-1 to-gradient-2 text-2xl h-75/100 w-60 rounded-full flex justify-center items-center"
          >
            <FaGithub className="text-4xl mr-3" />
            GitHub
          </button>
          <button
            onClick={onTelegramClick}
            className="sm:h-15 sm:w-75 md:w-75 lg:w-50 hover:cursor-pointer hover:scale-110 transition-transform bg-gradient-to-r from-gradient-1 to-gradient-2 text-2xl h-75/100 w-60 rounded-full flex justify-center items-center"
          >
            <FaTelegram className="text-4xl mr-3" />
            Telegram
          </button>
        </div>
        <div className="flex justify-center items-center lg:justify-start">
          <a href={CV} download="MyExampleDoc" target='_blank' className="sm:w-120 md:w-120 lg:w-103 hover:cursor-pointer hover:scale-110 transition-transform text-black font-bold bg-gradient-to-r from-gradient-1 to-gradient-2 text-2xl h-15 w-full rounded-full flex justify-center items-center">
          <FaFileDownload className="text-4xl mr-3" />
          Download CV
          </a>
        </div>
      </div>
      <div className="sm:order-first lg:order-last sm:flex sm:justify-center sm:items-center hover:scale-110 transition-transform">
        <div className="rounded-full bg-gradient-to-r from-gradient-1 to-gradient-2 p-1.25">
          <img
            src={profilePic}
            alt="Profile Picture"
            className="h-75 rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
