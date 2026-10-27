import Image from "next/image";
import Link from "next/link";
import ptc from "../assets/ptc.png";

const Reviewer3 = () => {
  return (
    <main className="cursor-grab active:cursor-grabbing">
      <div className="flex flex-row gap-8 rounded-md shadow-xl border-gray-300 border-1">
        <div className="flex flex-col justify-between items-start px-8 py-10 h-[31.25rem]">
          <div>
            <p className="text-2xl font-medium">
              We used Trello to provide clarityon steps, requirements, and
              procedures. This was exceptional when commmunicating with teams
              that had deep cultural and language differences.
            </p>
          </div>
          <div className="w-full flex flex-col gap-4">
            <hr className="w-40" />
            <div className="flex flex-col gap-1">
              <p>Jefferson Scomacao</p>
              <p>Development Manager at IKEA/PTC</p>
            </div>
            <div className="flex flex-row justify-between items-center">
              <Image
                src={ptc}
                alt="Women Who Code"
                width={75}
                height={75}
              ></Image>
              <Link
                className="text-[#0052cc] hover:text-[darkblue] hover:underline"
                href="https://www.atlassian.com/blog?_gl=1*6treur*_gcl_au*MTAxMTMzNDU5NS4xNzkwODc1MTU0*_ga*MjA5OTY5ODcyMS4xNzkwODc1MTU0*_ga_2PBSYQJXE3*czE3OTE5OTYxNzAkbzIyJGcwJHQxNzkxOTk2MTcwJGo2MCRsMCRoMA.."
              >
                Read the story
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between items-center bg-[#0052cc] text-[white] rounded-md shadow-md w-[57.5rem] px-6 py-8">
          <p className="text-3xl font-bold">
            74% of customers say Trello has improved communication with their
            co-workers and teams.
          </p>
          <Link
            href="https://www.techvalidate.com/tvid/1D4-3E6-170"
            className="text-[lightgray] hover:text-[white] hover:underline"
          >
            Trello TechValidate Survey
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Reviewer3;
