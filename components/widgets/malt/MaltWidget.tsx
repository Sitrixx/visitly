"use client";

import Image from "next/image";
import Link from "next/link";
import maltLogo from "../../../public/images/Malt/malt-logo.svg";

const MaltWidget: React.FC = () => {
  return (
    <Link
      href={"https://www.malt.fr/profile/enzoauriau"}
      target="_blank"
      id="malt-link"
      className="flex flex-row justify-between bg-[#D5534F] rounded-2xl w-5/6 m-2 py-4 px-6 md:px-7 md:py-4 items-center"
    >
      <div className="flex flex-row items-center">
        <div className="w-16 md:w-24">
          <Image alt="malt-logo" src={maltLogo} className="h-auto max-w-full" />
        </div>
        <div className="m-3 text-lg font-semibold md:text-3xl md:m-5">
          <h1 className="text-white">Enzo AURIAU</h1>
        </div>
      </div>
    </Link>
  );
};

export default MaltWidget;
