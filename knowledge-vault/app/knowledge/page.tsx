"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useState, useEffect } from "react"
import KnowledgeCard from "@/components/ui/knowledge/KnowledgeCard"
import { AllKnowledgeAction } from "@/Action/Knowledge"
import { useCurrentUser } from "@/hook/hook"
import type { TechItem } from "@/lib/tech-data"

const CATEGORIES = ["All", "React", "TypeScript", "CSS", "Performance", "Next.js", "Backend"]

export default function ExplorePage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [showknowledge, setShowknowledge] = useState<TechItem[]>([])
  const { email } = useCurrentUser()

  useEffect(() => {
    const fetchKnowledge = async () => {
      const getknowledge: TechItem[] = await AllKnowledgeAction()
      console.log("Fetched knowledge:", getknowledge)
      setShowknowledge(getknowledge)
    }
    fetchKnowledge()
  }, [email])

  const filteredItems = showknowledge.filter((item) => {
    const matchesCategory = selectedCategory === "All" || (item as any).category === selectedCategory
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-3">Explore Knowledge</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Discover and browse all knowledge items from our community
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative">
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground"
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
              <input
                type="text"
                placeholder="Search knowledge..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-card border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <aside className="lg:col-span-1">
              <div className="bg-card border border-border/50 rounded-lg p-6 shadow-sm sticky top-4">
                <div className="flex items-center gap-2 mb-6">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 6a3 3 0 013-3h2.25a3 3 0 013 3v2.25a3 3 0 01-3 3H6a3 3 0 01-3-3V6zM9.75 12a3 3 0 013-3h2.25a3 3 0 013 3v2.25a3 3 0 01-3 3h-2.25a3 3 0 01-3-3V12zM3 15.75a3 3 0 013-3h2.25a3 3 0 013 3v2.25a3 3 0 01-3 3H6a3 3 0 01-3-3v-2.25z" />
                  </svg>
                  <h3 className="font-semibold text-lg text-foreground">Categories</h3>
                </div>
                <div className="space-y-2">
                  {CATEGORIES.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-200 text-sm font-medium ${
                        selectedCategory === category
                          ? "bg-primary text-primary-foreground shadow-sm"
                          : "text-foreground hover:bg-secondary border border-transparent hover:border-border/50"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            {/* Knowledge Grid */}
            <div className="lg:col-span-3">
              {filteredItems.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
                  {filteredItems.map((item) => (
                    <KnowledgeCard
                      key={item.id}
                      id={item.id}
                      img={item.img}
                      name={item.name}
                      desc={item.desc}
                      email={item.email}
                    />
                  ))}
                </div>
              ) : (
                <div className="col-span-full flex flex-col items-center justify-center py-20 px-4">
                  <svg
                    className="w-16 h-16 text-muted-foreground/40 mb-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M20 21l-4.35-4.35m0 0A7.5 7.5 0 103 10.5a7.5 7.5 0 0013.65 6.15z"
                    />
                  </svg>
                  <p className="text-lg font-medium text-muted-foreground text-center">
                    No knowledge items available yet
                  </p>
                  <p className="text-sm text-muted-foreground/70 mt-1 text-center">
                    Start by adding your first knowledge item
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
