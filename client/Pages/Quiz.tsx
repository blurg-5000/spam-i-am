import { useState } from 'react'
import { QuizAnswers } from '../../models/spam'
import QuizStartPage from '../components/Quiz/QuizStartPage'
import QuizBody from '../components/Quiz/QuizBody'
import { useQuery } from '@tanstack/react-query'
import { getAllQuestions } from '../apis/apiClient'

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

  const { data, isError, error } = useQuery({
    queryKey: ['questions'],
    queryFn: getAllQuestions,
  })

  if (isError) {
    console.error(error)
    return <p>ERROR</p>
  }

  if (data) {
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
}

export default Quiz
