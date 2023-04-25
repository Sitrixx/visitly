"use client";
import Image from "next/image";
// import spotifyLogo from "../../../public/images/Spotify/";
import useSpotifyAuth from "@/hooks/spotify/useSpotifyAuth";
import Link from "next/link";

const SpotifyWidget: React.FC = () => {
  const { song, isLoading, error } = useSpotifyAuth();

  if (!song || error || isLoading) {
    return null;
  }

  return (
    <div className="flex flex-row justify-between bg-gradient-spotify rounded-2xl w-5/6 m-2 py-4 px-6 md:px-7 md:py-4 items-center">
      <div className="flex flex-row items-center">
        <div className="w-12 md:w-[4.25rem]">
          <Link href={song.item.album.external_urls.spotify} target="_blank">
            <Image
              alt="song-image"
              src={song.item.album.images[1].url}
              className="h-auto max-w-full rounded-md md:rounded-lg"
              width={300}
              height={300}
            />
          </Link>
        </div>
        <div className="mx-4 md:mx-6 md:my-2">
          <Link href={song.item.external_urls.spotify} target="_blank">
            <h1 className="text-white text-lg font-semibold md:text-3xl hover:underline">
              {song.item.name}
            </h1>
          </Link>
          <div className="flex flex-row">
            {song.item.artists.map((_artist, index) => (
              <Link
                key={_artist.external_urls.spotify}
                href={_artist.external_urls.spotify}
                target="_blank"
              >
                <h1 className="text-white text-md font-light md:text-xl hover:underline">
                  {_artist.name}
                  {index < song.item.artists.length - 1 && ", "}
                </h1>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpotifyWidget;
