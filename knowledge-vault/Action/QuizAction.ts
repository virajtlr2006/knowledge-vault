'use server'

import { quizTable } from "@/db/schema";
import { db } from "..";
import { eq } from "drizzle-orm";

// MCQ Interface
export interface MCQ {
    id: number;
    questions: string;
    option1: string;
    option2: string,
    option3: string,
    option4: string
    correctedAnswers: number; // index of correct option (0-3)
    technology: string;
    difficulty: 'easy' | 'medium' | 'hard';
}

// New Quiz
export const newQuizAction = async (data: MCQ[]) => {
    const newdata = await db.insert(quizTable).values(data)
    return true
}

//All Quiz
export const getQuizAction = async () => {
    const all = await db.select().from(quizTable)
    return all
}



