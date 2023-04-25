"use client";

import { useState, useEffect } from "react";
import axios from "axios";

interface ISongInfos {
  is_playing: boolean;
  progress_ms: number;
  context: {
    external_urls: {
      spotify: string;
    };
  };
  item: {
    name: string;
    external_urls: {
      spotify: string;
    };
    duration_ms: number;
    album: {
      external_urls: {
        spotify: string;
      };
      name: string;
      images: {
        url: string;
      }[];
    };
    artists: {
      external_urls: {
        spotify: string;
      };
      name: string;
    }[];
  };
}

const useSpotifyAuth = () => {
  const [error, setError] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(true);
  const [song, setSong] = useState<ISongInfos | null>(null);

  const getAccessToken = async () => {
    const refresh_token: string =
      process.env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN ?? "";

    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: refresh_token,
      }),
      {
        headers: {
          Authorization: `Basic ${Buffer.from(
            `${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID}:${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET}`
          ).toString("base64")}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    return response.data;
  };

  useEffect(() => {
    const fetchCurrentlyPlayingSong = async () => {
      try {
        const { access_token } = await getAccessToken();

        const response = await axios.get(
          "https://api.spotify.com/v1/me/player/currently-playing",
          {
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
          }
        );

        if (response.status !== 200) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        setSong(response.data);
        setLoading(false);
      } catch (error) {
        if (typeof error === "string") {
          setError(error);
        }
      }
    };
    fetchCurrentlyPlayingSong();
  }, []);

  return { song, isLoading, error };
};

export default useSpotifyAuth;
