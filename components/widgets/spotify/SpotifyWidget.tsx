"use client";

// import Image from "next/image";
// import spotifyLogo from "../../../public/images/Spotify/";
// import useSpotifyAuth from "@/hooks/spotify/useSpotifyAuth";

const SpotifyWidget: React.FC = () => {
  return (
    <div className="flex flex-row justify-between bg-[#1DB954] rounded-2xl w-5/6 m-2 py-4 px-6 md:px-7 md:py-4 items-center">
      <div className="flex flex-row items-center">
        <div className="w-16 md:w-24">
          {/* <Image alt="malt-logo" src={spotifyLogo} className="h-auto max-w-full" /> */}
        </div>
        <div className="m-3 text-lg font-semibold md:text-3xl md:m-5">
          <h1 className="text-white">Enzo AURIAU</h1>
        </div>
      </div>
    </div>
  );
};

export default SpotifyWidget;
