import Image from "next/image";
import Link from "next/link";
import blackLogo from "../assets/trello-dark.png";

const FooterPage = () => {
  return (
    <main className="bg-[#172B4D] text-white p-4 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-0 px-16">
          <Link
            href="/"
            className="flex flex-col gap-0 justify-center items-center border w-100 py-3"
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
            className="flex flex-col gap-0 justify-center items-center border w-100 py-3 hover:bg-[#172B4D]"
          >
            <p className="text-sm">About Trello</p>
            <p className="text-xs">What&apos;s behind the boards.</p>
          </Link>
          <Link
            href="https://www.atlassian.com/company/careers/trello"
            className="flex flex-col gap-0 justify-center items-center border w-100 py-3 hover:bg-[#172B4D]"
          >
            <p className="text-sm">Jobs</p>
            <p className="text-xs">
              Learn about open roles on the Trello team.
            </p>
          </Link>
          <Link
            href="/platforms"
            className="flex flex-col gap-0 justify-center items-center border w-100 py-3 hover:bg-[#172B4D]"
          >
            <p className="text-sm">Apps</p>
            <p className="text-xs">
              Download the Trello app for your Desktop or Mobile devices.
            </p>
          </Link>
          <Link
            href="/contact"
            className="flex flex-col gap-0 justify-center items-center border w-100 py-3 hover:bg-[skyblue]"
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
        <div>
          <Link href="https://www.instagram.com/trelloapp/">Instagram</Link>
          <Link href="https://www.facebook.com/trelloapp/">Facebook</Link>
          <Link href="https://www.linkedin.com/company/atlassian/">
            LinkedIn
          </Link>
          <Link href="https://twitter.com/trello">Twitter</Link>
          <Link href="https://www.youtube.com/channel/UCRcOkXoOrU6sN1yCz20VmQw">
            YouTube
          </Link>
        </div>
      </div>
    </main>
  );
};

export default FooterPage;
