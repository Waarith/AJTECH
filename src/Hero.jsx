function Hero() {
  return (
    <div className="mt-20">
      <p className="text-black lg:text-9xl text-7xl font-semibold text-center text-gray-300 opacity-40"> ABOUT ME</p>
      <p className="relative lg:top-[-80px] lg:right-[-545px] lg:text-4xl lg:font-semibold">Know Me More</p>

      <section className="flex justify-evenly">
        <div className="max-w-[730px] font-semithin text-lg">
          <p className="text-3xl font-semibold">I'm <span className="text-green-400">Jimoh Abdulwaris,</span> a Frontend Developer</p>
          <p>I help you build brand for your business at an affordable price. Thousands of clients have procured exceptional results while working with our dedicated team. when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <p className="pt-5">Delivering work within time and budget which meets client’s requirements is our moto. Lorem Ipsum has been the industry's standard dummy text ever when an unknown printer took a galley. Lorem Ipsum has been the industry's standard dummy text ever when an unknown printer took a galley.</p>
        </div>
        
        <div>
          <p className="text-lg font-semibold py-2">Name: <span className="text-md font-normal ">Jimoh Abdulwaris</span></p>
          <p className="bg-gray-300 w-72 h-[0.5px]"></p>
          <p className="text-lg font-semibold py-2">Email: <a href="mailto:2006abdulwaris@gmail.com" className="text-md font-normal text-green-400 ">2006abdulwaris@gmail.com</a></p>
          <p className="bg-gray-300 w-72 h-[0.5px]"></p>
          <p className="text-lg font-semibold py-2">Age: <span className="text-md font-normal ">19</span></p>
          <p className="bg-gray-300 w-72 h-[0.5px]"></p>
          <p className="text-lg font-semibold py-2 pb-9">From: <span className="text-md font-normal ">Lagos, Nigeria.</span></p>
          <a href="./assets/AJTECH.pdf" download="AJTECH.pdf" className="border border-green-400 rounded-full px-8 py-4 bg-green-400 text-white text-lg font-semibold "> Download CV</a>
        </div>
      </section>
    </div>

  );
}

export default Hero;
