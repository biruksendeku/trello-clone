import Link from "next/link"

const SignupLink = () => {
  return (
    <Link href="/auth/signup" className="btn btn-primary hover:underline">Get Trello for free</Link>
  )
}

export default SignupLink