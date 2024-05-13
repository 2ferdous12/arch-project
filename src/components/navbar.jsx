import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const [divOpen, setDivOpen] = useState(false);

    const toggleDiv = () => {
        setDivOpen(!divOpen);
    };

    return (
        <div className="h-[90px]  p-3 flex items-center relative">
            <div className="w-[100%] 
            flex  items-center gap-x-44  md:gap-12 lg:gap-16 text-[25px]
             text-[#7D828F] ">
              <Link className="w-[150px]" to="/">  <img src="/imges/logo.svg" alt="" /></Link>
                <Link to="/protfulio" className="hidden cursor-pointer md:block lg:block">Portfolio</Link>
                <Link to="/about" className="hidden cursor-pointer md:block lg:block">About.Us</Link>
                <p className="hidden cursor-pointer md:block lg:block">Contact</p>
                <img onClick={toggleDiv} className="w-[24px] h-[17px] block md:hidden lg:hidden cursor-pointer" src="/imges/icons/icon-hamburger.svg" alt="" />

                {divOpen && (
                    <div className="absolute top-[75px] left-[15%]  z-10">
                        <div className="space-y-1 w-[275px] shadow-lg font-semibold text-[#1B1D23] bg-[#FFFFFF] mt-4 p-3 rounded-lg  text-[30px] pl-10 list-none">
                            <Link to="/protfulio" className="cursor-pointer w-[140px] p-1 rounded-lg hover:bg-gray-100">Portfolio</Link> <br />
                            <Link to="/about"  className="cursor-pointer w-[140px] p-1 rounded-lg hover:bg-gray-100">About Us</Link>
                            <p className="cursor-pointer w-[140px] p-1 rounded-lg hover:bg-gray-100">Contact</p>
                        </div>
                    </div>
                )}
            </div>
            <div className="w-[50%] hidden md:block lg:block"></div>
        </div>
    );
};

export default Navbar;
