import { useState } from "react";
import { NavLink } from "react-router-dom";

const navbar = () => {
    const [divOpen, setDivOpen] = useState(false);

    const toggleDiv = () => {
        setDivOpen(!divOpen);
    };


    return (
        <div className="h-[90px]  p-3 flex items-center">
            <div>
                <div className="w-[100%] flex  items-center gap-x-52  md:gap-12 lg:gap-16 text-[25px] text-[#7D828F] ">
                    <img src="/imges/logo.svg" alt="" />
                    <p className="hidden cursor-pointer md:block lg:block">Portfolio</p>
                    <p className="hidden cursor-pointer md:block lg:block">About Us</p>
                    <p className="hidden cursor-pointer md:block lg:block">Contact</p>
                    <img onClick={toggleDiv} className="w-[24px] h-[17px] block md:hidden lg:hidden cursor-pointer" src="/public/imges/icons/icon-hamburger.svg" alt="" />

                    {divOpen && (
                        <div className="absolute top-20 left-[15%]">
                            <div className="space-y-1 w-[275px] shadow-lg font-semibold text-[#1B1D23]
                             bg-[#FFFFFF] mt-4 p-3 rounded-lg  text-[30px] pl-10 list-none">
                                <p className="cursor-pointer w-[140px] p-1 rounded-lg hover:bg-gray-100">Portfolio</p>
                                <p className="cursor-pointer w-[140px] p-1 rounded-lg hover:bg-gray-100">About Us</p>
                                <p className="cursor-pointer w-[140px] p-1 rounded-lg hover:bg-gray-100">Contact</p>
                            </div>
                        </div>
                    )}

                </div>
                <div className="w-[50%] hidden md:block lg:block"></div>
            </div>
        </div>
    );
};

export default navbar;