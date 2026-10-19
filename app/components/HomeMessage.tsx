'use client';

import Image, { StaticImageData } from "next/image";
import { useState } from "react"
import homeMessageImage1 from "../assets/trello-home-message-1.png"
import homeMessageImage2 from "../assets/trello-home-message-2.png"
import homeMessageImage3 from "../assets/trello-home-message-3.png"
import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline'

const HomeMessage = () => {
  const [imageSrc, setImageSrc] = useState<StaticImageData>(homeMessageImage1);
  const [ activeTab, setActiveTab ] = useState("inbox");
  function handleClick(img: StaticImageData, tab:  string) {
    setImageSrc(img);
    setActiveTab(tab);
  }
  return (
    <main className="px-20 mb-4">
      <div className="flex flex-col gap-2">
        <p className="text-xl font-extrabold">Trello 101</p>
        <p className="text-md text-justify font-semibold">
          Stay organized and efficient with Inbox, Boards, and Planner. Every <br />
          to-do, idea, or responsibility—no matter how small—finds its place, <br />
          keeping you at the top of your game.
        </p>
      </div>
      <div className="flex flex-row justify-center items-start gap-4 mt-10 p-6">
        <div className="flex flex-col gap-4 p-4">
          <button
            onClick={() => handleClick(homeMessageImage1, "inbox") }
            className={ `w-[22.5rem] px-4 py-6 flex flex-col gap-2 justify-center items-start rounded-md
              ${
                activeTab === "inbox"
                ? "bg-[#f5f5f5] border-l-8 border-[dodgerblue] shadow-md"
                : ""
              }`}
          >
            <b className="text-xl">Inbox</b>
            <p className="text-start">
            When it&apos;s on your mind, it goes in your Inbox. Capture your
            to-dos from anywhere, anytime.
            </p>
          </button>
          <button
            onClick={() => handleClick(homeMessageImage2, "boards") }
            className={ `w-[22.5rem] px-4 py-6 flex flex-col gap-2 justify-center items-start rounded-md
              ${
                activeTab === "boards"
                ? "bg-[#f5f5f5] border-l-8 border-[dodgerblue] shadow-md"
                : ""
              }`}
          >
            <b className="text-md">Boards</b>
            <p className="text-start">
            Your to-do list may be long, but it can be manageable! Keep tabs on
            everything from &quot;to-dos to tackle&quot; to &quot;mission
            accomplished!&quot;
            </p>
          </button>
          <button
            onClick={() => handleClick(homeMessageImage3, "planner") }
            className={ `w-[22.5rem] p-4 flex flex-col gap-2 justify-center items-start rounded-md
              ${
                activeTab === "planner"
                ? "bg-[#f5f5f5] border-l-8 border-[dodgerblue] shadow-md"
                : ""
              }`}
          >
            <b className="text-md">Planner</b>
            <p className="text-start">
            Drag, drop, get it done. Snap your top tasks into your calendar and
            make time for what truly matters.
            </p>
          </button>
        </div>
        <div className="flex-grow flex flex-col justify-end items-end">
          <EllipsisHorizontalIcon className="h-16 w-16" />
          <div className="bg-[#f5f5f5] relative rounded-2xl">
            <Image src={imageSrc} alt="Home message image" width={800} height={350} className="rounded-2xl object-contain"></Image>
        </div>
        </div>
      </div>
    </main>
  );
};

export default HomeMessage;
