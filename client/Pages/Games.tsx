import { useState } from 'react'
import SpamJump from './SpamJump'
import WhackASpam from './WhackASpam'
import Button from '../components/UI/Button'
import prettifyCamelCase from '../utils/prettifyCamelCase'

function Games() {
  // TODO: Add a timer utils for time based games
  // TODO: Add a score utils for scoring games
  // TODO: Gamify WhackASpam more, by making the spam keep moving around and when you manage to click on it, your score increases

  const [activeGame, setActiveGame] = useState('')

  const games = ['spamJump', 'whackASpam']

  return (
    <>
      <header>
        <h1>Choose a game!</h1>
        <nav>
          {games.map((game) => (
            <Button onClick={() => setActiveGame(game)}>
              <button onClick={() => setActiveGame(game)}>
                {prettifyCamelCase(game)}
              </button>
            </Button>
          ))}
        </nav>
      </header>
      <main>
        {activeGame === 'spamJump' && <SpamJump />}
        {activeGame === 'whackASpam' && <WhackASpam />}
      </main>
    </>
  )
}

export default Games
