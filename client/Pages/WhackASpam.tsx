import { useEffect, useState } from 'react'
import Table from '../components/Table/Table'
import getRandomNumber from '../utils/getRandomNumber'

function WhackASpam() {
  const [seletedCell, setSelectedCell] = useState<null | number>(null)

  useEffect(() => {
    let randomCell = getRandomNumber(0, 24) as number
    console.log(randomCell)
    setSelectedCell(randomCell)
  }, [getRandomNumber])

  return (
    <div className="flex items-center justify-center">
      <Table
        data={5}
        selectedCell={seletedCell}
        image={'./images/14-classic2.png'}
      />
    </div>
  )
}

export default WhackASpam
