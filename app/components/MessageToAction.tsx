import Image from "next/image";
import actionImage1 from "../assets/action-image-1.png";
import actionImage2 from "../assets/action-image-2.png";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline";
import { CalendarIcon } from '@heroicons/react/24/outline';

const MessageToAction = () => {
  return (
    <main className="flex flex-col gap-18 pt-20 justify-center items-center bg-gradient-to-b from-[#0065ff] from-90% to-[#ffffff] to-10%">
      <div className="text-center flex flex-col gap-3 justify-center items-center">
        <h2 className="text-white font-bold text-3xl">
          From message to action
        </h2>
        <p className="text-white font-medium text-lg">
          Quickly turn communication from your favorite apps into to-dos,
          keeping all <br /> your discussions and tasks organized in one place.
        </p>
      </div>
      <div className="flex flex-col gap-14 w-100%">
        <div className="bg-[white] rounded-xl flex flex-row justify-center shadow-xl gap-8 mx-18 p-8">
          <Image
            src={actionImage1}
            alt="Action image 1"
            width={550}
            height={500}
            className="flex-grow rounded-xl"
          ></Image>
          <div className="flex flex-col gap-6 justify-start items-start p-10">
            <div className="flex flex-row gap-2 justify-start items-center">
              <Bars3BottomLeftIcon className="h-8 w-8 text-purple-500" />
              <h1 className="font-bold">EMAIL MAGIC</h1>
            </div>
            <p className="text-xl">
              Easily turn your emails into to-dos! Just forward them to your
              Trello Inbox, and they&apos;ll be transformed by AI into organized
              to-dos with all the links you need.
            </p>
          </div>
        </div>
        <div className="bg-[white] rounded-xl flex flex-row justify-center shadow-xl gap-8 mx-18 p-8">
          <div className="flex flex-col gap-6 justify-start items-start p-10">
            <div className="flex flex-row gap-2 justify-start items-center">
              <CalendarIcon className="h-8 w-8 text-cyan-500" />
              <h1 className="font-bold">MESSAGE APP SORCERY</h1>
            </div>
            <p className="text-xl">
              Need to follow up on a message from Slack or Microsoft Teams? Send
              it directly to your Trello board! Your favorite app interface lets
              you save messages that appear in your Trello Inbox with
              AI-generated summaries and links.
            </p>
          </div>
          <Image
            src={actionImage2}
            alt="Action image 2"
            width={550}
            height={500}
            className="flex-grow rounded-xl"
          ></Image>
        </div>
      </div>
    </main>
  );
};

export default MessageToAction;
