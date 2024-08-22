/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useEffect, useRef, useState } from 'react'
import getRandomNumber from '../../utils/getRandomNumber'

function Snake() {
  const gridSize = 10
  const speed = 300 // TODO make dynamic - radio buttons?
  const numOfObstacles = 3 // TODO make dynamic - radio buttons?
  const nums = new Array(gridSize).fill(0).map((_, i) => i) // used to generate the table programatically

  const tableRef = useRef<HTMLInputElement>(null) // used in auto focusing on the table
  const initialCoords = useRef(randomCoords(numOfObstacles + 1))
  const [initialPosition, ...obstacles] = initialCoords.current

  const [head, setHead] = useState(initialPosition) // where the snake's head is. Movement in the grid is based on this
  const [snake, setSnake] = useState([initialPosition]) // every segment of the snake
  const [food, setFood] = useState(randomCoords(1, [...snake, ...obstacles])[0])
  const [score, setScore] = useState(0)
  const [direction, setDirection] = useState('none')
  const [gameState, setGameState] = useState('alive')

  useEffect(() => {
    if (tableRef.current) {
      tableRef.current.focus()
    }

    const intervalId = setInterval(() => {
      if (head) {
        const next = nextPosition() // nextPosition also checks if the snake will go out of bounds
        const [_noggin, ...tail] = snake
        if ([...tail, ...obstacles].includes(next)) {
          // check if snake crashes into obstacle or itself, but can't crash into it's own head
          setGameState('dead')
        } else if (next && food === next) {
          //snake gets longer if it eats food (expands into new square, and doesn't short the tail)
          setHead(next)
          setSnake([next, ...snake])
          setFood(randomCoords(1, [...snake, ...obstacles])[0])
          setScore(score+1)
        } else if (next) {
          // doesn't collide with anything, moves into new square and removes last quare of tail
          setHead(next)
          setSnake([next, ...snake.slice(0, snake.length - 1)])
        }
      }
    }, speed) //snake speed

    function nextPosition(): string | null {
      const headRow = Number(head[0])
      const headCol = Number(head[1])
      let nextRow = headRow
      let nextCol = headCol

      switch (direction) {
        case 'up':
          if (headRow === 0) {
            setGameState('dead')
          } else nextRow--
          break
        case 'down':
          if (headRow === gridSize - 1) {
            setGameState('dead')
          } else nextRow++
          break
        case 'left':
          if (headCol === 0) {
            setGameState('dead')
          } else nextCol--
          break
        case 'right':
          if (headCol === gridSize - 1) {
            setGameState('dead')
          } else nextCol++
          break
        default:
          return null
      }
      return `${nextRow}${nextCol}`
    }

    // Clean up the interval on component unmount
    return () => {
      clearInterval(intervalId)
    }
  }, [head, direction, snake, obstacles, food])

  function randomCoords(num: number, toBeOmitted: string[] = []): string[] {
    const coords: string[] = []
    const omit = [...toBeOmitted]

    for (let i = 0; i < num; i++) {
      const currentCoord = createCoord()
      coords.push(currentCoord)
      omit.push(currentCoord)
    }

    function createCoord(): string {
      const currentCoord = `${getRandomNumber(0, gridSize - 1)}${getRandomNumber(0, gridSize - 1)}`
      return omit.includes(currentCoord) ? createCoord() : currentCoord
    }
    console.log({ coords })
    return coords
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTableElement>): void {
    if (
      ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(e.key)
    ) {
      e.preventDefault()
    }
    switch (e.key) {
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
      <span><h2>Score: </h2><p>{score}</p></span>
      {/* <p>Use Arrow keys to move - Avoid tofu and eat Spam to unlock your home.</p> */}
      {gameState === 'dead' && <h1>You died!</h1>}
      {gameState === 'win' && <h1>You won!</h1>}
      {gameState === 'alive' && (
        <table
          ref={tableRef}
          tabIndex={0} // Make the table focusable
          onKeyDown={handleKeyDown}
          className="border-4 border-solid border-spamYellow"
        >
          {nums.map((row) => (
            <tr key={row}>
              {nums.map((column) => {
                const coord = `${row}${column}`
                return (
                  <td
                    key={coord}
                    className={`${coord} h-4 w-4 ${snake.includes(coord) ? 'bg-lime-400' : obstacles.includes(coord) ? 'bg-white' : food === coord ? 'bg-spamPink' : 'bg-spamBlue'}`}
                  ></td>
                )
              })}
            </tr>
          ))}
        </table>
      )}
    </>
  )
}

export default Snake
