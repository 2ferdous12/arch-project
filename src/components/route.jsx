import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";
const route = () => {
    return (
        <div className=" md:pl-[100px] lg:pl-[100px] md:pr-[100px] lg:pr-[100px]
        max-w-[1400px] mx-auto bg-[#FFFF] shadow-md pl-[0px] pr-[0px]" >
          <Navbar></Navbar>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
    );
};

export default route;