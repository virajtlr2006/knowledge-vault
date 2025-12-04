"use client"
import type { TechItem } from "@/lib/tech-data"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SingleKnowledgeAction } from "@/Action/Knowledge"
import { Header } from "@/components/ui/header"
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
        <main>
          <div>
            <div>
              <div></div>
              <div></div>
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
        <main>
          <div>
            <h1>Knowledge not found</h1>
            <p>
              The knowledge item you're looking for doesn't exist.
            </p>
            <Link href="/explore">
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
      <main>
        <div>
          <Link href="/explore">
            Back to Explore
          </Link>

          <div>
            {getsingleTech && (
              <>
                <Card>
                  <CardHeader>
                    <CardTitle>
                      Knowledge Details
                    </CardTitle>
                  </CardHeader>

                  <CardContent>

                    <div>
                      <img
                        src={getsingleTech.img}
                        alt={getsingleTech.name}
                      />
                    </div>

                    <div>

                      <div>
                        <p>Title</p>
                        <p>
                          {getsingleTech.name}
                        </p>
                      </div>

                      <div>
                        <p>Author</p>
                        <p>
                          {getsingleTech.email}
                        </p>
                      </div>

                      <div>
                        <p>Description</p>
                        <p>
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
