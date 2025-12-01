"use client"

import { UserallKnowledgeAction } from "@/Action/Knowledge"
import KnowledgeCard from "@/components/ui/knowledge/KnowledgeCard"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useCurrentUser } from "@/hook/hook"
import type { TechItem } from "@/lib/tech-data"
import { useEffect, useState } from "react"
import Link from "next/link"

const UserKnowledgePage = () => {
  const [userknowledge, setUserKnowledge] = useState<TechItem[] | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const { email } = useCurrentUser()

  const userAllKnowledge = async (email: string) => {
    setIsLoading(true)
    const userall = await UserallKnowledgeAction(email)
    setUserKnowledge(userall)
    setIsLoading(false)
  }

  useEffect(() => {
    if (email) {
      userAllKnowledge(email)
    }
  }, [email])

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">My Knowledge</h1>
              <p className="text-muted-foreground mt-2">View and manage all your created knowledge items</p>
            </div>
            <Link
              href="/new"
              className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all shadow-sm"
            >
              Add New
            </Link>
          </div>
        </div>

        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="rounded-xl border border-border/50 bg-card overflow-hidden animate-pulse">
                <div className="h-48 bg-secondary/50"></div>
                <div className="p-5">
                  <div className="h-6 bg-secondary/50 rounded mb-3"></div>
                  <div className="h-4 bg-secondary/50 rounded w-3/4"></div>
                </div>
              </div>
            ))}
          </div>
        )}

        {!isLoading && (!userknowledge || userknowledge.length === 0) && (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 6v6m0 0v6m0-6h6m0 0h6m0 0V4m0 0h-6m6 0v6"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">No knowledge items yet</h3>
            <p className="text-muted-foreground mb-6">Create your first knowledge item to get started</p>
            <Link
              href="/new"
              className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all shadow-sm inline-block"
            >
              Create Knowledge
            </Link>
          </div>
        )}

        {!isLoading && userknowledge && userknowledge.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userknowledge.map((u) => (
              <KnowledgeCard key={u.id} id={u.id} img={u.img} name={u.name} desc={u.desc} email={u.email} />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}

export default UserKnowledgePage
