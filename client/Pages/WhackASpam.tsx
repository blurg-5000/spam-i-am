import { useEffect, useState } from 'react'
import Table from '../components/Table/Table'
import getRandomNumber from '../utils/getRandomNumber'
import playAudio from '../utils/playAudio'

function WhackASpam() {
  const [seletedCell, setSelectedCell] = useState<null | number>(null)

  useEffect(() => {
    chooseRandomCell()
  }, [])

  function chooseRandomCell() {
    let randomCell = getRandomNumber(0, 24) as number
    console.log(randomCell)
    setSelectedCell(randomCell)
  }

  function whackThatSpam() {
    playAudio('./sounds/squish_sound.mp3')
    chooseRandomCell()
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <h1>WHACK A SPAM</h1>
      <Table
        selectedCell={seletedCell}
        image={'./images/14-classic2.png'}
        whackThatSpam={whackThatSpam}
      />
    </div>
  )
}

export default WhackASpam
