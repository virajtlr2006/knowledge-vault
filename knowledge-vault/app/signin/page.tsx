"use client"
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { Header } from "@/components/header"
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
      <main className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-background">
        {/* Decorative background shapes */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute top-1/4 left-0 w-72 h-72 bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="w-full max-w-md">
          <SignedOut>
            {/* Main card container */}
            <div className="bg-card rounded-2xl shadow-xl border border-border p-8 sm:p-10">
              <div className="text-center mb-8">
                {/* Logo and heading */}
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-7 h-7 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 2H5c-1.1 0-2 .9-2 2v18l7-3 7 3V4c0-1.1-.9-2-2-2z" />
                  </svg>
                </div>
                <h1 className="text-3xl font-bold text-foreground mb-2">Welcome to Knowledge Vault</h1>
                <p className="text-muted-foreground">Sign in to explore and manage your knowledge</p>
              </div>

              {/* Sign In and Sign Up Buttons */}
              <div className="space-y-3">
                <SignInButton mode="modal">
                  <button className="w-full bg-primary hover:opacity-90 text-primary-foreground font-semibold py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg active:scale-95">
                    Sign In
                  </button>
                </SignInButton>

                <SignUpButton mode="modal" >
                  <button className="w-full bg-secondary hover:opacity-90 text-secondary-foreground font-semibold py-3 rounded-lg transition-all duration-200 border border-border">
                    Create Account
                  </button>
                </SignUpButton>
              </div>

              {/* Divider */}
              <div className="relative my-7">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="px-3 bg-card text-sm text-muted-foreground font-medium">or continue with email</span>
                </div>
              </div>

              {/* Features list */}
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span>Store and organize your knowledge</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span>Explore curated knowledge collections</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span>Take interactive quizzes</span>
                </div>
              </div>
            </div>

            {/* Security badge */}
            <div className="mt-8 text-center text-xs text-muted-foreground">
              <p>Secure authentication with Clerk</p>
            </div>
          </SignedOut>

          <SignedIn>
            {/* User signed in state */}
            <div className="bg-card rounded-2xl shadow-xl border border-border p-8 text-center">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-foreground mb-2">Welcome Back!</h2>
                <p className="text-muted-foreground">You're logged into Knowledge Vault</p>
              </div>
              <div className="flex justify-center mb-6">
                <UserButton />
              </div>
              <p className="text-sm text-muted-foreground">You'll be redirected shortly...</p>
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
