import Link from "next/link"

const NavMessage = () => {
  return (
    <div className="bg-[lightblue] p-8 flex flex-row gap-1 justify-center items-center mt-16">
        <p>Accelerate your team work with AI features 🤖 now available for all Premium and Enterprise!</p>
        <Link href="/software/artificial-intelligence" className="text-[blue] hover:underline hover:text-[darkblue]">Learn more.</Link>
    </div>
  )
}

export default NavMessage