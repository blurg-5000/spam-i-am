import { QuizAnswers } from '../../models/spam'

interface Props {
  answers: QuizAnswers
  setAnswers: React.Dispatch<React.SetStateAction<QuizAnswers>>
}

function QuizQuestions({ answers, setAnswers }: Props) {
  return <p>Here are the questions!</p>
}

export default QuizQuestions
