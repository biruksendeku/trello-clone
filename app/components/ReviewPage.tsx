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

// add this ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIH9jPJLZrGVTqYhhhdCwEbji8Q3nyqMfP1gijzzW+xA6 biruksendeku@gmail.com

const ReviewPage = () => {
  return (
    <main className="flex flex-col gap-4 border">
      <div className="flex flex-row gap-2 justify-end items-center px-8 border">
        <EllipsisHorizontalIcon className="size-17" />
        <button className="border">
          <ChevronLeftIcon className="h-6 w-6 text-gray-500" />
        </button>
        <button className="border">
          <ChevronRightIcon className="h-6 w-6 text-gray-500" />
        </button>
      </div>
      {/* the dynamic part */}
      <div className="flex flex-row">
        <div className="flex flex-col justify-between items-center">
          <div>
            <p className="text-xl">
              [Trello is] great for simplifying complex processes. As a manager,
              I can chunk [processes] down into bite-sized pieces for my team
              and then deligate that out, but still keep a bird&apos;s-eye view.
            </p>
          </div>
          <div>
            <hr />
            <div className="flex flex-col gap-1">
              <p>Joey Rosenberg</p>
              <p>Global Leadership Director at Women Who Code</p>
            </div>
            <div className="flex flex-row justify-between items-center">
              <Image src={wwc} alt="Women Who Code"></Image>
              <Link href="https://www.atlassian.com/blog?_gl=1*6treur*_gcl_au*MTAxMTMzNDU5NS4xNzkwODc1MTU0*_ga*MjA5OTY5ODcyMS4xNzkwODc1MTU0*_ga_2PBSYQJXE3*czE3OTE5OTYxNzAkbzIyJGcwJHQxNzkxOTk2MTcwJGo2MCRsMCRoMA..">
                Read the story
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between items-center bg-[#0052cc] text-[white] rounded-md shadow-md">
          <p className="text-3xl font-extrabold">
            75% of organizations report that Trello delivers value to their business within 30 days.
          </p>
          <Link href="https://www.techvalidate.com/tvid/1D4-3E6-170">
            Trello TechValidate Survey
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-4 justify-center items-center">
        <p>
          Join a community of millions of users globally who are using Trello to
          get more done.
        </p>
        <div className="flex flex-row gap-6 justify-center items-center">
          <SiVisa className="h-8 w-auto" title="Visa" />
          <SiCoinbase className="h-6 w-auto" title="Coinbase" />
          <SiJohndeere className="h-8 w-auto" title="John Deere" />
          <SiZoom className="h-6 w-auto" title="Zoom" />
          <Image src={hyattImg} width={100} alt="Hyatt"></Image>
          <Image src={fenderImg} width={100} alt="Fender"></Image>
        </div>
      </div>
    </main>
  );
};

export default ReviewPage;
