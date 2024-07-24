import { useEffect, useRef, useState } from 'react'
import getRandomNumber from '../utils/getRandomNumber'

interface Platform {
  x: number
  y: number
  width: number
  height: number
  color: string
}

interface Player {
  x: number
  y: number
  x_v: number
  y_v: number
  jump: boolean
  height: number
  width: number
}

function SpamJump() {
  let [playerLocation, setPlayerLocation] = useState(50)

  const player = {
    x: playerLocation,
    y: 200,
    x_v: 0,
    y_v: 0,
    jump: true,
    height: 20,
    width: 20,
  }

  // Function to create platforms
  // Create an array of platforms
  const createPlatforms = (count: number): Platform[] => {
    return Array.from({ length: count }, (_, index) => ({
      x: index * 60,
      // TODO: make these platforms work better re y property changing
      // y: getRandomNumber(200, 400),
      y: 200,
      width: 50,
      height: 10,
      color: 'blue',
    }))
  }

  // useRef is kind of like React's version of 'getElementById'.
  // Note that in the JSX below, our canvas has a ref property which talks to this code.
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (canvas) {
      const context = canvas.getContext('2d')
      if (context) {
        // Store the context in a ref or state if needed
        renderCanvas(context, createPlatforms(5))
        renderPlayer(context, player)
      }
    }
  }, [playerLocation])

  //render canvas and platforms
  function renderCanvas(ctx: CanvasRenderingContext2D, platforms: Platform[]) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = '#F0F8FF'
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    platforms.forEach((platform) => {
      ctx.fillStyle = platform.color
      ctx.fillRect(platform.x, platform.y, platform.width, platform.height)
    })
  }

  // render the player
  function renderPlayer(ctx: CanvasRenderingContext2D, player: Player) {
    ctx.fillStyle = '#F08080'
    ctx.fillRect(player.x - 20, player.y - 20, player.width, player.height)
  }

  function movePlayer(e: React.KeyboardEvent<HTMLCanvasElement>) {
    console.log(e.key)
    if (e.key === 'ArrowLeft') {
      setPlayerLocation((player.x -= 8.5))
    }
    // If the right key is pressed, move the player to the right
    if (e.key === 'ArrowRight') {
      setPlayerLocation((player.x += 8.5))
    }
  }

  return (
    <section className="flex items-center justify-center p-20">
      <canvas
        ref={canvasRef}
        height={270}
        width={500}
        tabIndex={0}
        onKeyDown={(e) => movePlayer(e)}
      ></canvas>
    </section>
  )
}
export default SpamJump
