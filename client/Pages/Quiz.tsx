import { useState } from 'react'
import { QuizAnswers } from '../../models/spam'
import QuizStartPage from './QuizStartPage'
import QuizQuestions from './QuizQuestions'

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
  return (
    <>
      {start && <QuizStartPage setStart={setStart} setQuizzes={setQuizzes} />}
      {quizzes && <QuizQuestions answers={answers} setAnswers={setAnswers} />}
    </>
  )
}

export default Quiz
