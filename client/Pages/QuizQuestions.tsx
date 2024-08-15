import { useState } from 'react'
import { QuizAnswers, QuizQuestions } from '../../models/spam'
import ResultPage from './ResultPage'

interface Props {
  questions: QuizQuestions[]
  answers: QuizAnswers
  setAnswers: React.Dispatch<React.SetStateAction<QuizAnswers>>
}

function QuizBody({ questions, answers, setAnswers }: Props) {
  const [counter, setCounter] = useState(0)
  const [showResult, setShowResult] = useState(false)

  function handleAnswerChange(option: string) {
    // Ensure the counter is within the vabuttond range
    const key = `a${counter + 1}` as keyof QuizAnswers
    setAnswers((prev) => ({ ...prev, [key]: option }))
    handleNextQuestion()
  }
  function handleNextQuestion() {
    if (counter === questions.length - 1) {
      setShowResult(true)
    } else if (counter < questions.length - 1) {
      setCounter((prev) => prev + 1)
    }
  }

  function handlePreviousQuestion() {
    if (counter > 0) {
      setCounter((prev) => prev - 1)
    }
  }

  return (
    <div>
      {showResult && <ResultPage answers={answers} />}
      {!showResult && (
        <section key={questions[counter].id}>
          <h1>{questions[counter].question}</h1>
          <div>
            <button
              onClick={() => handleAnswerChange(questions[counter].option_1)}
            >
              {questions[counter].option_1}
            </button>
            <button
              onClick={() => handleAnswerChange(questions[counter].option_2)}
            >
              {questions[counter].option_2}
            </button>
            <button
              onClick={() => handleAnswerChange(questions[counter].option_3)}
            >
              {questions[counter].option_3}
            </button>
            <button
              onClick={() => handleAnswerChange(questions[counter].option_4)}
            >
              {questions[counter].option_4}
            </button>
          </div>
          <button onClick={handlePreviousQuestion} disabled={counter === 0}>
            Go back
          </button>
        </section>
      )}
    </div>
  )
}

export default QuizBody
