import { FaGithub, FaFacebook, FaTwitter } from 'react-icons/fa';
import { ReactTyped } from 'react-typed';
import Image from './assets/images/menu.png';

function Header() {
  return (
    <div>
    <div className="hero">
      <div className=" flex justify-between items-center gap-48 lg:gap-56 lg:pt-3 lg:px-5 px-3 ">
        <div><h1 className="text-3xl text-white font-bold">Abdulwaris</h1></div>

        <div className="flex gap-5  lg:block hidden" >
          <a href="#"  className="text-white text-xl lg:mx-2">Home</a>
          <a href="#"  className="text-white text-xl lg:mx-2">About</a>
          <a href="#" className="text-white text-xl lg:mx-2">What I Do</a>
          <a href="#" className="text-white text-xl lg:mx-2">Resume</a>
          <a href="#" className="text-white text-xl lg:mx-2">Portfolio</a>
          <a href="#" className="text-white text-xl lg:mx-2">Client</a>
          <a href="#" className="text-white text-xl lg:mx-2">Contact</a>
        </div>
        


        <div className="flex gap-4 text-gray-700">
            <div className='lg:hidden md:block harm'>
            <img src={Image} alt="Menu Image" className='cursor-pointer'/>
            <div className="flex py-5 gap-5  lg:block hidden sixt">
          <a href="#" className="text-white py-3 text-xl hover:text-green-400 lg:mx-2">Home</a>
          <p className='h-[1px] l-[1px] bg-red-500'></p>
          <a href="#" className="text-white py-3 text-xl hover:text-green-400 lg:mx-2">About</a>
          <p className='h-[1px] l-[1px] bg-red-500'></p>
          <a href="#" className="text-white py-3 text-xl hover:text-green-400 lg:mx-2">What I Do</a>
          <p className='h-[1px] l-[1px] bg-red-500'></p>
          <a href="#" className="text-white py-3 text-xl hover:text-green-400 lg:mx-2">Resume</a>
          <p className='h-[1px] l-[1px] bg-red-500'></p>
          <a href="#" className="text-white py-3 text-xl hover:text-green-400 lg:mx-2">Portfolio</a>
          <p className='h-[1px] l-[1px] bg-red-500'></p>
          <a href="#" className="text-white py-3 text-xl hover:text-green-400 lg:mx-2">Client</a>
          <p className='h-[1px] l-[1px] bg-red-500'></p>
          <a href="#" className="text-white py-3 pb-5 text-xl hover:text-green-400 lg:mx-2">Contact</a>
          <p className='h-[1px] l-[1px] bg-red-500'></p>
        </div>
            </div>  
          <a href="github.com"><FaGithub color="white" size="1.5em" className="cursor-pointer" /></a>
          <a href=""><FaFacebook color="white" size="1.5em" className="cursor-pointer " /></a>
          <a href=""><FaTwitter color="white" size="1.5em" className="cursor-pointer" /></a>
        </div>
      </div>

      <div className=" text-white flex flex-col items-center justify-center h-[80vh] text-4xl font-semibold">
        <p className='mb-5 lg:text-5xl text-xl'>Welcome</p>
        <div className="lg:text-7xl font-semibold text-2xl">
          I am{" "}
          <ReactTyped
            strings={["Jimoh Abdulwaris", "a Frontend Developer", "a Freelancer"]}
            typeSpeed={100}
            backSpeed={50}
            loop
          />
        </div>
        <p className='lg:text-2xl text-xl font-semibold mt-7'>based in Lagos, Nigeria </p>
      <button className='border border-2 rounded-full px-8 py-3 text-xl mt-10 text-green-500 cursor-pointer hover:text-white hover:bg-green-500 hover:border-green-500'> Hire Me </button>
      </div>
      <div>
      </div>
    </div>
    </div>
  );
}

export default Header;
