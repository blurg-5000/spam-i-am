import { QuizAnswers } from '../../models/spam'
import { useResults } from '../hooks/useResults'
import calculateQuiz from '../utils/calculateQuiz'

interface Props {
  answers: QuizAnswers
}

function ResultPage({ answers }: Props) {
  const category = calculateQuiz(answers)

  const { data: result } = useResults(category)

  if (result) {
    return (
      <>
        <section className="flex flex-col items-center justify-center p-5">
          <h1>You are: {result.name}!</h1>
          <img src={`/images/hero_images/${result.image}`} alt="" />
          <p>{result.info}</p>
        </section>
      </>
    )
  }
}
export default ResultPage
