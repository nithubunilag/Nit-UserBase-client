import { IMAGE_DIR } from "@/utils/constants";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="h-full w-full pb-10 flex items-center justify-center">
      <div className="w-[60%] mx-auto flex flex-col items-center justify-center">
        <Image
          alt="Empty State"
          src={`${IMAGE_DIR}/empty_state.png`}
          width={150}
          height={120}
          unoptimized
          priority
        />
        <h2 className="text-[#3B3B3B] text-xl font-medium my-4">
          No Information
        </h2>
        <p className="md:w-[70%] text-center text-base text-[#646464] font-normal">
          The about page is currently empty and would be filled once information
          is added
        </p>
      </div>
    </div>
  );
};

export default About;
