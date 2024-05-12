import { Outlet } from "react-router-dom";
import Navbar from "./navbar";

const route = () => {
    return (
        <div className=" md:pl-[100px] lg:pl-[145px] md:pr-[100px] lg:pr-[145px]
        max-w-[1400px] mx-auto bg-[#FFFF] shadow-md pl-[0px] pr-[0px]" >
          <Navbar></Navbar>
          <Outlet></Outlet>
        </div>
    );
};

export default route;