"use client";
import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { GrClose } from "react-icons/gr";
import Image from "next/image";
import Link from "next/link";
import AuthLogin from "./AuthLogin";
import logo from "../../public/model2.png";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className=" md:px-5 lg:px-24">
      <nav className="lg:hidden relative z-50">
        <div className="flex py-2 justify-between items-center px-4">
          <div>
            <Image src={logo} alt="logo" className="w-[50px]" />
          </div>
          <div className="visible flex items-center">
            <button
              id="open"
              onClick={() => setMenu(!menu)}
              className={` ${
                menu ? "hidden" : ""
              } focus:outline-none focus:ring-2 focus:ring-black`}
            >
              <CiMenuFries />
            </button>
            <ul
              id="list"
              className={` ${
                menu ? "" : "hidden"
              } p-2 border-r bg-white absolute rounded top-0 left-0 right-0 shadow mt-24`}
            >
              <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-[#2B7257] duration-300 focus:text-indigo-700 focus:outline-none">
                <Link
                  href="/"
                  className="ml-2 focus:outline-none focus:ring-2 focus:ring-black"
                >
                  <span className="font-bold">Home</span>
                </Link>
              </li>
              <li
                className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal pt-2 pb-4 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none"
                //   onclick="dropdownHandler(this)"
              >
                <AuthLogin />
              </li>
            </ul>
            <div className="xl:hidden">
              <button
                id="close"
                className={` ${
                  menu ? "" : "hidden"
                } close-m-menu focus:ring-2 focus:ring-black focus:outline-none`}
                onClick={() => setMenu(!menu)}
              >
                <GrClose />
              </button>
            </div>
          </div>
        </div>
      </nav>
      <nav className="f-f-l relative z-10">
        <div className="relative z-10 mx-auto container hidden w-full px-4 xl:px-0 lg:flex justify-between items-center py-11">
          <div>
            <Image src={logo} alt="logo" className="w-[50px]" />
          </div>
          <div className="flex items-center text-black text-base font-medium">
            <ul className="flex items-center pr-3 xl:pr-12">
              <li className="cursor-pointer hover:text-[#2B7257] duration-300 ease-in">
                <Link
                  href="/"
                  className="focus:outline-none focus:ring-2 focus:ring-white"
                >
                  Home
                </Link>
              </li>
              <li className="pl-3 lg:pl-5 xl:pl-8 cursor-pointer hover:text-gray-300 ease-in">
              </li>
            </ul>
            <AuthLogin />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
