import { useState } from 'react'
import SnakeGameBoard from './SnakeGameBoard'
import Button from '../UI/Button'

function Snake() {
  const gridSize = 10
  const speed = 200 // TODO make dynamic - radio buttons?
  const numOfObstacles = 3 // TODO make dynamic - radio buttons?

  const [showComponent, setShowComponent] = useState('difficulty')

  if (showComponent === 'difficulty')
    return (
      <>
        <p>Speed: {speed}</p>
        <p>Number of Obstacles: {numOfObstacles}</p>
        <p>Use Arrow keys to move</p>
        <p>Eat spam and avoid tofu</p>
        <Button onClick={() => setShowComponent('game')}>Play</Button>
      </>
    )

  if (showComponent === 'game')
    return <SnakeGameBoard {...{ gridSize, speed, numOfObstacles }} />
}

export default Snake
