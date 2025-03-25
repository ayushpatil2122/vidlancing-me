import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-gray-900 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link href="/Freelancer/Home">
            <span className="text-white text-lg font-semibold">Vidlancing</span>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <SignedOut>
            <SignInButton mode="modal" fallbackRedirectUrl="/Profile">
              <Button variant="outline" className="text-black border-purple-500 hover:bg-purple-500 hover:text-white">
                Sign In
              </Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton 
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  avatarBox: "h-10 w-10"
                }
              }}
            />
            <Button variant="outline" className="text-black border-purple-500 hover:bg-purple-500 hover:text-white">
              <Link href={'/Employer/Profile'} className="text-black">
                Profile
              </Link>
            </Button>
          </SignedIn>
        </div>
      </div>
    </nav>
  )
}