"use client";

import Image from "next/image";
import Link from "next/link";
import linkedinLogo from "../../../public/images/Linkedin/linkedin-logo.png";

const LinkedinWidget: React.FC = () => {
  return (
    <Link
      href={"https://www.linkedin.com/in/enzo-auriau/"}
      target="_blank"
      id="linkedin-link"
      className="flex flex-row justify-between bg-[#0077B5] w-5/6 m-2 py-4 px-6 md:px-7 md:py-4 items-center lg:col-start-2 lg:row-span-1 border-l-[5px] border-b-[5px] border-blue-300 hover:border-none transition ease-in-out"
    >
      <div className="flex flex-row items-center">
        <div className="w-10 md:w-14">
          <Image
            alt="linkedin-logo"
            src={linkedinLogo}
            className="h-auto max-w-full"
          />
        </div>
        <div className="m-3 text-lg font-semibold md:text-3xl lg:text-2xl md:m-5">
          <h1 className="text-white">Enzo AURIAU</h1>
        </div>
      </div>
    </Link>
  );
};

export default LinkedinWidget;
