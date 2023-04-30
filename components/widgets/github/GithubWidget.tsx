"use client";

import Image from "next/image";
import githubLogo from "../../../public/images/Github/github.svg";
import useFetchGithub, { IGithubData } from "@/hooks/github/useFetchGithub";
import Link from "next/link";

interface IGithubProps {
  username: string;
}

type DataProps = {
  data: IGithubData;
};

const FallbackPulse = () => {
  return (
    <>
      <div className="mb-1 pt-[12%] w-16 md:w-32 bg-slate-700 max-w-full rounded-sm md:rounded-md"></div>
      <div className="mb-1 pt-[12%] w-16 md:w-32 bg-slate-700 max-w-full rounded-sm md:rounded-md"></div>
      <div className="mb-1 pt-[12%] w-16 md:w-32 bg-slate-700 max-w-full rounded-sm md:rounded-md"></div>
    </>
  );
};

const RightGithubInfosSection = ({ data }: DataProps) => {
  return (
    <>
      <h1 className="text-white">{String(data.followers)} FOLLOWERS</h1>
      <h1 className="text-white">{String(data.public_repos)} REPOS</h1>
      <h1 className="text-white">{String(data.public_gists)} GISTS</h1>
    </>
  );
};

const GithubWidget = ({ username }: IGithubProps) => {
  const { data, isLoading, error } = useFetchGithub(username);

  return (
    <Link
      href={!data || error || isLoading ? "" : data.html_url}
      id="github-link"
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
        <div
          className={`m-3 text-lg font-semibold md:text-3xl md:m-5 ${
            (!data || error || isLoading) && "animate-pulse"
          }`}
        >
          {!data || error || isLoading ? (
            <div className="mb-1 pt-[14%] w-24 md:w-64 bg-slate-700 max-w-full rounded-sm md:rounded-md"></div>
          ) : (
            <h1 className="text-white">{data.login}</h1>
          )}
        </div>
      </div>
      <div
        className={`flex justify-end items-end flex-col w-2/6 text-xs md:text-lg md:font-medium ${
          (!data || error || isLoading) && "animate-pulse"
        }`}
      >
        {!data || error || isLoading ? (
          <FallbackPulse />
        ) : (
          <RightGithubInfosSection data={data} />
        )}
      </div>
    </Link>
  );
};

export default GithubWidget;
