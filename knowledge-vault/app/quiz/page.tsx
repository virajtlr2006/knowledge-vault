'use client'

import { getQuizAction, Quiz } from '@/Action/QuizAction'
import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useRouter } from 'next/navigation'

const page = () => {

  const [Quiz, setQuiz] = useState<Quiz[]|null>(null)
  const router = useRouter()

  useEffect(() => {
    all()
  }, [])
  

  const all = async () => {
    const allquiz = await getQuizAction()
    setQuiz(allquiz as Quiz[])
  }

  const handleQuizClick = (id: number) => {
    router.push(`/quiz/${id}`)
  }


  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-background/90 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h1 className="text-3xl font-bold text-foreground mb-8">Available Quizzes</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Quiz && Quiz.map((q) => (
            <Card 
              key={q.id} 
              className="cursor-pointer hover:shadow-lg transition-shadow border border-border/40 hover:border-primary/50"
              onClick={() => handleQuizClick(q.id)}
            >
              <CardHeader className="border-b border-border/20">
                <CardTitle className="text-lg font-semibold text-foreground">
                  {q.technology}
                </CardTitle>
              </CardHeader>
              <CardContent className="py-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-muted-foreground">Difficulty:</span>
                    <span className={`text-sm font-semibold px-2 py-1 rounded ${
                      q.difficulty === 'easy' ? 'bg-green-100 text-green-700' :
                      q.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {q.difficulty}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">Click to start quiz</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default page
