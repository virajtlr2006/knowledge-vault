"use client"

import { UserallKnowledgeAction } from "@/Action/Knowledge"
import KnowledgeCard from "@/components/ui/knowledge/KnowledgeCard"
import { Header } from "@/components/ui/header"
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
    <div>
      <Header />

      <main>
        <div>
          <div>
            <div>
              <h1>My Knowledge</h1>
              <p>View and manage all your created knowledge items</p>
            </div>
            <Link href="/new">
              Add New
            </Link>
          </div>
        </div>

        {isLoading && (
          <div>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i}>
                <div></div>
                <div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            ))}
          </div>
        )}

        {!isLoading && (!userknowledge || userknowledge.length === 0) && (
          <div>
            <div>
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 6v6m0 0v6m0-6h6m0 0h6m0 0V4m0 0h-6m6 0v6"
                />
              </svg>
            </div>
            <h3>No knowledge items yet</h3>
            <p>Create your first knowledge item to get started</p>
            <Link href="/new">
              Create Knowledge
            </Link>
          </div>
        )}

        {!isLoading && userknowledge && userknowledge.length > 0 && (
          <div>
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
