import { useState } from 'react'
import { QuizAnswers } from '../../models/spam'
import QuizStartPage from '../components/Quiz/QuizStartPage'
import { useQuestions } from '../hooks/useQuestions'
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

  const { data } = useQuestions()

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
