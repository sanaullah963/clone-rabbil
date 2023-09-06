import { Input } from "postcss";
import React from "react";
import { FaPlus } from "react-icons/fa";

// import hero icon && image
import Image from "next/image";
import hero from "@/Images/hero.png";
import Rounded_icon from "./Rounded_icon";

export default function Hero() {
 

  return (
    <main>
      <div className="bg-green-50 ">
        <div className=" lg:container m-auto w-full h-screen min-h-[550px] lg:flex ">
          {/* left div */}
          <div className="w-1/2 h-full">
            {/* left title */}
            <div>
              <h1 className="text-4xl font-semibold mt-5 mb-2">
                Learn Confidently with
              </h1> 
              <h1 className="text-4xl color font-bold mb-3">INTISAR SANAULLH</h1>
              <h2 className="text-xl">
                Are you looking for amazing e-course platform?
              </h2>
              <h2 className="text-xl">Don't worry! We got it for you!</h2>
            </div>
            {/* hero input */}
            <div className=" mt-10 rounded-full w-[450px] h-[70px] bg-white flex items-center justify-center pe-3">
              <input
                type="text"
                className="h-full rounded-l-full w-full outline-none ps-5 text-lg"
                placeholder="Searching for......."
              />
              <button className="btn-color px-7 py-3 text-xl rounded-full">
                Search
              </button>
            </div>
            {/* milestone */}
            <div className="flex justify-around mt-10">
              <div className="">
                <span className="flex">
                  <h1 className="text-4xl font-semibold text-gray-900">100</h1>
                  <FaPlus className="text-2xl relative" />
                </span>
                <p className="text-gray-700 text-xl">Enrolled</p>
              </div>
              <div className="">
                <span className="flex">
                  <h1 className="text-4xl font-semibold text-gray-900">10</h1>
                  <FaPlus className="text-2xl relative" />
                </span>
                <p className="text-gray-700 text-xl">course</p>
              </div>
              <div className="">
                <span className="flex">
                  <h1 className="text-4xl font-semibold text-gray-900">60K</h1>
                  <FaPlus className="text-2xl relative" />
                </span>
                <p className="text-gray-700 text-xl">Followers</p>
              </div>
            </div>
            {/* hero icon */}
            <Rounded_icon/>
          </div>
          {/* right div */}
          <div className="w-1/2 h-full flex justify-end ">
            <Image src={hero} />
          </div>
        </div>
      </div>
    </main>
  );
}
