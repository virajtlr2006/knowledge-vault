"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../card"
import type { TechItem } from "@/lib/tech-data"
import { ArrowRight } from "lucide-react"

const KnowledgeCard = ({ id, img, name, desc }: TechItem) => {
  return (
    <div className="relative group h-full">
      {/* Premium glowing effect - multiple layers */}
      <div className="absolute -inset-0.5 bg-linear-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 -z-20 group-hover:blur-2xl" />
      <div className="absolute -inset-0.5 bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-50 blur-md transition-all duration-500 -z-10" />
      
      {/* Link to individual knowledge item detail page */}
      <a href={`/single/${id}`} className="h-full block">
        <Card className="h-full w-full rounded-2xl border border-white/10 shadow-2xl hover:shadow-2xl transition-all duration-500 hover:border-white/30 overflow-hidden bg-linear-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-xl relative hover:-translate-y-2">
          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-cyan-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <CardContent className="p-0 relative overflow-hidden">
            <div className="h-56 w-full bg-linear-to-br from-slate-700/60 to-slate-800/60 flex items-center justify-center overflow-hidden relative">
              {/* Background pattern effect */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(124,58,255,0.2) 0%, transparent 50%)',
                }} />
              </div>
              
              <img
                className="h-44 w-44 object-contain group-hover:scale-125 transition-transform duration-500 drop-shadow-2xl relative z-10"
                src={img || "/placeholder.svg"}
                alt={name}
              />
              
              {/* Hover overlay gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </CardContent>

          <CardHeader className="p-6 pb-4 relative">
            <CardTitle className="text-xl font-bold text-white line-clamp-2 group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-cyan-300 group-hover:via-purple-300 group-hover:to-pink-300 group-hover:bg-clip-text transition-all duration-300">
              {name}
            </CardTitle>
            <CardDescription className="text-sm text-slate-300 line-clamp-2 mt-3 leading-relaxed">
              {desc}
            </CardDescription>
          </CardHeader>

          {/* Bottom action section */}
          <div className="px-6 pb-6 pt-3 border-t border-white/10 relative">
            <button className="w-full bg-linear-to-r from-cyan-500/80 to-purple-600/80 text-white text-sm font-semibold py-3 px-4 rounded-xl hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 flex items-center justify-between group/btn shadow-lg hover:shadow-xl hover:shadow-purple-500/50 backdrop-blur-sm border border-white/20">
              <span>Explore Now</span>
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Corner accent decorations */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-br from-cyan-400/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-5" />
          <div className="absolute bottom-0 left-0 w-20 h-20 bg-linear-to-tr from-purple-400/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-5" />
        </Card>
      </a>
    </div>
  )
}

export default KnowledgeCard
