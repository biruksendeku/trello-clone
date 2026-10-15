import Logo from "./Logo";
import Dropdown from "./Dropdown";
import Link from "./Link";
import LoginLink from "./LoginLink";
import SignupLink from "./SignupLink";

export default function NavBar() {
  return (
    <main className="fixed top-0 left-0 w-full z-50 bg-[white] flex flex-row px-5 py-2 pl-7 justify-between items-center gap-4 hover:shadow-xl duration-500">
      <div id="hamburger" className="flex flex-row gap-8 justify-between items-center">
        <Logo />
        <Dropdown title="Features" />
        <Dropdown title="Solutions" />
        <Dropdown title="Plans" />
        <Link />
        <Dropdown title="Resources" />
      </div>
      <div className="flex flex-row gap-2 justify-center items-center">
        <LoginLink />
        <SignupLink/>
      </div>
    </main>
  );
}
