"use client"
import type { TechItem } from "@/lib/tech-data"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SingleKnowledgeAction } from "@/Action/Knowledge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

const page = () => {
  const [getsingleTech, setGetsingleTech] = useState<TechItem | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const { id } = useParams()

  useEffect(() => {
    if (id) {
      singletech(Number(id))
    }
  }, [id])

  const singletech = async (id: number) => {
    setIsLoading(true)
    try {
      const singletechbyid: TechItem = await SingleKnowledgeAction(Number(id))
      setGetsingleTech(singletechbyid || null)
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoading) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-gradient-to-b from-background via-background/95 to-background/90 py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-4 md:px-6">
            <div className="animate-pulse space-y-8">
              <div className="h-8 bg-muted rounded-lg w-32"></div>
              <div className="h-96 bg-muted rounded-2xl"></div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  if (!getsingleTech) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-gradient-to-b from-background via-background/95 to-background/90 flex items-center justify-center py-12 md:py-16">
          <div className="text-center px-4">
            <h1 className="text-3xl font-bold text-foreground mb-2">Knowledge not found</h1>
            <p className="text-muted-foreground mb-6">
              The knowledge item you're looking for doesn't exist.
            </p>
            <Link
              href="/explore"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Back to Explore
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-background via-background/95 to-background/90 py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <Link
            href="/explore"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 font-medium text-sm group"
          >
            <svg
              className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Explore
          </Link>

          <div className="space-y-8">
            {getsingleTech && (
              <>
                {/* 🔵 SINGLE MERGED CARD */}
                <Card className="border border-border/40 rounded-2xl shadow-sm bg-card">
                  <CardHeader className="border-b border-border/20 px-6 md:px-8 py-6">
                    <CardTitle className="text-lg font-semibold text-foreground">
                      Knowledge Details
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="px-6 md:px-8 py-8 space-y-8">

                    {/* SMALL CENTERED IMAGE */}
                    <div className="flex justify-center">
                      <img
                        src={getsingleTech.img}
                        alt={getsingleTech.name}
                        className="w-36 h-36 object-cover rounded-xl shadow-md border border-border/40"
                      />
                    </div>

                    {/* 🔵 DETAILS AS SEPARATE BLOCKS */}
                    <div className="space-y-5">

                      {/* BLOCK 1 – TITLE */}
                      <div className="border border-border/40 rounded-xl p-4 bg-background/40 hover:bg-primary/5 transition-colors">
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                          Title
                        </p>
                        <p className="text-base font-semibold text-foreground">
                          {getsingleTech.name}
                        </p>
                      </div>

                      {/* BLOCK 2 – AUTHOR */}
                      <div className="border border-border/40 rounded-xl p-4 bg-background/40 hover:bg-primary/5 transition-colors">
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                          Author
                        </p>
                        <p className="text-base font-semibold text-foreground">
                          {getsingleTech.email}
                        </p>
                      </div>

                      {/* BLOCK 3 – DESCRIPTION */}
                      <div className="border border-border/40 rounded-xl p-4 bg-background/40 hover:bg-primary/5 transition-colors">
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                          Description
                        </p>
                        <p className="text-foreground/80 leading-relaxed">
                          {getsingleTech.desc}
                        </p>
                      </div>

                    </div>
                  </CardContent>
                </Card>
              </>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default page
