import { useState } from "react";


const contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        // Clear error message for the field being edited
        setErrors({
            ...errors,
            [e.target.name]: ''
        });

        // Update form data
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form= e.target;
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;
        console.log(name, email, message)

        const newErrors = {};
        if (!formData.name.trim()) {
            newErrors.name = 'Name field cannot be empty';
        }
        if (!formData.email.trim()) {
            newErrors.email = 'Email field cannot be empty';
        }
        if (!formData.message.trim()) {
            newErrors.message = 'Message field cannot be empty';
        }
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        console.log(' successfully');
    };


    return (
        <div>
            <div className="flex items-center relative mb-10">
                <div className="w-[371px] md:w-[573px] lg:w-[635px] h-[720px]">
                    <img className="w-[635px] h-[720px]" src="/imges/contact/desktop/image-hero.jpg" alt="" />
                </div>

                <div className="w-[371px] md:w-[573px] lg:w-[793px]  bg-white absolute
           top-[32%] md:top-[32%] lg:top-[32%] left-[0%] md:left-[15%] lg:left-[42%]
             h-[503px] flex justify-center items-center">
                    <div className="space-y-10 ">
                        <p className="text-5xl font-bold">Tell us about <br /> your project</p>
                        <p className="w-[311px] md:w-[445px] lg:w-[445px] h-[96px] text-[#60636D]">We d love to hear more about your project.
                            Please, leave a message below or give us a call. We have two offices, one in Texas and
                            one in Tennessee. If you find yourself nearby, come say hello!</p>
                    </div>
                </div>
                <div className="w-[645px] hidden md:block lg:block md:w-[392px] lg:w-[645px] h-[200px] absolute top-32 left-[45%] md:left-[45%] lg:left-[45%]">
                    <img className="w-[645px] h-[200px]" src="/imges/contact/desktop/Contact.png" alt="" />
                </div>

            </div>

            <div className="flex w-[311px] md:w-full lg:w-full mx-auto flex-col md:flex-col lg:flex-row gap-10  justify-between mt-20 mb-10">
                <div>
                    <p className="text-5xl font-bold">Contact <br />Details</p>
                </div>

                <div className="text-[#60636D] space-y-2">
                    <p>Main Office</p>
                    <p>Mail :	archone@mail.com</p>
                    <p>Address : 1892  Chenoweth Drive TN</p>
                    <p>Phone : 123-456-3451</p>
                    <div className="flex gap-2 items-center ml-0 md:ml-96 lg:ml-0 cursor-pointer">
                        <p className="font-semibold">View on Map</p>
                        <img className="w-[24px] h-[18px]" src="/imges/icons/icon-arrow.svg" alt="" />
                    </div>
                </div>

                <div className="text-[#60636D] space-y-2">
                    <p>Office II</p>
                    <p>Mail :	archtwo@mail.com</p>
                    <p>Address : b3399  Wines Lane TX</p>
                    <p>Phone : 832-123-4321</p>
                    <div className="flex gap-2 items-center ml-0 md:ml-96 lg:ml-0 cursor-pointer">
                        <p className="font-semibold">View on Map</p>
                        <img className="w-[24px] h-[18px]" src="/imges/icons/icon-arrow.svg" alt="" />
                    </div>
                </div>

            </div>

            <div className=" w-[371px] md:w-[572px] lg:w-[1110px]  h-[567px] md:h-[560px]  lg:h-[560px] mt-20 mx-auto">
                <img className="w-[371px] md:w-[572px] lg:w-[1110px]  h-[567px] md:h-[560px]  lg:h-[560px]" src="/imges/contact/desktop/image-map.png" alt="" />
            </div>

            <div className="flex flex-col md:flex-col lg:flex-row
             justify-between gap-20 mt-20 mb-[200px]">
                <div className=" w-[350px] p-4 h-[125px] text-6xl font-bold">
                    <h1>Connect with us</h1>
                </div>

                <div className="mx-auto w-[311px] md:w-[572px] lg:w-[730px]">

                <form onSubmit={handleSubmit} className="space-y-10 relative">
            <input
                className={`w-[311px] md:w-[572px] lg:w-[730px] font-semibold h-[40px] border-b-2 ${errors.name ? 'border-red-500' : 'border-[#C8CCD8]'}`}
                type="text"
                name="name"
                placeholder={errors.name ? 'Name (Required)' : 'Name'}
                value={formData.name}
                onChange={handleChange}
            />
           <div className="absolute top-[-15%] right-0">
           {errors.name && <p className="text-red-500 font-bold text-xl">Cant be empty</p>}
           </div>
            <input
                className={`w-[311px] md:w-[572px] lg:w-[730px] h-[40px] border-b-2 ${errors.email ? 'border-red-500' : 'border-[#C8CCD8]'}`}
                type="email"
                name="email"
                placeholder={errors.email ? 'Email (Required)' : 'Email'}
                value={formData.email}
                onChange={handleChange}
            />
            <div className="absolute top-[20%] right-0">
            {errors.email && <p className="text-red-500 font-bold text-xl">Cant be empty</p>}
            </div>
            
            <input
                className={`w-[311px] md:w-[572px] lg:w-[730px] h-[40px] border-b-2 ${errors.message ? 'border-red-500' : 'border-[#C8CCD8]'}`}
                type="text"
                name="message"
                placeholder={errors.message ? 'Message (Required)' : 'Message'}
                value={formData.message}
                onChange={handleChange}
            />
            <div className="absolute top-[60%] right-0">
            {errors.message && <p className="text-red-500 font-bold text-xl">Cant be empty</p>}
            </div>
            <div className="absolute right-0 md:right-[0%] lg:right-[0%] top-[80%]">
                <button type="submit" className="bg-black cursor-pointer w-[80px] h-[80px] flex justify-center items-center">
                    <img className="w-[24px] h-[18px]" src="/imges/icons/Group 18.svg" alt="" />
                </button>
            </div>
        </form>

                </div>
            </div>
        </div>
    );
};

export default contact;