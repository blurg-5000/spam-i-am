import { Button } from '@mui/material'
import { QuizAnswers } from '../../../models/spam'
import calculateQuiz from '../../utils/calculateQuiz'

interface Props {
  answers: QuizAnswers
}

function ResultPage({ answers }: Props) {
  const category = calculateQuiz(answers)

  // TODO: Replace hardcoded data with real results data from backend API endpoint
  const result = {
    id: 1,
    name: 'spam',
    image: 'https://placehold.co/300x200',
    info: 'blah blah',
  }

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
