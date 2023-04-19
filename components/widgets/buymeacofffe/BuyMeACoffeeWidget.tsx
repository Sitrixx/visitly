"use client";

import Image from "next/image";
import Link from "next/link";
import buyMeACoffeLogo from "../../../public/images/BuyMeACoffee/bmc-logo.jpeg";

const BuyMeACoffeWidget: React.FC = () => {
  return (
    <Link
      href={"https://www.buymeacoffee.com/sitrixxx"}
      target="_blank"
      id="buymeacoffee-link"
      className="flex flex-row justify-between bg-[#FFDC03] rounded-2xl w-5/6 m-2 py-4 px-6 md:px-7 md:py-4 items-center"
    >
      <div className="flex flex-row items-center">
        <div className="w-9 md:w-14">
          <Image
            alt="malt-logo"
            src={buyMeACoffeLogo}
            className="h-auto max-w-full"
          />
        </div>
        <div className="m-3 text-lg font-semibold md:text-3xl md:m-5">
          <h1 className="text-white">Sitrixx</h1>
        </div>
      </div>
    </Link>
  );
};

export default BuyMeACoffeWidget;
