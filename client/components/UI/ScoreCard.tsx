interface Props {
  score: number
}

function ScoreCard({ score }: Props) {
  return (
    <>
      <h1>YOUR SCORE</h1>
      <p>{score}</p>
    </>
  )
}
export default ScoreCard
