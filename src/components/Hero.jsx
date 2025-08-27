import profilePic from '../assets/images/profile_picture.jpg'
import { FaGithub, FaTelegram } from 'react-icons/fa'

const Hero = () => {
  return (
    <section className='flex flex-row h-100 justify-center gap-25'>
      <div className='h-100 flex flex-col justify-center items-center px-10'>
        <h1 className='text-5xl font-bold w-full h-15 bg-gradient-to-r from-gradient-1 to-gradient-2 bg-clip-text text-transparent'>Hi, I'm Chanvirakyuth</h1>
        <p className='w-full'>I build responsive and beautiful websites.
            <br />My goal is to create seamless digital experiences
            <br />that are a joy for people to use.</p>
        <div className='w-full h-20 mt-3 text-black font-bold flex justify-left items-center gap-5'>
            <button
            className='bg-gradient-to-r from-gradient-1 to-gradient-2 text-2xl h-75/100 w-50 rounded-full flex justify-center items-center'>
                <FaGithub className='text-4xl mr-3'/>
                GitHub
            </button>
            <button
            className='bg-gradient-to-r from-gradient-1 to-gradient-2 text-2xl h-75/100 w-50 rounded-full flex justify-center items-center'>
                <FaTelegram className='text-4xl mr-3'/>
                Telegram
            </button>
        </div>
      </div>
      <div className='h-100 flex justify-center items-center'>
        <div className='rounded-full bg-gradient-to-r from-gradient-1 to-gradient-2 p-1.25'>
            <img
            src={profilePic}
            alt="Profile Picture"
            className='h-75 rounded-full'/>
        </div>
      </div>
    </section>
  )
}

export default Hero
