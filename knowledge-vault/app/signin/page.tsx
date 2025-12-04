"use client"
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { Header } from "@/components/ui/header"
import { Footer } from "@/components/footer"

const SignInContent = () => {
  const router = useRouter()
  const { isSignedIn } = useUser()

  useEffect(() => {
    if (isSignedIn) {
      router.push("/")
    }
  }, [isSignedIn, router])

  return (
    <>
      <Header />
      <main>
        <div>
          <SignedOut>
            <div>
              <div>
                <h1>Welcome to Knowledge Vault</h1>
                <p>Sign in to explore and manage your knowledge</p>
              </div>

              <div>
                <SignInButton mode="modal">
                  <button>Sign In</button>
                </SignInButton>

                <SignUpButton mode="modal">
                  <button>Create Account</button>
                </SignUpButton>
              </div>

              <div>
                <span>or continue with email</span>
              </div>

              <div>
                <div>
                  <span>Store and organize your knowledge</span>
                </div>
                <div>
                  <span>Explore curated knowledge collections</span>
                </div>
                <div>
                  <span>Take interactive quizzes</span>
                </div>
              </div>
            </div>

            <div>
              <p>Secure authentication with Clerk</p>
            </div>
          </SignedOut>

          <SignedIn>
            <div>
              <div>
                <h2>Welcome Back!</h2>
                <p>You're logged into Knowledge Vault</p>
              </div>
              <div>
                <UserButton />
              </div>
              <p>You'll be redirected shortly...</p>
            </div>
          </SignedIn>
        </div>
      </main>
      <Footer />
    </>
  )
}

const Page = () => {
  return <SignInContent />
}

export default Page
