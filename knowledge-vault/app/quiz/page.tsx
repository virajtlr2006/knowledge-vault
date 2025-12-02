'use client'

import { getQuizAction, MCQ } from '@/Action/QuizAction'
import React, { useEffect, useState } from 'react'

const page = () => {

  const [Quiz, setQuiz] = useState<MCQ[]|null>(null)

  useEffect(() => {
    all()
  }, [])
  

  const all = async () => {
    const allquiz = await getQuizAction()
    setQuiz(allquiz as MCQ[])
  }


  return (
    <div>
      {Quiz && Quiz.map((q)=>
      <div key={q.id}>
        <p>{q.technology}</p>
        <p>{q.difficulty}</p>
      </div>
      )}
    </div>
  )
}

export default page
