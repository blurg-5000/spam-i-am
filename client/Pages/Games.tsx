import { useState } from 'react'
import SpamJump from '../components/Games/SpamJump'
import WhackASpam from '../components/Games/WhackASpam'
import Button from '../components/UI/Button'
import prettifyCamelCase from '../utils/prettifyCamelCase'

function Games() {
  const [activeGame, setActiveGame] = useState('')

  const games = ['SpamJump', 'WhackASpam']

  return (
    <>
      <section className="flex flex-col items-center justify-center p-5">
        <h1>Choose a game!</h1>
        <nav>
          {games.map((game) => (
            <Button onClick={() => setActiveGame(game)}>{game}</Button>
          ))}
        </nav>

        <main>
          {activeGame === 'SpamJump' && <SpamJump />}
          {activeGame === 'WhackASpam' && <WhackASpam />}
        </main>
      </section>
    </>
  )
}

export default Games
