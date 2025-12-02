"use client"
import { QuizWithQuestions, SingleQuizAction } from "@/Action/QuizAction"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import Link from "next/link"

const page = () => {
  const [quiz, setQuiz] = useState<QuizWithQuestions | null>(null)
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>([])
  const [isScore, setIsScore] = useState(false)

  const { id } = useParams()

  useEffect(() => {
    if (id) {
      fetchQuiz(Number(id))
    }
  }, [id])

  const fetchQuiz = async (id: number) => {
    const quizData = await SingleQuizAction(Number(id))
    setQuiz(quizData)
    setSelectedAnswers(new Array(quizData.questions.length).fill(null))
  }

  const handleAnswerSelect = (questionIndex: number, answerIndex: number) => {
    const newAnswers = [...selectedAnswers]
    newAnswers[questionIndex] = answerIndex
    setSelectedAnswers(newAnswers)
  }

  const handleSubmit = () => {
    setIsScore(true)
  }

  const handleReset = () => {
    setSelectedAnswers(new Array(quiz?.questions.length || 0).fill(null))
    setIsScore(false)
  }

  if (!quiz) return <div>Loading...</div>

  const allAnswered = selectedAnswers.every(a => a !== null)
  const score = selectedAnswers.reduce((count, answer, index) => {
    return answer === quiz.questions[index].correctedAnswers ? count + 1 : count
  }, 0)

  return (
    <div>
      <Link href="/quiz">Back to Quizzes</Link>
      
      <h1>{quiz.technology} Quiz</h1>
      <p>Difficulty: {quiz.difficulty}</p>
      
      {isScore && (
        <div style={{ border: '2px solid green', padding: '20px', margin: '20px 0' }}>
          <h2>Quiz Results</h2>
          <p>Score: {score} / {quiz.questions.length}</p>
          <p>Percentage: {((score / quiz.questions.length) * 100).toFixed(1)}%</p>
        </div>
      )}
      
      {quiz.questions.map((question, qIndex) => {
        const options = [question.option1, question.option2, question.option3, question.option4]
        const userAnswer = selectedAnswers[qIndex]
        const isCorrect = userAnswer === question.correctedAnswers
        
        return (
          <div key={question.id} style={{ border: '1px solid #ccc', padding: '15px', margin: '15px 0' }}>
            <h3>Question {qIndex + 1}</h3>
            <p>{question.questions}</p>
            
            <div>
              {options.map((option, oIndex) => (
                <div key={oIndex}>
                  <label>
                    <input
                      type="radio"
                      name={`question-${qIndex}`}
                      value={oIndex}
                      checked={selectedAnswers[qIndex] === oIndex}
                      onChange={() => handleAnswerSelect(qIndex, oIndex)}
                      disabled={isScore}
                    />
                    {option}
                    {isScore && oIndex === question.correctedAnswers && " ✓ (Correct)"}
                    {isScore && userAnswer === oIndex && oIndex !== question.correctedAnswers && " ✗"}
                  </label>
                </div>
              ))}
            </div>
            
            {isScore && !isCorrect && (
              <p style={{ color: 'red' }}>
                Your answer was incorrect. Correct answer: {options[question.correctedAnswers]}
              </p>
            )}
          </div>
        )
      })}
      
      <div>
        {!isScore ? (
          <button onClick={handleSubmit} disabled={!allAnswered}>
            Submit Quiz ({selectedAnswers.filter(a => a !== null).length} / {quiz.questions.length} answered)
          </button>
        ) : (
          <>
            <button onClick={handleReset}>Try Again</button>
            <Link href="/quiz"> Back to Quizzes</Link>
          </>
        )}
      </div>
    </div>
  )
}

export default page
