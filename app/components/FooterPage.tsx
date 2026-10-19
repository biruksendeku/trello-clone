import Image from "next/image";
import Link from "next/link";
import blackLogo from "../assets/trello-dark.png";

const FooterPage = () => {
  return (
    <main className="bg-[#172B4D] text-white py-20 px-4 flex flex-col gap-8">
      <div>
        <div>
          <Link
            href="/"
            className="flex flex-col gap-0 justify-center items-center"
          >
            <small className="text-[#0052cc] text-xs font-bold">
              ATLASSIAN
            </small>
            <div className="flex flex-row gap-0.5 justify-center items-center">
              <Image
                src={blackLogo}
                alt="Trello Logo"
                width={22.5}
                height={22.5}
              />
              {/* <p className="text-white font-bold text-3xl">Trello</p> */}
            </div>
          </Link>
          <Link href="/about">
            <p>About Trello</p>
            <p>What&apos;s behind the boards.</p>
          </Link>
          <Link href="https://www.atlassian.com/company/careers/trello">
            <p>Jobs</p>
            <p>Learn about open roles on the Trello team.</p>
          </Link>
          <Link href="/platforms">
            <p>Apps</p>
            <p>Download the Trello app for your Desktop or Mobile devices.</p>
          </Link>
          <Link href="/contact">
            <p>Contact us</p>
            <p>Need anything? Get in touch and we can help.</p>
          </Link>
        </div>
        <div>
          <Link href="/auth/login" className="hover:underline">
            Log in
          </Link>
        </div>
      </div>
      <hr />
      {/* the second div */}
      <div>
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
