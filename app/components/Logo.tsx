import Link from "next/link"
import Image from "next/image"
import logo from "../assets/trello-logo.jpg"

const Logo = () => {
  return (
    <Link href="/" className="flex flex-col gap-0 justify-center items-center">
      <small className="text-[blue] text-xs font-bold">ATLASSIAN</small>
      <div className="flex flex-row gap-0.5 justify-center items-center">
        <Image src={logo} alt="Trello Logo" width={22.5} height={22.5} />
        <p className="text-[black] font-bold text-3xl">Trello</p>
      </div>
    </Link>
  )
}

export default Logo