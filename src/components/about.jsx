

const about = () => {
    return (
        <div>
            <div className="flex items-center relative mb-10">
                <div className="w-[371px] md:w-[573px] lg:w-[635px] h-[720px]">
                    <img className="w-[635px] h-[720px]" src="/imges/about/desktop/image-hero.jpg" alt="" />
                </div>

                <div className="w-[371px] md:w-[573px] lg:w-[793px]  bg-white absolute
           top-[32%] md:top-[32%] lg:top-[32%] left-[0%] md:left-[15%] lg:left-[42%]
             h-[503px] flex justify-center items-center">
                    <div className="space-y-10 ">
                        <p className="text-5xl font-bold">Your team of <br /> professionals</p>
                        <p className="w-[311px] md:w-[445px] lg:w-[445px] h-[96px] text-[#60636D]">Our small team of world-class professionals
                            will work with you every step of the way. Strong
                            relationships are at the core of everything we do.
                            This extends to the relationship
                            our projects have with their surroundings.</p>
                    </div>
                </div>
                <div className="w-[645px] hidden md:block lg:block md:w-[392px] lg:w-[645px] h-[200px] absolute top-32 left-[45%] md:left-[45%] lg:left-[45%]">
                    <img className="w-[645px] h-[200px]" src="/imges/about/desktop/About.png" alt="" />
                </div>
   
            </div>

            <div className=" mt-[100px] mb-[100px] flex justify-between">
                <div className="w-[311px] mx-auto md:w-[574px] lg:w-[445px] space-y-5">
                    <h1 className="text-6xl font-bold">Our <br /> Heritage </h1>
                    <p className="text-[#60636D]"> Founded in 2007, we started as a trio of architects.
                        Our complimentary skills and relentless attention to detail
                        turned Arch into one of the most sought after boutique firms
                        in the country.
                    </p>
                    <p className="text-[#60636D]">Speciliazing in Urban Design allowed us to focus on creating exceptional structures
                        that live in harmony with their surroundings. We consider every
                        detail from every surrounding element to inform our designs. </p>

                    <p className="text-[#60636D]">Our small team of world-class professionals provides input on every project.</p>
                </div>
                <div className=" hidden md:hidden lg:block w-[540px] h-[568px]">
                    <img className="w-[540px] h-[568px]" src="/imges/about/desktop/image-heritage.jpg" alt="" />
                </div>
            </div>

        <div className="flex flex-col gap-5 md:flex-row lg:flex-row justify-between">
            <div>
                <h3 className="text-6xl font-bold">The <br />Leaders</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mx-auto">
                <div>
                    <img className="w-[350px] h-[320px]" src="/imges/about/desktop/avatar-jake.jpg" alt="" />
                    <p className="font-semibold text-3xl">Jake Richards</p>
                    <p className="text-[#1B1D23]">Chief Architect</p>
                </div>
                <div>
                    <img className="w-[350px] h-[320px]" src="/imges/about/desktop/avatar-thompson.jpg" alt="" />
                    <p className="font-semibold text-3xl">Thompson Smith</p>
                    <p className="text-[#1B1D23]">Head of Finance</p>
                </div>
                <div>
                    <img className="w-[350px] h-[320px]" src="/imges/about/desktop/avatar-jackson.jpg" alt="" />
                    <p className="font-semibold text-3xl">Jackson Rourke</p>
                    <p className="text-[#1B1D23]">Lead Designer</p>
                </div>
                <div>
                    <img className="w-[350px] h-[320px]" src="/imges/about/desktop/avatar-maria.jpg" alt="" />
                    <p className="font-semibold text-3xl">Maria Simpson</p>
                    <p className="text-[#1B1D23]">Senior Architect</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default about;