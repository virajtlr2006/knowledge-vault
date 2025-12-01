"use client"

import { GetQuizAction, type MCQ } from "@/Action/QuizAction"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"

const QuizQuestionsPage = () => {
  const [showquiz, setShowquiz] = useState<MCQ[] | null>(null)
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({})
  const router = useRouter()
  const searchParams = useSearchParams()

  // Check if quiz is completed
  const isCompleted = searchParams.get("completed") === "1"

  useEffect(() => {
    quiz()
  }, [])

  const quiz = async () => {
    const getquiz = await GetQuizAction()
    setShowquiz(getquiz)
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty?.toLowerCase()) {
      case "beginner":
        return "bg-emerald-100/60 text-emerald-700 border-emerald-200"
      case "intermediate":
        return "bg-amber-100/60 text-amber-700 border-amber-200"
      case "advanced":
        return "bg-rose-100/60 text-rose-700 border-rose-200"
      default:
        return "bg-secondary text-secondary-foreground border-border"
    }
  }

  const getTechnologyColor = (index: number) => {
    const colors = [
      "bg-blue-100/50 text-blue-700 border-blue-200",
      "bg-purple-100/50 text-purple-700 border-purple-200",
      "bg-indigo-100/50 text-indigo-700 border-indigo-200",
      "bg-cyan-100/50 text-cyan-700 border-cyan-200",
      "bg-teal-100/50 text-teal-700 border-teal-200",
      "bg-sky-100/50 text-sky-700 border-sky-200",
    ]
    return colors[index % colors.length]
  }

  const handleSubmitQuiz = () => {
    router.push("/?completed=1")
  }

  // Completion View
  if (isCompleted) {
    return (
      <>
        <Header />
        <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/10 px-4">
          <div className="max-w-md w-full card-subtle p-8 rounded-xl border border-primary/30 shadow-md text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-2">Quiz Completed!</h2>
            <p className="text-muted-foreground mb-6">Great job! You have successfully submitted your quiz.</p>

            <Link
              href="/quiz"
              className="btn-primary w-full inline-block text-center py-3 font-medium rounded-lg"
            >
              Go Back to Quizzes
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  // Loading View
  if (!showquiz) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/10 py-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="card-subtle p-12 text-center rounded-xl border border-border/60 shadow-sm">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary rounded-full mb-4">
                <svg className="w-8 h-8 text-muted-foreground animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              </div>
              <p className="text-muted-foreground text-lg">Loading quiz questions...</p>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  // Quiz Page
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/10 py-12 pb-24">
        <div className="max-w-4xl mx-auto px-4">

          {/* Header */}
          <div className="mb-10">
            <Link
              href="/quiz"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Quizzes
            </Link>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-3">Quiz Questions</h1>
            <p className="text-lg text-muted-foreground">Review and practice with these quiz questions</p>
          </div>

          {/* Questions */}
          {showquiz && showquiz.length > 0 && (
            <>
              <div className="space-y-5">
                {showquiz.map((q, index) => (
                  <div
                    key={q.id || index}
                    className="card-subtle p-6 rounded-xl border border-border/60 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 hover:-translate-y-0.5"
                  >

                    {/* Question Header */}
                    <div className="flex items-start justify-between mb-5 gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                            {index + 1}
                          </span>
                          <h3 className="text-lg font-semibold text-foreground line-clamp-2">{q.question}</h3>
                        </div>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap items-center gap-2 mb-5">
                      <span
                        className={`inline-block px-3 py-1 text-xs font-medium rounded-full border ${getDifficultyColor(q.difficulty)}`}
                      >
                        {q.difficulty}
                      </span>
                      <span
                        className={`inline-block px-3 py-1 text-xs font-medium rounded-full border ${getTechnologyColor(index)}`}
                      >
                        {q.technology}
                      </span>
                    </div>

                    {/* Options */}
                    <div className="space-y-2.5">
                      <p className="text-sm font-medium text-muted-foreground mb-3">Options:</p>

                      {q.options && q.options.length > 0 ? (
                        <div className="space-y-2.5">
                          {q.options.map((option, optionIndex) => (
                            <button
                              key={optionIndex}
                              onClick={() => setSelectedAnswers({ ...selectedAnswers, [index]: option })}
                              className={`w-full text-left p-3.5 rounded-lg border-2 transition-all duration-200 font-medium text-sm ${
                                selectedAnswers[index] === option
                                  ? "border-primary bg-primary/10 text-foreground"
                                  : "border-border bg-secondary/30 text-foreground hover:border-primary/50 hover:bg-primary/5"
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <div
                                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                                    selectedAnswers[index] === option
                                      ? "border-primary bg-primary"
                                      : "border-border group-hover:border-primary/50"
                                  }`}
                                >
                                  {selectedAnswers[index] === option && (
                                    <svg className="w-3 h-3 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                                      <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                  )}
                                </div>
                                <span className="truncate">{option}</span>
                              </div>
                            </button>
                          ))}
                        </div>
                      ) : (
                        <p className="text-muted-foreground text-sm italic">No options available</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* SUBMIT BUTTON AT END OF QUIZ */}
              <div className="mt-10 flex justify-center">
                <button
                  onClick={handleSubmitQuiz}
                  className="bg-primary text-primary-foreground px-8 py-3 rounded-xl shadow-lg hover:bg-primary/90 transition-all"
                >
                  Submit Quiz
                </button>
              </div>
            </>
          )}
        </div>
      </main>

      <Footer />
    </>
  )
}

export default QuizQuestionsPage
