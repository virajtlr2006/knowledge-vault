'use server'

import { TechItem } from "@/lib/tech-data"
import { db } from ".."
import { knowledgeTable } from "@/db/schema"

export const NewKnowledgeAction = async (data:TechItem) => {
    // console.log(data)
    const result = await db.insert(knowledgeTable).values(data)
    
    return true
}