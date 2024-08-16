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

  function handleAnswerChange(option: [string, string]) {
    const optionText = option[1]
    const key = `a${counter + 1}` as keyof QuizAnswers
    setAnswers((prev) => ({ ...prev, [key]: optionText }))
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

  // Function to handle click and keydown events for accessibility
  function handleClick(option: [string, string]) {
    handleAnswerChange(option)
  }

  function handleKeyDown(
    event: React.KeyboardEvent<HTMLDivElement>,
    option: [string, string],
  ) {
    if (event.key === 'Enter' || event.key === ' ') {
      handleClick(option)
    }
  }

  return (
    <div>
      {showResult && <ResultPage answers={answers} />}
      {!showResult && (
        <section key={questions[counter].id}>
          <h1>{questions[counter].question}</h1>
          <div>
            {questions[counter].option_1.map((option, index) => (
              <div
                key={index}
                role="button"
                tabIndex={0}
                onClick={() => handleClick(option)}
                onKeyDown={(event) => handleKeyDown(event, option)}
              >
                <img src={option[0]} alt="" />
                <p>{option[1]}</p>
              </div>
            ))}
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
