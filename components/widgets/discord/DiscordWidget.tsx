"use client";

import Image from "next/image";
import Link from "next/link";
import discordLogo from "../../../public/images/Discord/logo.png";

const DiscordWidget: React.FC = () => {
  return (
    <Link
      href={"https://www.discord.com/"}
      target="_blank"
      id="linkedin-link"
      className="flex flex-row justify-between bg-[#7289da] w-5/6 m-2 py-4 px-6 md:px-7 md:py-4 items-center border-l-[5px] border-b-[5px] border-[#9eb3ff] hover:border-none"
    >
      <div className="flex flex-row items-center">
        <div className="w-10 md:w-14">
          <Image
            alt="discord-logo"
            src={discordLogo}
            className="h-auto max-w-full"
          />
        </div>
        <div className="m-3 text-lg font-semibold md:text-3xl lg:text-2xl md:m-5">
          <h1 className="text-white">Sitrixx</h1>
        </div>
      </div>
    </Link>
  );
};

export default DiscordWidget;
