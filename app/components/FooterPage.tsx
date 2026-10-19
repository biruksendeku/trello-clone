import Image from "next/image";
import Link from "next/link";
import blackLogo from "../assets/trello-dark.png";
import {
  FaRegCircleUser, // For a generic placeholder
} from "react-icons/fa6";

import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const socialMedia = [
  { id: 1, icon: FaInstagram, href: "#" },
  { id: 2, icon: FaFacebookF, href: "#" },
  { id: 3, icon: FaLinkedinIn, href: "#" },
  { id: 4, icon: FaTwitter, href: "#" },
  { id: 5, icon: FaYoutube, href: "#" },
];

const FooterPage = () => {
  return (
    <main className="bg-[#172B4D] text-white p-4 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-0 px-16">
          <Link
            href="/"
            className="flex flex-col gap-0 justify-center items-start w-100 py-4"
          >
            <small className="text-[darkgray] text-xs font-bold">
              ATLASSIAN
            </small>
            <div className="flex flex-row gap-0.5 justify-center items-center">
              <Image
                src={blackLogo}
                alt="Trello Logo"
                width={22.5}
                height={22.5}
              />
              <p className="text-white font-bold text-3xl">Trello</p>
            </div>
          </Link>
          <Link
            href="/about"
            className="flex flex-col gap-2 justify-center items-start w-100 p-4 hover:bg-[#193B6D]"
          >
            <p className="text-sm">About Trello</p>
            <p className="text-xs">What&apos;s behind the boards.</p>
          </Link>
          <Link
            href="https://www.atlassian.com/company/careers/trello"
            className="flex flex-col gap-2 justify-center items-start w-100 p-4 hover:bg-[#193B6D]"
          >
            <p className="text-sm">Jobs</p>
            <p className="text-xs">
              Learn about open roles on the Trello team.
            </p>
          </Link>
          <Link
            href="/platforms"
            className="flex flex-col gap-2 justify-center items-start w-100 p-4 hover:bg-[#193B6D]"
          >
            <p className="text-sm">Apps</p>
            <p className="text-xs">
              Download the Trello app for your Desktop or Mobile devices.
            </p>
          </Link>
          <Link
            href="/contact"
            className="flex flex-col gap-2 justify-center items-start w-100 p-4 hover:bg-[#193B6D]"
          >
            <p className="text-sm">Contact us</p>
            <p className="text-xs">
              Need anything? Get in touch and we can help.
            </p>
          </Link>
        </div>
        <div className="px-16">
          <Link href="/auth/login" className="hover:underline">
            Log in
          </Link>
        </div>
      </div>
      <hr className="border-gray-600" />
      {/* the second div */}
      <div className="px-16">
        <div>
          <select>
            <option value="en">English</option>
            <option value="es">Spanish</option>
          </select>
          <Link
            href="https://www.atlassian.com/legal/privacy-policy"
            className="hover:underline"
          >
            Privacy Policy
          </Link>
          <Link
            href="https://www.atlassian.com/legal/cloud-terms-of-service"
            className="hover:underline"
          >
            Terms
          </Link>
          <p>Copyright © 2026 Atlassian</p>
        </div>
        {/* social links */}
        {/* <div>
          <Link href="https://www.instagram.com/trelloapp/">Instagram</Link>
          <Link href="https://www.facebook.com/trelloapp/">Facebook</Link>
          <Link href="https://www.linkedin.com/company/atlassian/">
            LinkedIn
          </Link>
          <Link href="https://twitter.com/trello">Twitter</Link>
          <Link href="https://www.youtube.com/channel/UCRcOkXoOrU6sN1yCz20VmQw">
            YouTube
          </Link>
        </div> */}
        <div className="flex gap-4 p-6 justify-center">
          {socialMedia.map(({ id, icon: Icon, href }) => (
            <a
              key={id}
              href={href}
              className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white text-white transition-hover hover:opacity-80"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </main>
  );
};

export default FooterPage;
