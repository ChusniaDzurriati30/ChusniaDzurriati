"use client";

import { RiYoutubeFill, RiLinkedinFill, RiGithubFill, RiWhatsappFill, RiFacebookFill, RiInstagramFill, RiStackOverflowFill } from "react-icons/ri";

import Link from "next/link";

const icons = [
  {
    path: "https://www.linkedin.com/in/chusniadzurriati/",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://github.com/ChusniaDzurriati30",
    name: <RiGithubFill />,
  },

  {
    path: "https://www.instagram.com/niaaadztt?igsh=MXZxeG14bWcyejh6Yw==",
    name: <RiInstagramFill />,
  },
];


const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index} target="_blank">
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
