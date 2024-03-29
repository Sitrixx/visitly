"use client";

import { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";

export interface IGithubData {
  login: string;
  public_repos: number;
  followers: number;
  public_gists: number;
  html_url: string;
}

interface IHookState {
  data: IGithubData | null;
  isLoading: boolean;
  error: AxiosError | null;
}

function useFetchGithub(username: string): IHookState {
  const [data, setData] = useState<IGithubData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<AxiosError | null>(null);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://api.github.com/users/${username}`)
      .then((response) => {
        setIsLoading(false);
        setData(response.data);
      })
      .catch(function (error) {
        setIsLoading(false);
        setError(error);
      });
  }, [username]);

  return { data, isLoading, error };
}

export default useFetchGithub;
