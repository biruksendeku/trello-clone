import Link from "next/link";

const GetStarted = () => {
  return (
    <main className="bg-gray-100 py-20 px-4">
      <div className="flex flex-col justify-center items-center gap-8">
        <div>
        <p className="text-4xl font-semibold text-center">Get started with Trello today</p>
        <div className="flex flex-row justify-between items-center gap-2 mt-6">
          <input type="email" placeholder="Email" className="border-2 border-gray-200 p-2 w-[25rem] rounded-md"/>
          <button className="btn btn-primary">Sign up - it&apos;s free!</button>
        </div>
      </div>
        <div className="flex flex-row justify-center items-center gap-1.5 text-center mt-2">
          <p className="text-xl">
            By entering my email, I acknowledge the
          </p>
          <Link href="/legal/privacy-policy" className="text-xl text-[#0052cc] hover:underline hover:text-blue-800">
            Atlassian Privacy Policy
          </Link>
        </div>
      </div>
    </main>
  )
}

export default GetStarted