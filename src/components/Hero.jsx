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
    <section className="flex flex-row h-100 justify-center gap-25">
      <div className="h-100 flex flex-col justify-center items-center px-10">
        <h1 className="text-5xl font-bold w-full h-15 bg-gradient-to-r from-gradient-1 to-gradient-2 bg-clip-text text-transparent">
          Hi, I'm Chanvirakyuth
        </h1>
        <p className="w-full">
          I build responsive and beautiful websites.
          <br />
          My goal is to create seamless digital experiences
          <br />
          that are a joy for people to use.
        </p>
        <div className="w-full h-20 mt-3 text-black font-bold flex justify-between items-center gap-5">
          <button
            onClick={onGitHubClick}
            className="hover:cursor-pointer hover:scale-110 transition-all bg-gradient-to-r from-gradient-1 to-gradient-2 text-2xl h-75/100 w-60 rounded-full flex justify-center items-center"
          >
            <FaGithub className="text-4xl mr-3" />
            GitHub
          </button>
          <button
            onClick={onTelegramClick}
            className="hover:cursor-pointer hover:scale-110 transition-all bg-gradient-to-r from-gradient-1 to-gradient-2 text-2xl h-75/100 w-60 rounded-full flex justify-center items-center"
          >
            <FaTelegram className="text-4xl mr-3" />
            Telegram
          </button>
        </div>
        <a href={CV} download="MyExampleDoc" target='_blank' className="hover:cursor-pointer hover:scale-110 transition-all text-black font-bold bg-gradient-to-r from-gradient-1 to-gradient-2 text-2xl h-15 w-full rounded-full flex justify-center items-center">
          <FaFileDownload className="text-4xl mr-3" />
          Download CV
        </a>
      </div>
      <div className="h-100 flex justify-center items-center hover:scale-110 transition-all">
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
