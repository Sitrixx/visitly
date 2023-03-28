"use client";

import Image from "next/image";
import githubLogo from "../../../public/images/Github/github.svg";
import useFetchGithub from "@/hooks/github/useFetchGithub";
import Link from "next/link";

interface GithubProps {
  username: string;
}

const GithubWidget = ({ username }: GithubProps) => {
  const { data, isLoading, error } = useFetchGithub(username);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data || error) {
    return null;
  }

  return (
    <Link
      href={data.html_url}
      target="_blank"
      className="flex flex-row justify-between bg-black rounded-2xl w-5/6 m-2 py-4 px-6 md:px-7 md:py-4 items-center"
    >
      <div className="flex flex-row w-4/6 items-center">
        <div className="w-10 md:w-14">
          <Image
            alt="github-logo"
            src={githubLogo}
            className="h-auto max-w-full"
          />
        </div>
        <div className="m-3 text-lg font-semibold md:text-3xl md:m-5">
          <h1 className="text-white">{data.login}</h1>
        </div>
      </div>
      <div className="flex justify-end items-end flex-col w-2/6 text-xs md:text-lg md:font-medium">
        <h1 className="text-white">{String(data.followers)} FOLLOWERS</h1>
        <h1 className="text-white">{String(data.public_repos)} REPOS</h1>
        <h1 className="text-white">{String(data.public_gists)} GISTS</h1>
      </div>
    </Link>
  );
};

export default GithubWidget;
