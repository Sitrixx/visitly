"use client";

import Image from "next/image";
import githubLogo from "../../../public/images/Github/github.svg";
import useFetchGithub, { IGithubData } from "@/hooks/github/useFetchGithub";
import Link from "next/link";
import { repos } from "../../../constants/github";
import clsx from "clsx";

interface IGithubProps {
  username: string;
}

type DataProps = {
  data: IGithubData;
};

const FallbackPulse = () => {
  return (
    <div className="lg:flex lg:flex-row lg:w-full lg:items-center lg:justify-between">
      <div className="mb-1 pt-[12%] w-16 md:w-32 lg:pt-[7%] lg:w-24 bg-slate-700 max-w-full rounded-sm md:rounded-md"></div>
      <div className="mb-1 pt-[12%] w-16 md:w-32 lg:pt-[7%] lg:w-24 bg-slate-700 max-w-full rounded-sm md:rounded-md"></div>
      <div className="mb-1 pt-[12%] w-16 md:w-32 lg:pt-[7%] lg:w-24 bg-slate-700 max-w-full rounded-sm md:rounded-md"></div>
    </div>
  );
};

const RightGithubInfosSection = ({ data }: DataProps) => {
  return (
    <div className="lg:flex lg:flex-row lg:w-full lg:items-center lg:justify-between">
      <h1 className="text-white lg:text-base">
        {String(data.followers)} FOLLOWERS
      </h1>
      <h1 className="text-white lg:text-base">
        {String(data.public_repos)} REPOS
      </h1>
      <h1 className="text-white lg:text-base">
        {String(data.public_gists)} GISTS
      </h1>
    </div>
  );
};

const GithubWidget = ({ username }: IGithubProps) => {
  const { data, isLoading, error } = useFetchGithub(username);

  return (
    <Link
      href={!data || error || isLoading ? "" : data.html_url}
      id="github-link"
      target="_blank"
      className="flex flex-row justify-between lg:min-h-[50vh] lg:flex-col lg:self-start bg-black w-5/6 m-2 py-4 px-6 md:px-7 md:py-4 relative items-center lg:items-start border-l-[5px] border-b-[5px] border-gray-400 hover:border-none lg:justify-self-end lg:row-span-3 lg:col-start-1"
    >
      <div className="flex flex-row w-4/6 items-center space-x-4 lg:mt-2">
        <div className="w-10 md:w-14">
          <Image
            alt="github-logo"
            src={githubLogo}
            className="min-w-full min-h-full"
          />
        </div>
        <div
          className={`text-lg font-semibold md:text-3xl lg:text-2xl ${
            (!data || error || isLoading) && "animate-pulse"
          }`}
        >
          {!data || error || isLoading ? (
            <div className="mb-1 pt-[14%] w-24 md:w-64 lg:w-20 bg-slate-700 max-w-full rounded-sm md:rounded-md"></div>
          ) : (
            <h1 className="text-white">{data.login}</h1>
          )}
        </div>
      </div>
      <div className="w-full flex-col hidden lg:flex justify-between items-center space-y-5">
        {repos.map((item, index) => {
          return (
            <Link
              key={index}
              href={item.link}
              target="_blank"
              className="text-white w-full bg-slate-700 rounded-xl p-4 flex flex-row justify-between"
            >
              <h1>{item.title}</h1>
              <div className="flex flex-row space-x-2 items-center justify-center text-sm">
                <div
                  className={clsx("w-2 h-2 rounded-full")}
                  style={{ backgroundColor: item.color }}
                ></div>
                <h4>{item.techno}</h4>
              </div>
            </Link>
          );
        })}
      </div>
      <div
        className={`flex justify-end items-end flex-col w-2/6 text-xxs md:text-lg md:font-medium lg:w-full ${
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
