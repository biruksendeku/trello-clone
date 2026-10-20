"use client";

import { useState } from "react";
import Image from "next/image";
import {
  EllipsisHorizontalIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { SiVisa, SiCoinbase, SiJohndeere, SiZoom } from "react-icons/si";
import hyattImg from "../assets/hyatt.png";
import fenderImg from "../assets/fender.png";
import Reviewer1 from "./Reviewer1";
import Reviewer2 from "./Reviewer2";
import Reviewer3 from "./Reviewer3";

const reviewers = [Reviewer1, Reviewer2, Reviewer3];

const ReviewPage = () => {
  const [index, setIndex] = useState(0);

  const goBack = () =>
    setIndex((i) => (i - 1 + reviewers.length) % reviewers.length);
  const goForward = () => setIndex((i) => (i + 1) % reviewers.length);

  const CurrentReviewer = reviewers[index];

  return (
    <main className="flex flex-col gap-4 px-18 py-0">
      <div className="flex flex-row gap-4 justify-end items-center px-8">
        <EllipsisHorizontalIcon className="h-16 w-16" />
        <button
          onClick={goBack}
          aria-label="Previous review"
          className="bg-[#f0f0f0] rounded-full p-0.5 hover:bg-[#f5f5f5] cursor-pointer"
        >
          <ChevronLeftIcon className="h-6 w-6 text-gray-500" />
        </button>
        <button
          onClick={goForward}
          aria-label="Next review"
          className="bg-[#f0f0f0] rounded-full p-0.5 hover:bg-[#f5f5f5] cursor-pointer"
        >
          <ChevronRightIcon className="h-6 w-6 text-gray-500" />
        </button>
      </div>

      {/* the dynamic part */}
      <CurrentReviewer />

      <div className="flex flex-col gap-0 justify-center items-center mt-8">
        <p className="text-xl font-normal">
          Join a community of millions of users globally who are using Trello to
          get more done.
        </p>
        <div className="flex flex-row gap-10 justify-center items-center">
          <SiVisa className="h-24 w-auto" title="Visa" />
          <SiCoinbase className="h-10 w-auto" title="Coinbase" />
          <SiJohndeere className="h-12 w-auto" title="John Deere" />
          <SiZoom className="h-12 w-auto" title="Zoom" />
          <Image src={hyattImg} width={200} alt="Hyatt" />
          <Image src={fenderImg} width={110} alt="Fender" />
        </div>
      </div>
    </main>
  );
};

export default ReviewPage;