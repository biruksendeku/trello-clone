import Link from "next/link";
import {
  PuzzlePieceIcon,
  Cog6ToothIcon,
  RectangleGroupIcon,
} from "@heroicons/react/24/outline";

const CtaPage = () => {
  return (
    <main className="flex flex-col gap-8 p-18">
      <div className="flex flex-col gap-2">
        <p className="font-bold text-md">WORK SMARTER</p>
        <p className="text-xl">
          Customize the way you organize with easy integrations, <br />
          automation, and mirroring of your to-dos across multiple <br />
          locations.
        </p>
      </div>
      <div className="flex flex-row gap-6 justify-between items-center">
        <div className="bg-[#f9f9f9] p-6 flex flex-col gap-10 rounded-md">
          <PuzzlePieceIcon className="h-15 w-15 text-purple-500 ml-4" />
          <div className="flex flex-col gap-2">
            <p className="font-bold text-2xl">Integrations</p>
            <p className="text-md">
              Connect the apps you are already using into your Trello workflow
              or add a Power-Up to fine-tune your specific needs.
            </p>
          </div>
          <Link href="/integrations" className="w-fit border-dodgerblue-100 border-[1] rounded-md p-3 text-[dodgerblue] hover:underline hover:bg-[#ededff] hover:text-[mediumblue] duration-300">Browse Integrations</Link>
        </div>
        <div className="bg-[#f9f9f9] p-6 flex flex-col gap-10 rounded-md">
          <Cog6ToothIcon className="h-15 w-15 text-blue-600 ml-4" />
          <div className="flex flex-col gap-2">
            <p className="font-bold text-2xl">Automation</p>
            <p className="text-md">
              No-code automation is built into every Trello board. Focus on the
              work that matters most and let the robots do the rest.
            </p>
          </div>
          <Link href="/butler-automations" className="w-fit border-dodgerblue-100 border-[1] rounded-md p-3 text-[dodgerblue] hover:underline hover:bg-[#ededff] hover:text-[mediumblue] duration-300">Get to know Automation</Link>
        </div>
        <div className="bg-[#f9f9f9] p-6 flex flex-col gap-10 rounded-md">
          <RectangleGroupIcon className="h-15 w-15 text-orange-500 ml-4" />
          <div className="flex flex-col gap-2">
            <p className="font-bold text-2xl">Card mirroring</p>
            <p className="text-md">
              View all your to-dos from multiple boards in one place. Mirror a
              card to keep track of work wherever you need it!
            </p>
          </div>
          <Link href="/pricing" className="w-fit border-dodgerblue-100 border-[1] rounded-md p-3 text-[dodgerblue] hover:underline hover:bg-[#ededff] hover:text-[mediumblue] duration-300">Compare Plans</Link>
        </div>
      </div>
    </main>
  );
};

export default CtaPage;
