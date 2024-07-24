interface Props {
  isReset: boolean
  setIsReset: React.Dispatch<React.SetStateAction<boolean>>
}

function YouWinPage({ isReset, setIsReset }: Props) {
  function resetGame() {
    setIsReset(true)
  }
  return (
    <>
      <p>You won!</p>
      <button onClick={resetGame}>Play again</button>
    </>
  )
}

export default YouWinPage
