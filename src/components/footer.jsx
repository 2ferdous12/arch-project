import { Link } from "react-router-dom";

const footer = () => {
    return (
        <div>
            <div className="mt-20  w-[371px] mx-auto md:w-[612px] lg:w-[980px] bg-[#EEEFF4]
               h-[400px] md:h-[120px]  lg:h-[150px]  flex flex-col md:flex-row lg:flex-row justify-between items-center">
                <Link to="/" className="bg-black h-[120px] flex justify-center items-center  w-[120px] ">
                    <img className="w-[60px]" src="/public/imges/icons/Arch 3.svg" alt="" />
                </Link>

                <div className="
              text-[25px] md:text-[18px] lg:text-[25px] flex flex-col md:flex-row lg:flex-row gap-10 md:gap-5 lg:gap-10 text-[#7D828F] ">
                    <Link to="/protfulio" className="">Portfolio</Link>
                    <Link to="/about" className="">About Us</Link>
                    <Link to="contact" className="">Contact</Link>
                </div>

                <div className="translate-x-10">
                    <Link to="/protfulio" className="w-[212px] md:w-[200px] items-center lg:w-[212px]   p-5 md:p-2  lg:p-5  hover:bg-[#60636D] h-[52px]  rounded-md 
            gap-4 bg-[#1B1D23] flex">
                        <p className="text-[#FFFFFF] font-semibold">See Our Portfolio</p>
                        <img className="w-[24px] h-[18px]" src="/imges/icons/Group 18.svg" alt="" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default footer;