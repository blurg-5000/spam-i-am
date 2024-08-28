import { useState } from 'react'
import SnakeGameBoard from './SnakeGameBoard.tsx'
import Button from '../UI/Button'
import { Slider } from '@mui/material'

function Snake() {
  const [speed, setSpeed] = useState(150)
  const [numOfObstacles, setNumOfObstacles] = useState(3)
  const [showComponent, setShowComponent] = useState('difficulty')
  
  const gridSize = 10
  const marks = [
    {
      value: 0,
      label: 'Easy',
    },
    {
      value: 1,
      label: 'Medium',
    },
    {
      value: 2,
      label: 'Hard',
    },
  ]


  function handleSpeedChange(v: number): void {
    const speeds = [200, 150, 100]
    setSpeed(speeds[v])
  }

  function handleObstaclesChange(v: number): void {
    const obstacles = [0, 3, 5]
    setNumOfObstacles(obstacles[v])
  }

  if (showComponent === 'difficulty')
    return (
      <>
        <p>Speed:</p>
        <Slider
          onChange={(_, v) => handleSpeedChange(v as number)}
          valueLabelDisplay="off"
          step={null}
          marks={marks}
          min={0}
          max={2}
          defaultValue={1}
        />
        <hr/>
        <br/>
        <p>Number of Obstacles:</p>
        <Slider
          onChange={(_, v) => handleObstaclesChange(v as number)}
          valueLabelDisplay="off"
          step={null}
          marks={marks}
          min={0}
          max={2}
          defaultValue={1}
        />
        <hr />
        <br />
        <ul>
          <li>Use Arrow keys to move</li>
          <li>Eat spam to grow and increase your score </li>
          <li>Avoid tofu as it will kill you (allergies)</li>
        </ul>
        <Button onClick={() => setShowComponent('game')}>Play</Button>
      </>
    )

  if (showComponent === 'game')
    return <SnakeGameBoard {...{ gridSize, speed, numOfObstacles }} />
}

export default Snake