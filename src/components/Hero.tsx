"use client";
import Image from "next/image";
import hero from '../../public/Hero 08.png'
import car1 from '../../public/car1.png'
import { CustomBtn } from ".";

function Hero() {
  return (
    <>
      <div className="relative w-full h-full pb-10">
        <div className="hidden md:block">
          <Image
            className="absolute bg-cover bg-center w-full h-full inset-0"
            src={hero}
            alt="img"
            width={500}
            height={500}
          />
        </div>
        <div className="relative px-4 xl:px-0 container mx-auto md:flex items-center gap-8">
          <div className="text-color w-full md:w-1/3 pt-16 lg:pt-32 xl:pt-12">
            <h1 className="text-4xl md:text-4xl lg:text-6xl w-11/12 lg:w-11/12 xl:w-full xl:text-6xl text-gray-900 font-extrabold f-f-l">
            Drive into Adventure
            </h1>
            <div className=" text-base lg:text-base md:pb-20 sm:pb-0 pt-10 xl:pt-6">
              <h2>
              Your gateway to automotive excitement. Discover the latest innovations, epic road trips, and a vibrant community of enthusiasts. Let every mile be a new story. Start your journey today!"
              </h2>
            </div>
            <div className="lg:flex">
              <CustomBtn  customCls="hidden md:block hover:opacity-90 text-base w-full xl:text-base xl:w-6/12 mt-4 xl:mt-8 py-4  bg-[#3E977C] hover:bg-[#2B7257] text-white font-semi-bold focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg" title="Start Your Adventure"/>

               <CustomBtn customCls="hidden md:block hover:opacity-90 text-base w-full xl:text-base xl:w-4/12 lg:ml-2 xl:ml-2 mt-4 xl:mt-8 f-f-r py-4 bg-indigo-200 text-indigo-600 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 rounded-lg" title="Explore Now"/>
            </div>
          </div>
          <Image
            className="w-full mt-8 md:mt-0 object-fill md:w-2/3 md:-ml-4 lg:-ml-4 xl:ml-0"
            src={car1}
            alt="sample page"
            role="img"
          />
         <CustomBtn customCls="md:hidden hover:opacity-90 text-base w-full xl:text-base xl:w-6/12 mt-4 xl:mt-8 f-f-r py-4  bg-[#3E977C] text-white font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3E977C] rounded-lg" title="Start Your Adventure"/>
         <CustomBtn customCls="md:hidden hover:opacity-90 text-base w-full xl:text-base xl:w-4/12 xl:ml-2 mt-4 xl:mt-8 f-f-r py-4  bg-indigo-200 text-indigo-600 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3E977C] rounded-lg" title="Explore Now"/>
        </div>
      </div>
    </>
  );
}

export default Hero;
