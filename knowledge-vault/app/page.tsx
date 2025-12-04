'use client'
import { Footer } from '@/components/footer'
import { Header } from '@/components/ui/header'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
      <Header />
      <main>

        {/* Hero Section */}
        <section>
          <div>

            <div>

              <div>
                <h1>
                  Knowledge Vault
                </h1>

                <p>
                  Collect, store, and explore all your knowledge in one beautiful place. Organize your thoughts, ideas,
                  and insights effortlessly.
                </p>

                {/* Search Bar */}
                <div>
                  <input
                    type="text"
                    placeholder="Search your knowledge..."
                  />
                </div>

                {/* Quick Action Cards */}
                <div>

                  {/* Explore Knowledge */}
                  <Link href="/knowledge">
                    <h3>Explore Knowledge</h3>
                    <p>Browse and discover shared insights</p>
                  </Link>

                  {/* Quiz */}
                  <Link href="/quiz">
                    <h3>Take a Quiz</h3>
                    <p>Test your knowledge with quizzes</p>
                  </Link>

                  {/* Add Knowledge */}
                  <Link href="/new">
                    <h3>Add Knowledge</h3>
                    <p>Share and save your thoughts</p>
                  </Link>

                  {/* Sign In */}
                  <Link href="/signin">
                    <h3>Sign In</h3>
                    <p>Access your personal vault</p>
                  </Link>

                </div>

                {/* CTA Buttons */}
                <div>
                  <Link href="/knowledge">
                    Start Exploring
                  </Link>

                  <Link href="/new">
                    Create First Knowledge
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section>
          <div>
            <h2>
              Why Choose Knowledge Vault?
            </h2>

            <div>

              <div>
                <h3>Organize Beautifully</h3>
                <p>
                  Categorize your knowledge with tags, folders, and smart collections
                </p>
              </div>

              <div>
                <h3>Find Instantly</h3>
                <p>
                  Lightning-fast search to find exactly what you need in seconds
                </p>
              </div>

              <div>
                <h3>Never Forget</h3>
                <p>
                  Your knowledge is securely saved and always accessible
                </p>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default page
