import { useState } from 'react'
import { QuizAnswers, QuizQuestions } from '../../models/spam'
import QuizStartPage from '../components/Quiz/QuizStartPage'
import QuizBody from '../components/Quiz/QuizBody'

function Quiz() {
  const [start, setStart] = useState(true)
  const [quizzes, setQuizzes] = useState(false)
  const [answers, setAnswers] = useState<QuizAnswers>({
    a1: null,
    a2: null,
    a3: null,
    a4: null,
    a5: null,
  })

  // TODO: Replace hardcoded data with real data from the backend API endpoint
  const data = [
    {
      id: 1,
      question: 'Question 1',
      options: [
        {
          image: 'https://placehold.co/300x200',
          text: 'Option 1',
          category: 'a',
        },
        {
          image: 'https://placehold.co/300x200',
          text: 'Option 2',
          category: 'b',
        },
        {
          image: 'https://placehold.co/300x200',
          text: 'Option 3',
          category: 'd',
        },
        {
          image: 'https://placehold.co/300x200',
          text: 'Option 4',
          category: 'c',
        },
      ],
    },
    {
      id: 2,
      question: 'Question 2',
      options: [
        {
          image: 'https://placehold.co/300x200',
          text: 'Option 1',
          category: 'a',
        },
        {
          image: 'https://placehold.co/300x200',
          text: 'Option 2',
          category: 'b',
        },
        {
          image: 'https://placehold.co/300x200',
          text: 'Option 3',
          category: 'd',
        },
        {
          image: 'https://placehold.co/300x200',
          text: 'Option 4',
          category: 'c',
        },
      ],
    },
    {
      id: 3,
      question: 'Question 3',
      options: [
        {
          image: 'https://placehold.co/300x200',
          text: 'Option 1',
          category: 'a',
        },
        {
          image: 'https://placehold.co/300x200',
          text: 'Option 2',
          category: 'b',
        },
        {
          image: 'https://placehold.co/300x200',
          text: 'Option 3',
          category: 'd',
        },
        {
          image: 'https://placehold.co/300x200',
          text: 'Option 4',
          category: 'c',
        },
      ],
    },
    {
      id: 4,
      question: 'Question 4',
      options: [
        {
          image: 'https://placehold.co/300x200',
          text: 'Option 1',
          category: 'a',
        },
        {
          image: 'https://placehold.co/300x200',
          text: 'Option 2',
          category: 'b',
        },
        {
          image: 'https://placehold.co/300x200',
          text: 'Option 3',
          category: 'd',
        },
        {
          image: 'https://placehold.co/300x200',
          text: 'Option 4',
          category: 'c',
        },
      ],
    },
    {
      id: 5,
      question: 'Question 5',
      options: [
        {
          image: 'https://placehold.co/300x200',
          text: 'Option 1',
          category: 'a',
        },
        {
          image: 'https://placehold.co/300x200',
          text: 'Option 2',
          category: 'b',
        },
        {
          image: 'https://placehold.co/300x200',
          text: 'Option 3',
          category: 'd',
        },
        {
          image: 'https://placehold.co/300x200',
          text: 'Option 4',
          category: 'c',
        },
      ],
    },
  ] as QuizQuestions[]

  if (data)
    return (
      <>
        {start && <QuizStartPage setStart={setStart} setQuizzes={setQuizzes} />}
        {quizzes && (
          <QuizBody
            questions={data}
            answers={answers}
            setAnswers={setAnswers}
          />
        )}
      </>
    )
}

export default Quiz
