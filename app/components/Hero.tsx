import heroImage from "../assets/trello-hero-image.jpg";
import Image from "next/image";
import Link from "next/link";
import { PlayIcon } from "@heroicons/react/24/outline";

const Hero = () => {
  return (
    <main className="mt-28 mb-2 flex flex-row p-8 bg-gradient-to-b from-white to-[#f5f5f5]">
      <div className="flex flex-col gap-4 p-2">
        <p className="text-5xl font-bold">
          Capture, organize, and tackle your to-dos from anywhere.
        </p>
        <p className="text-xl">
          Escape the clutter and chaos—unleash your productivity with Trello.
        </p>
        <div className="flex flex-row justify-between items-center pr-8 my-4">
          <input
            type="email"
            placeholder="Email"
            className="border-2 border-gray-200 p-2 w-80 rounded-md"
          />
          <button type="submit" className="btn btn-primary">
            Sign up - it&apos;s free!
          </button>
        </div>
        <div className="flex flex-row gap-2">
          <p>By entering my email, I acknowledge the</p>
          <Link
            href="/legal/privacy-policy"
            className="text-[blue] font-bold hover:underline"
          >
            Atlassian Privacy Policy.
          </Link>
        </div>
        <Link href="https://youtu.be/5SAud9NhxZQ?si=O4XowrbYLOSZKDFC" className="hover:underline flex flex-row gap-2 text-[blue] transition-colors">
            Warch video
            <span className="border rounded-full p-1">
                <PlayIcon className="h-4 w-4 text-gray-700 text-inherit" />
            </span>
        </Link>
      </div>
      <div>
        <Image
          src={heroImage}
          alt="Trello Hero Image"
          width={1200}
          height={500}
        ></Image>
      </div>
    </main>
  );
};

export default Hero;
