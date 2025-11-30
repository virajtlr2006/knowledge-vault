'use server'

import { TechItem } from "@/lib/tech-data"
import { db } from ".."
import { knowledgeTable } from "@/db/schema"

// New knowledge
export const NewKnowledgeAction = async (data:TechItem) => {
    // console.log(data)
    const result = await db.insert(knowledgeTable).values(data)
    
    return true
}

// All knowledgeAction
export const AllKnowledgeAction = async ()=> { 
    const all =await db.select().from(knowledgeTable)
    // console.log(all)
    return all
}
