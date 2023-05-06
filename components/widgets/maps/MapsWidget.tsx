"use client";

import Link from "next/link";

const MapsWidget: React.FC = () => {
  return (
    <Link
      href={"https://www.google.fr/maps/place/Paris/"}
      target="_blank"
      className="flex flex-row justify-between h-[40vh] bg-test bg-contain bg-center border-l-[5px] border-b-[5px] border-orange-200 w-5/6 m-2 py-4 px-6 md:px-7 md:py-4 items-center lg:row-span-3"
    ></Link>
  );
};

export default MapsWidget;
