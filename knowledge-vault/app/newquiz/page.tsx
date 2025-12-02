'use client'


import { MCQ, newQuizAction } from '@/Action/QuizAction'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"

const page = () => {

    const [showoption, setshowoption] = useState<MCQ[] | null>(null)

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<MCQ>()

    const newQuiz = async (data: MCQ) => {
        newQuizAction([data])

    }

    return (
        <div>
            <form onSubmit={handleSubmit(newQuiz)}>

                <Input placeholder="Technology" {...register("technology", { required: true })} />
                {errors.technology && <span>This field is required</span>}

                <Input placeholder="Difficulty" {...register("difficulty", { required: true })} />
                {errors.difficulty && <span>This field is required</span>}

                <Input placeholder="Question" {...register("questions", { required: true })} />
                {errors.questions && <span>This field is required</span>}

                <Input placeholder="Option 1" {...register("option1", { required: true })} />
                {errors.option1 && <span>This field is required</span>}

                <Input placeholder="Option 2" {...register("option2", { required: true })} />
                {errors.option2 && <span>This field is required</span>}

                <Input placeholder="Option 3" {...register("option3", { required: true })} />
                {errors.option3 && <span>This field is required</span>}

                <Input placeholder="Option 4" {...register("option4", { required: true })} />
                {errors.option4 && <span>This field is required</span>}

                <Input placeholder="correctedAnswers" {...register("correctedAnswers", { required: true })} />
                {errors.correctedAnswers && <span>This field is required</span>}


                <Input type="submit" />
            </form>
        </div>
    )
}

export default page
