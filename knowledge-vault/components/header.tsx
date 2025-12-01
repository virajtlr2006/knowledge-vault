"use client"

import Link from "next/link"
import { useState } from "react"

export function Header() {
  const [profileOpen, setProfileOpen] = useState(false)

  return (
    <header
      className="
        sticky top-0 z-50 
        bg-card/70 backdrop-blur-xl 
        border-b border-blue-200/30 
        shadow-[0_2px_12px_rgba(125,211,252,0.15)]
        transition-all
      "
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group transition-transform duration-300 hover:scale-[1.03]"
          >
            <div
              className="
                w-8 h-8 bg-primary rounded-lg flex items-center justify-center 
                shadow-md shadow-primary/30 
                group-hover:shadow-blue-400/40 
                transition-all
              "
            >
              <svg
                className="w-5 h-5 text-primary-foreground"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 2H5c-1.1 0-2 .9-2 2v18l7-3 7 3V4c0-1.1-.9-2-2-2z" />
              </svg>
            </div>

            <span
              className="
                font-semibold text-lg hidden sm:inline text-foreground 
                tracking-tight group-hover:text-blue-500 
                transition-colors
              "
            >
              Knowledge Vault
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { href: "/knowledge", label: "Explore" },
              { href: "/quiz", label: "Quizzes" },
              { href: "/new", label: "Add Knowledge" },
            ].map((nav) => (
              <Link
                key={nav.href}
                href={nav.href}
                className="
                  relative text-sm font-medium text-muted-foreground 
                  hover:text-blue-500 transition-colors 
                  px-1
                "
              >
                {nav.label}

                {/* Animated Underline */}
                <span
                  className="
                    absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 
                    transition-all duration-300 
                    group-hover:w-full
                  "
                />
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <button
              className="
                p-2 rounded-lg 
                hover:bg-blue-100/40 dark:hover:bg-blue-900/20 
                transition-all 
                shadow-sm hover:shadow-blue-300/30
              "
            >
              <svg
                className="w-5 h-5 text-muted-foreground hover:text-blue-500 transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </header>
  )
}
