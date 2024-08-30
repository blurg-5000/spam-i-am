import { useQuery } from '@tanstack/react-query'
import { QuizAnswers } from '../../../models/spam'
import { getQuizResult } from '../../apis/apiClient'

interface Props {
  answers: QuizAnswers
}

function ResultPage({ answers }: Props) {
  // TODO: Find and use some middleware from the 'utils' folder which will help you calculate the user's quiz result

  // TODO: Replace hardcoded data with real results data from backend API endpoint

  const { data: result } = useQuery({
    queryKey: ['result'],
    queryFn: () => getQuizResult(String(answers)),
  })

  if (result) {
    return (
      <>
        <section className="flex flex-col items-center justify-center p-5">
          <h1 className="pt-20 font-heading text-heading-lg font-heading-bold text-spamBlue">
            You're just like: {result.name}!
          </h1>
          <img src={`/images/hero_images/${result.image}`} alt="" />
          <p className="m-4 mx-60 pb-20  font-body text-body-md">
            {result.info}
          </p>
        </section>
      </>
    )
  }
}
export default ResultPage
