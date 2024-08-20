import { useState } from 'react'
import SpamJump from './SpamJump'
import WhackASpam from './WhackASpam'
import Button from '../components/UI/Button'
import prettifyCamelCase from '../utils/prettifyCamelCase'
import Snake from '../components/Games/Snake'

function Games() {
  // TODO: Add a timer utils for time based games
  // TODO: Add a score utils for scoring games
  // TODO: Add a SPAM version of Snake
  // TODO: Gamify WhackASpam more, by making the spam keep moving around and when you manage to click on it, your score increases

  const [activeGame, setActiveGame] = useState('')

  const games = ['spamJump', 'whackASpam', 'snake']

  return (
    <>
      <section className="flex flex-col items-center justify-center p-5">
        <h1>Choose a game!</h1>
        <nav>
          {games.map((game) => (
            <Button key={game} onClick={() => setActiveGame(game)}>
              <button onClick={() => setActiveGame(game)}>
                {prettifyCamelCase(game)}
              </button>
            </Button>
          ))}
        </nav>

        <main>
          {activeGame === 'spamJump' && <SpamJump />}
          {activeGame === 'whackASpam' && <WhackASpam />}
          {activeGame === 'snake' && <Snake />}
        </main>
      </section>
    </>
  )
}

export default Games
