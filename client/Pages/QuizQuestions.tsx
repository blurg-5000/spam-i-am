import { useState } from 'react'
import { QuizAnswers, QuizQuestions, Option } from '../../models/spam'
import ResultPage from './ResultPage'

interface Props {
  questions: QuizQuestions[]
  answers: QuizAnswers
  setAnswers: React.Dispatch<React.SetStateAction<QuizAnswers>>
}

function QuizBody({ questions, answers, setAnswers }: Props) {
  const [counter, setCounter] = useState(0)
  const [showResult, setShowResult] = useState(false)

  function handleAnswerChange(option: Option) {
    // we want to record the category the answer is associated with,
    // so that we can determine the correct personality type for the user (i.e. mostly a's, mostly b's)
    const optionCategory = option.category
    const key = `a${counter + 1}` as keyof QuizAnswers
    setAnswers((prev) => ({ ...prev, [key]: optionCategory }))
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
  function handleClick(option: Option) {
    handleAnswerChange(option)
  }

  function handleKeyDown(
    event: React.KeyboardEvent<HTMLElement>,
    option: Option,
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
            {questions[counter].options.map((option, index) => (
              <>
                <section
                  key={`option ${index}`}
                  role="button"
                  tabIndex={0}
                  onClick={() => handleClick(option)}
                  onKeyDown={(event) => handleKeyDown(event, option)}
                  className="flex p-10"
                >
                  <img src={option.image} alt="" />
                  <p>{option.text}</p>
                </section>
              </>
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
