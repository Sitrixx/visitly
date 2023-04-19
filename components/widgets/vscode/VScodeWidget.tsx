"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import vscodeLogo from "../../../public/images/VScode/vscode-alt.svg";
import axios from "axios";
// import {
//   SiJavascript,
//   SiTypescript,
//   SiHtml5,
//   SiCplusplus,
//   SiCss3,
//   SiSwift,
//   SiMysql,
// } from "react-icons/si";
// import { VscJson } from "react-icons/vsc";

interface VScodeProps {
  vscode_project: string;
  vscode_file: string;
}

const VScodeWidget: React.FC = () => {
  const [project, setProject] = useState<VScodeProps>({
    vscode_project: "",
    vscode_file: "",
  });

  // const getLanguageIcon = (filename: string) => {
  //   const extension = filename.split(".").pop();

  //   switch (extension) {
  //     case "js":
  //     case "jsx":
  //       return <SiJavascript color="#f7df1e" />;
  //     case "ts":
  //     case "tsx":
  //       return <SiTypescript color="#007acc" />;
  //     case "html":
  //       return <SiHtml5 />;
  //     case "css":
  //       return <SiCss3 />;
  //     case "c":
  //       return <SiCplusplus />;
  //     case "cpp":
  //       return <SiCplusplus />;
  //     case "swift":
  //       return <SiSwift color="#FF432A" />;
  //     case "sql":
  //       return <SiMysql />;
  //     case "json":
  //       return <VscJson />;
  //     default:
  //       return;
  //   }
  // };

  useEffect(() => {
    const getProject = async () => {
      await axios
        .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/vscode`)
        .then((response) => {
          setProject({
            vscode_project: response.data.project[0].vscode_project,
            vscode_file: response.data.project[0].vscode_file,
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    getProject();
  }, []);

  return (
    <div className="flex flex-row justify-between bg-[#005BA4] rounded-2xl w-5/6 m-2 py-4 px-6 md:px-7 md:py-4 items-center">
      <div className="flex flex-row items-center">
        <div className="w-10 md:w-14">
          <Image
            alt="vscode-logo"
            src={vscodeLogo}
            className="h-auto max-w-full"
          />
        </div>
        <div className="mx-4 md:mx-6 md:my-2">
          <p className="text-white text-lg md:text-3xl font-semibold">
            {project.vscode_project}
          </p>
          <div className="flex flex-row text-white">
            {/* <div className="">{getLanguageIcon(project.vscode_file)}</div> */}
            <p className="text-base md:text-xl">{project.vscode_file}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VScodeWidget;
