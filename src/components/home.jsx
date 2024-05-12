
import { useEffect, useState } from "react";
import Feature from "./feature";
const home = () => {
  const [loaddata, setLoaddata] = useState([]);
  useEffect(() => {
    fetch('/fakedata.json')
      .then(res => res.json())
      .then(data => setLoaddata(data))
  })
  const [showAll, setShowAll] = useState(false);

  const handleClick = () => {
    setShowAll(true);
  };

  return (
    <div>

      {/* /home sileder */}

      <div className="w-full md:w-[573px]   lg:w-[1110px] h-[720px] ">
        <div>
          <img src="" alt="" />
        </div>
        <div className="carousel w-full h-[720px]">
          <div id="slide1" className="carousel-item relative w-full ">
            <img src="/imges/home/desktop/image-hero-paramour.jpg"
              className="w-full lg:object-cover md:object-cover lg:bg-center md:bg-center" />
            <div className="absolute space-y-5 top-24 md:top-[18%] lg:top-[18%] left-3  md:left-12 lg:left-32 ">
              <h1 className="text-[#FFFFFF]  w-[544px] text-6xl md:text-8xl lg:text-8xl font-bold">Project <br />Paramour</h1>
              <p className="text-[#FFFFFF] text-balance font-semibold h-[72px]">Project made for an art museum near Southwest  <br /> London. Project Paramour is a statement of bold, modern <br /> architecture.</p>
              <button className="w-[232px] hover:bg-[#60636D] h-[52px] items-center p-5 rounded-md gap-4 bg-[#1B1D23] flex">
                <p className="text-[#FFFFFF] font-semibold">See Our Portfolio</p>
                <img className="w-[24px] h-[18px]" src="/imges/icons/Group 18.svg" alt="" />
              </button>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src="/imges/home/desktop/image-hero-seraph.jpg" className="w-full" />
            <div className="absolute space-y-5 top-24 md:top-[18%] lg:top-[18%] left-3  md:left-12 lg:left-32 ">
              <h1 className="text-[#FFFFFF]  w-[544px] text-6xl md:text-8xl lg:text-8xl font-bold">Project <br />Paramour</h1>
              <p className="text-[#FFFFFF] text-balance font-semibold h-[72px]">Project made for an art museum near Southwest  <br /> London. Project Paramour is a statement of bold, modern <br /> architecture.</p>
              <button className="w-[232px] hover:bg-[#60636D] h-[52px] items-center p-5 rounded-md gap-4 bg-[#1B1D23] flex">
                <p className="text-[#FFFFFF] font-semibold">See Our Portfolio</p>
                <img className="w-[24px] h-[18px]" src="/imges/icons/Group 18.svg" alt="" />
              </button>
            </div>
          </div>

          <div id="slide3" className="carousel-item relative w-full">
            <img src="/imges/home/desktop/image-hero-federal.jpg" className="w-full" />
            <div className="absolute space-y-5 top-24 md:top-[18%] lg:top-[18%] left-3  md:left-12 lg:left-32 ">
              <h1 className="text-[#FFFFFF]  w-[544px] text-6xl md:text-8xl lg:text-8xl font-bold">Project <br />Paramour</h1>
              <p className="text-[#FFFFFF] text-balance font-semibold h-[72px]">Project made for an art museum near Southwest  <br /> London. Project Paramour is a statement of bold, modern <br /> architecture.</p>
              <button className="w-[232px] hover:bg-[#60636D] h-[52px] items-center p-5 rounded-md gap-4 bg-[#1B1D23] flex">
                <p className="text-[#FFFFFF] font-semibold">See Our Portfolio</p>
                <img className="w-[24px] h-[18px]" src="/imges/icons/Group 18.svg" alt="" />
              </button>
            </div>
          </div>

          <div id="slide4" className="carousel-item relative w-full">
            <img src="/imges/home/desktop/image-hero-trinity.jpg" className="w-full" />
            <div className="absolute space-y-5 top-24 md:top-[18%] lg:top-[18%] left-3  md:left-12 lg:left-32 ">
              <h1 className="text-[#FFFFFF]  w-[544px] text-6xl md:text-8xl lg:text-8xl font-bold">Project <br />Paramour</h1>
              <p className="text-[#FFFFFF] text-balance font-semibold h-[72px]">Project made for an art museum near Southwest  <br /> London. Project Paramour is a statement of bold, modern <br /> architecture.</p>
              <button className="w-[232px] hover:bg-[#60636D] h-[52px] items-center p-5 rounded-md gap-4 bg-[#1B1D23] flex">
                <p className="text-[#FFFFFF] font-semibold">See Our Portfolio</p>
                <img className="w-[24px] h-[18px]" src="/imges/icons/Group 18.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className=" -translate-y-14 hidden md:hidden lg:block">
        <a href="#slide1" className="p-8 text-white font-semibold text-xl hover:bg-gray-200 hover:text-black bg-black">01</a>
        <a href="#slide2" className="p-8 text-white font-semibold text-xl hover:bg-gray-200 hover:text-black bg-black">02</a>
        <a href="#slide3" className="p-8 text-white font-semibold text-xl hover:bg-gray-200 hover:text-black bg-black">03</a>
        <a href="#slide4" className="p-8 text-white font-semibold text-xl hover:bg-gray-200 hover:text-black bg-black">04</a>

      </div>
      {/* ?wellcome section*/}

      <div className="mt-10 mb-10 md:mb-0 lg:mb-10 md:w-[581px] hidden md:block lg:block lg:w-[941px] mx-auto h-[200px]">
        <img src="/public/imges/home/desktop/Welcome (1).png" alt="" />
      </div>

      <div className="flex ite items-center mt-5 md:mt-0 lg:mt-5 mb-10 flex-col md:flex-col gap-10 lg:flex-row" >
        <div className="space-y-5">
          <p className="text-black text-6xl font-bold">Welcome to <br /> Arch Studio</p>
          <p className="text-[#60636D] text-xl w-[310px] md:w-[572px]  lg:w-[700px]">We have a unique network and
            skillset to help bring your projects to life. Our small team of highly skilled individuals
            combined with our large network put us in a strong position to deliver exceptional results.</p>
          <p className="text-[#60636D] text-xl text-balance w-[310px] md:w-[572px] lg:w-[700px]">
            Over the past 10 years, we have worked on all kinds of projects. From stations
            to high-rise buildings, we create spaces that inspire and delight.
          </p>
          <p className="text-[#60636D] text-xl w-[310px] md:w-[572px]   lg:w-[700px]">
            We work closely with our clients so that we understand the intricacies of
            each project. This allows us to work in harmony the surrounding area to create truly
            stunning projects that will stand the test of time.</p>
        </div>

        <div className=" hidden md:hidden lg:block w-[450px] h-[568px]">
          <img className="w-full  h-[568px]" src="/imges/home/desktop/image-welcome.jpg" alt="" />
        </div>
      </div>

      {/* about us */}

      <div>
        <div className="hero h-[560px] " style={{ backgroundImage: 'url(/imges/home/desktop/image-small-team.jpg)' }}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md space-y-5">
              <h1 className="text-5xl font-bold">Small team, <br /> big ideas</h1>
              <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
              <button className="w-[187px] hover:bg-[#60636D] h-[52px] mx-auto items-center p-5 rounded-md gap-4 bg-[#1B1D23] flex">
                <p className="text-[#FFFFFF] font-semibold">About Us</p>
                <img className="w-[24px] h-[18px]" src="/imges/icons/Group 18.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured */}
      <div className="flex justify-between items-center mt-10 p-2">
        <p className=" text-5xl md:text-[64px] lg:text-[64px] font-bold text-black">Featured</p>
        <button onClick={handleClick} className="w-[169px] hidden md:block lg:block  hover:bg-[#60636D]  h-[52px] mx-auto p-3 rounded-md gap-4 bg-[#1B1D23] ">
          <div className="flex items-center -mt-1 gap-5">
            <p className="text-[#FFFFFF] font-semibold">See All</p>
            <img className="w-[24px] h-[18px]" src="/imges/icons/Group 18.svg" alt="" />
          </div>
        </button>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-1 lg:grid-cols-3">
        {loaddata.slice(0, showAll ? loaddata.length : 3).map((data, index) => (
          <Feature key={index} data={data}></Feature>
        ))}
        {!showAll && (
          <div className="block md:hidden lg:hidden">
            <button onClick={handleClick} className="w-[187px]  hover:bg-[#60636D] h-[52px] mx-auto items-center p-5 rounded-md gap-4 bg-[#1B1D23] flex">
              <p className="text-[#FFFFFF] font-semibold">See All</p>
              <img className="w-[24px] h-[18px]" src="/imges/icons/Group 18.svg" alt="" />
            </button>
          </div>
        )}
      </div>

      <div className="mt-20  
               h-[400px] md:h-[120px]  lg:h-[150px]  flex flex-col md:flex-row lg:flex-row justify-between items-center">
        <div className="bg-gray-500 h-[120px] flex justify-center items-center  w-[120px] ">
          <img src="/imges/logo.svg" alt="" />
        </div>

        <div className="
              text-[25px] md:text-[18px] lg:text-[25px] flex flex-col md:flex-row lg:flex-row gap-10 md:gap-5 lg:gap-10 text-[#7D828F] ">
          <p className="">Portfolio</p>
          <p className="">About Us</p>
          <p className="">Contact</p>
        </div>

        <div>
          <button className="w-[212px] md:w-[200px] items-center lg:w-[212px]   p-5 md:p-2  lg:p-5  hover:bg-[#60636D] h-[52px]  rounded-md 
            gap-4 bg-[#1B1D23] flex">
            <p className="text-[#FFFFFF] font-semibold">See Our Portfolio</p>
            <img className="w-[24px] h-[18px]" src="/imges/icons/Group 18.svg" alt="" />
          </button>
        </div>
      </div>

    </div>
  );
};

export default home;