/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useEffect, useRef, useState } from 'react'

function Snake() {
  const [head, setHead] = useState('00') 
  const [snakePos, setSnakePos] = useState(['00']) // every segment of the snake
  const [direction, setDirection] = useState('none')
  const tableRef = useRef<HTMLInputElement>(null)

  const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] // used to generate the table

  useEffect(() => {
    if (tableRef.current) {
      tableRef.current.focus()
    }
  }, [])

  function handleKeyDown(e: React.KeyboardEvent<HTMLTableElement>): void {
    if (
      ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(e.key)
    ) {
      e.preventDefault()
    }
      switch(e.key) {
      case 'ArrowUp': 
       e.preventDefault()
       setDirection('up')
       break
      case 'ArrowDown': 
       e.preventDefault()
       setDirection('down')
       break
      case 'ArrowLeft': 
       e.preventDefault()
       setDirection('left')
       break
      case 'ArrowRight': 
       e.preventDefault()
       setDirection('right')
       break
      case 'Tab': 
       e.preventDefault()
       break
    }
  }

  return (
    <>
      <h1>Snake</h1>
      <p>Direction: {direction}</p>
      <table
        ref={tableRef}
        tabIndex={0} // Make the table focusable
        onKeyDown={handleKeyDown}
      >
        {nums.map((row) => (
          <tr key={row}>
            {nums.map((column) => {
              const coord = `${row}${column}`
              return (
                <td key={coord} className={`${coord} h-4 w-4 ${snakePos.includes(coord) ? 'bg-spamPink' :'bg-spamBlue'}`}></td>
              )
            })}
          </tr>
        ))}
      </table>
    </>
  )
}

export default Snake
