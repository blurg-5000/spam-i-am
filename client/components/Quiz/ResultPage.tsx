import { useQuery } from '@tanstack/react-query'
import { QuizAnswers } from '../../../models/spam'
import { getQuizResult } from '../../apis/apiClient'
import calculateQuiz from '../../utils/calculateQuiz'

interface Props {
  answers: QuizAnswers
}

function ResultPage({ answers }: Props) {
  // TODO: Find and use some middleware from the 'utils' folder which will help you calculate the user's quiz result
  const catergory = calculateQuiz(answers)
  // TODO: Replace hardcoded data with real results data from backend API endpoint

  const { data: result } = useQuery({
    queryKey: ['answers'],
    queryFn: () => getQuizResult(catergory),
  })

  if (result) {
    console.log(result)
    return (
      <>
        <section className="flex flex-col items-center justify-center p-5">
          <h1 className="pt-20 font-heading text-heading-lg font-heading-bold text-spamBlue">
            You are just like: {result[0].name}!
          </h1>
          <img src={`/images/hero_images/${result[0].image}`} alt="" />
          <p className="m-4 mx-60 pb-20  font-body text-body-md">
            {result[0].info}
          </p>
        </section>
      </>
    )
  }
}
export default ResultPage
