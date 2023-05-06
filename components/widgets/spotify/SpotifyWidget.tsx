"use client";
import Image from "next/image";
import useSpotifyAuth from "@/hooks/spotify/useSpotifyAuth";
import Link from "next/link";
import { useRef } from "react";

const SpotifyWidget: React.FC = () => {
  const { song, isLoading, error } = useSpotifyAuth();
  const divRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  return (
    <div className="flex flex-row lg:min-h-[40vh] lg:row-span-3 lg:justify-self-end bg-gradient-spotify w-5/6 m-2 py-4 px-6 md:px-7 md:py-4 items-center border-l-[5px] border-b-[5px] border-green-500 hover:border-none lg:h-full lg:flex-col lg:justify-center">
      <div className="w-12 md:w-[4.25rem] lg:w-32 lg:h-4/6 lg:flex lg:flex-col lg:justify-center lg:items-center">
        {!song || error || isLoading ? (
          <div className="pt-[100%] lg:p-[60%] bg-slate-700 max-w-full rounded-md md:rounded-lg animate-pulse"></div>
        ) : (
          <Link
            href={song.item.album.external_urls.spotify}
            target="_blank"
            id="album-cover"
          >
            <Image
              alt="song-image"
              src={song.item.album.images[1].url}
              className="h-auto max-w-full rounded-md md:rounded-lg lg:shadow-spotify "
              width={300}
              height={300}
            />
          </Link>
        )}
      </div>
      <div className="ml-4 md:ml-6 md:my-2 lg:mx-8 truncate w-full lg:h-2/6 lg:flex lg:flex-col lg:justify-end lg:items-start">
        {!song || error || isLoading ? (
          <div className="mb-1 pt-[9%] w-64 md:w-96 md:pt-[7%] animate-pulse bg-slate-700 max-w-full rounded-sm md:rounded-md"></div>
        ) : (
          <Link
            href={song.item.external_urls.spotify}
            target="_blank"
            id="title-name"
          >
            <h1
              ref={headingRef}
              className="text-white text-lg font-semibold md:text-3xl lg:text-2xl hover:underline"
            >
              {song.item.name}
            </h1>
          </Link>
        )}
        <div ref={divRef} className="flex flex-row">
          {!song || error || isLoading ? (
            <div className="mt-1 pt-[8%] w-32 md:w-64 md:pt-[6%] animate-pulse bg-slate-700 max-w-full rounded-sm md:rounded-md"></div>
          ) : (
            song.item.artists.map((_artist, index) => (
              <div key={_artist.external_urls.spotify}>
                <div className="flex flex-row text-white text-md font-light md:text-xl lg:text-lg">
                  <Link
                    href={_artist.external_urls.spotify}
                    target="_blank"
                    id="artists-name"
                    className="hover:underline"
                  >
                    {_artist.name}
                  </Link>
                  <span className="">
                    {index < song.item.artists.length - 1 && ","}
                  </span>
                  &nbsp;
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default SpotifyWidget;
