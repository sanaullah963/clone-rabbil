import React from "react";

import { FaPlus } from "react-icons/fa";
// import hero icon && image
import Image from "next/image";

import icon_1 from "@/Images/icon/1.png";
import icon_2 from "@/Images/icon/2.png";
import icon_3 from "@/Images/icon/3.png";
import icon_4 from "@/Images/icon/4.png";
import icon_5 from "@/Images/icon/5.png";
import icon_6 from "@/Images/icon/6.png";
import icon_7 from "@/Images/icon/7.png";
import icon_8 from "@/Images/icon/8.png";

export default function Rounded_icon() {
  const iconCSS =
    "rounded-full w-3/6 ring-2 ring-green-600 transition-all delay-100 hover:mt-[-8px]";

  return (
    <main>
      {/* hero icon */}
      <div className="flex relative  mt-10">
        <span className=" absolute ">
          <Image className={iconCSS} src={icon_1} />
        </span>
        <span className="absolute ms-[50px]">
          <Image className={iconCSS} src={icon_2} />
        </span>
        <span className=" absolute ms-[100px] ">
          <Image className={iconCSS} src={icon_3} />
        </span>
        <span className=" absolute ms-[150px]">
          <Image className={iconCSS} src={icon_4} />
        </span>
        <span className=" absolute ms-[200px]">
          <Image className={iconCSS} src={icon_5} />
        </span>
        <span className=" absolute ms-[250px]">
          <Image className={iconCSS} src={icon_6} />
        </span>
        <span className=" absolute ms-[300px]">
          <Image className={iconCSS} src={icon_7} />
        </span>
        <span className=" absolute ms-[350px]">
          <Image className={iconCSS} src={icon_8} />
        </span>
        <span className=" flex justify-center items-center absolute ms-[420px]">
          <h1 className="font-bold text-2xl mt-4">11</h1>
          <FaPlus className="mt-5" />
        </span>
      </div>
    </main>
  );
}
