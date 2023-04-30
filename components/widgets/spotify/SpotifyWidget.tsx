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
    <div className="flex flex-row justify-between bg-gradient-spotify rounded-2xl w-5/6 m-2 py-4 px-6 md:px-7 md:py-4 items-center">
      <div
        className={`flex flex-row items-center ${
          (!song || error || isLoading) && "animate-pulse"
        }`}
      >
        <div className="w-12 md:w-[4.25rem]">
          {!song || error || isLoading ? (
            <div className="pt-[100%] bg-slate-700 max-w-full rounded-md md:rounded-lg"></div>
          ) : (
            <Link
              href={song.item.album.external_urls.spotify}
              target="_blank"
              id="album-cover"
            >
              <Image
                alt="song-image"
                src={song.item.album.images[1].url}
                className="h-auto max-w-full rounded-md md:rounded-lg"
                width={300}
                height={300}
              />
            </Link>
          )}
        </div>
        <div className="mx-4 md:mx-6 md:my-2 truncate max-w-[12rem] md:max-w-md">
          {!song || error || isLoading ? (
            <div className="mb-1 pt-[9%] w-64 md:w-96 md:pt-[7%] bg-slate-700 max-w-full rounded-sm md:rounded-md"></div>
          ) : (
            <Link
              href={song.item.external_urls.spotify}
              target="_blank"
              id="title-name"
            >
              <h1
                ref={headingRef}
                className="text-white text-lg font-semibold md:text-3xl hover:underline"
              >
                {song.item.name}
              </h1>
            </Link>
          )}
          <div ref={divRef} className="flex flex-row">
            {!song || error || isLoading ? (
              <div className="mt-1 pt-[8%] w-32 md:w-64 md:pt-[6%] bg-slate-700 max-w-full rounded-sm md:rounded-md"></div>
            ) : (
              song.item.artists.map((_artist, index) => (
                <Link
                  key={_artist.external_urls.spotify}
                  href={_artist.external_urls.spotify}
                  target="_blank"
                  id="artists-name"
                >
                  <h1 className="text-white text-md font-light md:text-xl hover:underline">
                    {_artist.name}
                    {index < song.item.artists.length - 1 && ","}
                    &nbsp;
                  </h1>
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpotifyWidget;
