'use server'

// MCQ Interface
export interface MCQ {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number; // index of correct option (0-3)
    technology: string;
    difficulty: 'easy' | 'medium' | 'hard';
}

// Static MCQ data
export const GetQuizAction = async():Promise<MCQ[]> => {
    return [
        {
            id: 1,
            question: "What is the primary purpose of Next.js?",
            options: [
                "React framework for production with SSR and SSG",
                "A CSS framework",
                "A database management system",
                "A testing library"
            ],
            correctAnswer: 0,
            technology: "Next.js",
            difficulty: 'medium'
        },
        {
            id: 2,
            question: "What does TypeScript add to JavaScript?",
            options: [
                "Runtime performance improvements",
                "Static type checking",
                "Automatic code formatting",
                "Database connectivity"
            ],
            correctAnswer: 1,
            technology: "TypeScript",
            difficulty: 'easy'
        },
        {
            id: 3,
            question: "What architecture does React use for building UIs?",
            options: [
                "Model-View-Controller",
                "Component-based architecture",
                "Layered architecture",
                "Microservices architecture"
            ],
            correctAnswer: 1,
            technology: "React",
            difficulty: 'easy'
        },
        {
            id: 4,
            question: "What is Node.js built on?",
            options: [
                "Python interpreter",
                "Chrome's V8 JavaScript engine",
                "Java Virtual Machine",
                "Ruby runtime"
            ],
            correctAnswer: 1,
            technology: "Node.js",
            difficulty: 'medium'
        },
        {
            id: 5,
            question: "What type of CSS framework is Tailwind CSS?",
            options: [
                "Component-based",
                "Utility-first",
                "Object-oriented",
                "Semantic"
            ],
            correctAnswer: 1,
            technology: "Tailwind CSS",
            difficulty: 'easy'
        },
        {
            id: 6,
            question: "What type of database is PostgreSQL?",
            options: [
                "NoSQL document database",
                "Relational database",
                "Graph database",
                "Key-value store"
            ],
            correctAnswer: 1,
            technology: "PostgreSQL",
            difficulty: 'easy'
        },
        {
            id: 7,
            question: "What type of database is MongoDB?",
            options: [
                "Relational database",
                "NoSQL document database",
                "Graph database",
                "Time-series database"
            ],
            correctAnswer: 1,
            technology: "MongoDB",
            difficulty: 'easy'
        },
        {
            id: 8,
            question: "What does Docker use to package applications?",
            options: [
                "Virtual machines",
                "Containers",
                "ZIP files",
                "Cloud instances"
            ],
            correctAnswer: 1,
            technology: "Docker",
            difficulty: 'medium'
        },
        {
            id: 9,
            question: "What is Git primarily used for?",
            options: [
                "Testing code",
                "Version control",
                "Code compilation",
                "Database management"
            ],
            correctAnswer: 1,
            technology: "Git",
            difficulty: 'easy'
        },
        {
            id: 10,
            question: "What is GraphQL?",
            options: [
                "A database system",
                "A query language for APIs",
                "A programming language",
                "A testing framework"
            ],
            correctAnswer: 1,
            technology: "GraphQL",
            difficulty: 'medium'
        }
    ];
}