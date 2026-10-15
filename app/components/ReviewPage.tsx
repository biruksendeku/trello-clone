import Link from "next/link";
import Image from "next/image";
import {
  EllipsisHorizontalIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from "@heroicons/react/24/outline";
import { SiVisa, SiCoinbase, SiJohndeere, SiZoom } from "react-icons/si";
import hyattImg from "../assets/hyatt.png";
import fenderImg from "../assets/fender.png";
import wwc from "../assets/wwc.png";

const ReviewPage = () => {
  return (
    <main className="flex flex-col gap-4 px-18 py-0">
      <div className="flex flex-row gap-4 justify-end items-center px-8">
        <EllipsisHorizontalIcon className="size-17" />
        <button className="bg-[#f0f0f0] rounded-full p-0.5">
          <ChevronLeftIcon className="h-6 w-6 text-gray-500" />
        </button>
        <button className="bg-[#f0f0f0] rounded-full p-0.5">
          <ChevronRightIcon className="h-6 w-6 text-gray-500" />
        </button>
      </div>
      {/* the dynamic part */}
      <div className="flex flex-row gap-8 rounded-md shadow-xl border-gray-300 border-1">
        <div className="flex flex-col justify-between items-start px-8 py-10 h-125">
          <div>
            <p className="text-2xl font-medium">
              [Trello is] great for simplifying complex processes. As a manager,
              I can chunk [processes] down into bite-sized pieces for my team
              and then deligate that out, but still keep a bird&apos;s-eye view.
            </p>
          </div>
          <div className="w-full flex flex-col gap-4">
            <hr className="w-40"/>
            <div className="flex flex-col gap-1">
              <p>Joey Rosenberg</p>
              <p>Global Leadership Director at Women Who Code</p>
            </div>
            <div className="flex flex-row justify-between items-center">
              <Image src={wwc} alt="Women Who Code" width={75} height={75}></Image>
              <Link className="text-[#0052cc] hover:text-[darkblue] hover:underline" href="https://www.atlassian.com/blog?_gl=1*6treur*_gcl_au*MTAxMTMzNDU5NS4xNzkwODc1MTU0*_ga*MjA5OTY5ODcyMS4xNzkwODc1MTU0*_ga_2PBSYQJXE3*czE3OTE5OTYxNzAkbzIyJGcwJHQxNzkxOTk2MTcwJGo2MCRsMCRoMA..">
                Read the story
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between items-center bg-[#0052cc] text-[white] rounded-md shadow-md w-230 px-6 py-8">
          <p className="text-3xl font-bold">
            75% of organizations report that Trello delivers value to their business within 30 days.
          </p>
          <Link href="https://www.techvalidate.com/tvid/1D4-3E6-170" className="text-[lightgray] hover:text-[white] hover:underline">
            Trello TechValidate Survey
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-0 justify-center items-center mt-8">
        <p className="text-xl font-normal">
          Join a community of millions of users globally who are using Trello to
          get more done.
        </p>
        <div className="flex flex-row gap-10 justify-center items-center">
          <SiVisa className="h-25 w-auto" title="Visa" />
          <SiCoinbase className="h-40 w-auto" title="Coinbase" />
          <SiJohndeere className="h-12 w-auto" title="John Deere" />
          <SiZoom className="h-30 w-auto" title="Zoom" />
          <Image src={hyattImg} width={200} alt="Hyatt"></Image>
          <Image src={fenderImg} width={110} alt="Fender"></Image>
        </div>
      </div>
    </main>
  );
};

export default ReviewPage;
