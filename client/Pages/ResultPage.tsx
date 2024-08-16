import { QuizAnswers } from '../../models/spam'
import calculateQuiz from '../utils/calculateQuiz'

interface Props {
  answers: QuizAnswers
}

function ResultPage({ answers }: Props) {
  const result = calculateQuiz(answers)

  return (
    <>
      <p>Results:</p>
      <p>{result}</p>
    </>
  )
}
export default ResultPage
