'use client'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen">

        {/* Hero Section */}
        <section className="py-24 px-4 relative bg-[radial-gradient(circle_at_top,rgba(147,197,253,0.25),transparent_70%)]">
          <div className="max-w-4xl mx-auto relative">

            {/* Soft background shapes */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300/40 rounded-full mix-blend-multiply blur-3xl opacity-30" />
              <div className="absolute top-40 right-10 w-72 h-72 bg-blue-400/40 rounded-full mix-blend-multiply blur-3xl opacity-30" />
            </div>

            <div className="text-center">
              <h1 className="text-5xl sm:text-6xl font-extrabold text-foreground mb-6 tracking-tight">
                Knowledge Vault
              </h1>

              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                Collect, store, and explore all your knowledge in one beautiful place. Organize your thoughts, ideas,
                and insights effortlessly.
              </p>

              {/* Search Bar */}
              <div className="mb-14 max-w-xl mx-auto">
                <div className="relative group">
                  <svg
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-blue-500 transition-colors"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search your knowledge..."
                    className="w-full pl-12 pr-4 py-3 rounded-xl 
                    bg-white/40 dark:bg-card/30 backdrop-blur-xl
                    border border-blue-200/40 
                    text-foreground placeholder:text-muted-foreground 
                    focus:outline-none focus:ring-2 focus:ring-blue-400/40 focus:border-blue-400
                    transition-all shadow-sm hover:shadow-blue-200/40"
                  />
                </div>
              </div>

              {/* Quick Action Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-14">

                {/* Explore Knowledge */}
                <Link
                  href="/knowledge"
                  className="card-subtle p-6 rounded-xl border border-border/40 
                  bg-card/60 backdrop-blur-lg shadow-sm 
                  transition-all duration-300 cursor-pointer group 
                  hover:-translate-y-1 hover:shadow-xl hover:bg-blue-50/40 
                  dark:hover:bg-blue-950/20"
                >
                  <div className="w-10 h-10 mx-auto mb-3 text-primary transition-all 
                  group-hover:text-blue-500 group-hover:scale-110 
                  group-hover:drop-shadow-[0_0_6px_rgba(56,189,248,0.5)]">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Explore Knowledge</h3>
                  <p className="text-sm text-muted-foreground">Browse and discover shared insights</p>
                </Link>

                {/* Quiz */}
                <Link
                  href="/quiz"
                  className="card-subtle p-6 rounded-xl border border-border/40 
                  bg-card/60 backdrop-blur-lg shadow-sm 
                  transition-all duration-300 cursor-pointer group 
                  hover:-translate-y-1 hover:shadow-xl hover:bg-blue-50/40 
                  dark:hover:bg-blue-950/20"
                >
                  <div className="w-10 h-10 mx-auto mb-3 text-primary transition-all 
                  group-hover:text-blue-500 group-hover:scale-110 
                  group-hover:drop-shadow-[0_0_6px_rgba(56,189,248,0.5)]">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2V17zm4 0h-2V7h2V17zm4 0h-2v-4h2V17z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Take a Quiz</h3>
                  <p className="text-sm text-muted-foreground">Test your knowledge with quizzes</p>
                </Link>

                {/* Add Knowledge */}
                <Link
                  href="/new"
                  className="card-subtle p-6 rounded-xl border border-border/40 
                  bg-card/60 backdrop-blur-lg shadow-sm 
                  transition-all duration-300 cursor-pointer group 
                  hover:-translate-y-1 hover:shadow-xl hover:bg-blue-50/40 
                  dark:hover:bg-blue-950/20"
                >
                  <div className="w-10 h-10 mx-auto mb-3 text-primary transition-all 
                  group-hover:text-blue-500 group-hover:scale-110 
                  group-hover:drop-shadow-[0_0_6px_rgba(56,189,248,0.5)]">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Add Knowledge</h3>
                  <p className="text-sm text-muted-foreground">Share and save your thoughts</p>
                </Link>

                {/* Sign In */}
                <Link
                  href="/signin"
                  className="card-subtle p-6 rounded-xl border border-border/40 
                  bg-card/60 backdrop-blur-lg shadow-sm 
                  transition-all duration-300 cursor-pointer group 
                  hover:-translate-y-1 hover:shadow-xl hover:bg-blue-50/40 
                  dark:hover:bg-blue-950/20"
                >
                  <div className="w-10 h-10 mx-auto mb-3 text-primary transition-all 
                  group-hover:text-blue-500 group-hover:scale-110 
                  group-hover:drop-shadow-[0_0_6px_rgba(56,189,248,0.5)]">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Sign In</h3>
                  <p className="text-sm text-muted-foreground">Access your personal vault</p>
                </Link>

              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/knowledge"
                  className="btn-primary rounded-xl py-3 px-6 shadow-md shadow-primary/20 
                  hover:shadow-blue-400/40 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Start Exploring
                </Link>

                <Link
                  href="/new"
                  className="btn-secondary rounded-xl py-3 px-6 shadow-sm
                  hover:bg-blue-100 hover:shadow-blue-300/30 hover:-translate-y-0.5
                  transition-all duration-300"
                >
                  Create First Knowledge
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 bg-blue-50/20 dark:bg-secondary/20 backdrop-blur-sm border-t border-border/40">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-14 tracking-tight">
              Why Choose Knowledge Vault?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              <div className="card-subtle p-6 rounded-xl bg-card/70 backdrop-blur border border-border/40 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:bg-blue-50/40 transition-all duration-300">
                <div className="w-10 h-10 text-blue-500 mb-4">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 2H5c-1.1 0-2 .9-2 2v18l7-3 7 3V4c0-1.1-.9-2-2-2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Organize Beautifully</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Categorize your knowledge with tags, folders, and smart collections
                </p>
              </div>

              <div className="card-subtle p-6 rounded-xl bg-card/70 backdrop-blur border border-border/40 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:bg-blue-50/40 transition-all duration-300">
                <div className="w-10 h-10 text-blue-500 mb-4">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V9l-7-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Find Instantly</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Lightning-fast search to find exactly what you need in seconds
                </p>
              </div>

              <div className="card-subtle p-6 rounded-xl bg-card/70 backdrop-blur border border-border/40 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:bg-blue-50/40 transition-all duration-300">
                <div className="w-10 h-10 text-blue-500 mb-4">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Never Forget</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
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
