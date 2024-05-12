import React from 'react';

const feature = ({data}) => {
    const {img, img_name, name, details} = data;

    return (
        <div className='mt-5'>
        <div className="hero w-[331px] md:w-[573px] lg:w-[350px] h-[240px] mx-auto md:h-[240px] lg:h-[560px]" >
         <div className="relative">
         <img className='h-[240px] md:h-[240px] lg:h-[560px]  w-[331px] md:w-[573px] lg:w-[350px]' src={img_name} alt="" />
         <div className=' hidden md:block lg:block absolute top-20 right-2'>
         <img src={img} alt="" />
         </div>
          <div className='absolute top-[70%] md:top-[70%]  lg:top-[80%]  left-10 ' >
         
         <p className='text-3xl font-bold text-white'>{name}</p>
         <p className='text-xl font-semibold text-white'>{details}</p>
          </div>
         </div>
       </div>
        </div>
    );
};

export default feature;