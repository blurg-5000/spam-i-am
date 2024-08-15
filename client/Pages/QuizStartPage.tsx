interface Props {
  setStart: React.Dispatch<React.SetStateAction<boolean>>
  setQuizzes: React.Dispatch<React.SetStateAction<boolean>>
}

function QuizStartPage({ setStart, setQuizzes }: Props) {
  function startGame() {
    setStart(false)
    setQuizzes(true)
  }

  return (
    <section>
      <h1>What flavour of spam are you????</h1>
      <button onClick={startGame}>Start</button>
    </section>
  )
}

export default QuizStartPage
