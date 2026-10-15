import Link from "next/link"

const LoginLink = () => {
  return (
    <Link href="/auth/login" className="hover:underline">Log in</Link>
  )
}

export default LoginLink