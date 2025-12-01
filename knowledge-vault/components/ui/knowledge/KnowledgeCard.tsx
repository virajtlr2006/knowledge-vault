"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../card"
import type { TechItem } from "@/lib/tech-data"

const KnowledgeCard = ({ id, img, name, desc }: TechItem) => {
  return (
    <div>
      {/* Link to individual knowledge item detail page */}
      <a href={`/single/${id}`}>
        <Card className="h-full w-full rounded-xl border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/40 overflow-hidden group bg-card">
          <CardContent className="p-0">
            <div className="h-48 w-full bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center overflow-hidden">
              <img
                className="h-40 w-40 object-contain group-hover:scale-110 transition-transform duration-300"
                src={img || "/placeholder.svg"}
                alt={name}
              />
            </div>
          </CardContent>
          <CardHeader className="p-5 pb-4">
            <CardTitle className="text-lg font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors duration-200">
              {name}
            </CardTitle>
            <CardDescription className="text-sm text-muted-foreground line-clamp-2 mt-2 leading-relaxed">
              {desc}
            </CardDescription>
          </CardHeader>

          <div className="px-5 pb-4 pt-2 border-t border-border/30">
            <button className="text-primary text-sm font-medium hover:text-primary/80 transition-colors duration-200 flex items-center gap-1 group/btn">
              View Details
              <svg
                className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </Card>
      </a>
    </div>
  )
}

export default KnowledgeCard
