import { integer, json, pgTable, varchar } from "drizzle-orm/pg-core";

export const knowledgeTable = pgTable("knowledge", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  email:varchar().notNull(),
  name: varchar({ length: 255 }).notNull(),
  img: varchar().notNull(),
  desc: varchar().notNull(),
});

export const quizTable = pgTable("quiz", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  technology: varchar().notNull(),
  difficulty: varchar().notNull().default("medium"),
});

export const questionTable = pgTable("question", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  quizId: integer().notNull(),
  questions: varchar().notNull(),
  option1: varchar().notNull(),
  option2: varchar().notNull(),
  option3: varchar().notNull(),
  option4: varchar().notNull(),
  correctedAnswers: integer().notNull().default(0)
});