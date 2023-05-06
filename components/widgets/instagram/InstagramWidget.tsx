"use client";

import Image from "next/image";
import Link from "next/link";
import instagramLogo from "../../../public/images/Instagram/logo.png";
import moi from "../../../public/images/Instagram/instamoi.jpg";

const InstagramWidget: React.FC = () => {
  return (
    <Link
      href={"https://www.instagram.com/enzoaur/"}
      target="_blank"
      id="linkedin-link"
      className="flex flex-row lg:flex-col bg-gradient-insta w-5/6 m-2 py-4 px-6 lg:space-y-4 md:px-7 md:py-4 items-center lg:items-start lg:justify-between lg:min-h-[37vh] lg:row-span-3 border-l-[5px] border-b-[5px] border-[#be529c] hover:border-none"
    >
      <div className="flex flex-row items-center">
        <div className="w-10 md:w-14">
          <Image
            alt="instagram-logo"
            src={instagramLogo}
            className="h-auto max-w-full"
          />
        </div>
        <div className="m-3 text-lg font-semibold md:text-3xl lg:text-2xl md:m-5">
          <h1 className="text-white">Enzo AURIAU</h1>
        </div>
      </div>
      <div className="hidden lg:flex w-full h-[10vh] xl:h-[36vh] min-h-60 bg-white rounded-xl flex-row p-4 space-x-3 xl:space-x-8">
        <div className="w-5/12 xl:w-4/12 2xl:w-3/12">
          <Image src={moi} alt="photo" className="h-full rounded-xl" />
        </div>
        <div className="text-xl font-medium flex flex-col space-y-4 w-7/12 xl:w-8/12">
          <h1 className="font-bold text-2xl">@enzoaur</h1>
          <div className="xl:flex xl:flex-row xl:w-full xl:items-center xl:space-x-10 text-lg">
            <p className="text-sm">3 posts</p>
            <p className="text-sm">144 followers</p>
            <p className="text-sm">633 following</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default InstagramWidget;
