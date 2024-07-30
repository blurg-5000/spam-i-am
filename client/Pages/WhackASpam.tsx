import { useEffect, useState } from 'react'
import Table from '../components/Table/Table'
import getRandomNumber from '../utils/getRandomNumber'
import playAudio from '../utils/playAudio'

function WhackASpam() {
  const [seletedCell, setSelectedCell] = useState<null | number>(null)
  const [score, setScore] = useState<number>(0)

  useEffect(() => {
    chooseRandomCell()

    const intervalId = setInterval(() => {
      chooseRandomCell() // Choose a random cell every few seconds
    }, 1000) // Adjust the interval time (e.g., 2000ms for 2 seconds)

    // Clean up the interval on component unmount
    return () => {
      clearInterval(intervalId)
    }
  }, [])

  function chooseRandomCell() {
    let randomCell = getRandomNumber(0, 24) as number
    console.log(randomCell)
    setSelectedCell(randomCell)
  }

  function whackThatSpam() {
    playAudio('./sounds/squish_sound.mp3')
    setScore(score + 1)
  }

  return (
    <div className="flex flex-col items-center justify-center p-10">
      <h1>WHACK A SPAM</h1>
      <p>Score: {score}</p>
      <Table
        selectedCell={seletedCell}
        image={'./images/14-classic2.png'}
        whackThatSpam={whackThatSpam}
      />
    </div>
  )
}

export default WhackASpam
