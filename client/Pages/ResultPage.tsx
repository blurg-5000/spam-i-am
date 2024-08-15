import { QuizAnswers } from '../../models/spam'

interface Props {
  answers: QuizAnswers
}

function ResultPage({ answers }: Props) {
  return (
    <>
      <p>Results:</p>
      <p>{answers.a1}</p>
      <p>{answers.a2}</p>
      <p>{answers.a3}</p>
      <p>{answers.a4}</p>
      <p>{answers.a5}</p>
    </>
  )
}
export default ResultPage
