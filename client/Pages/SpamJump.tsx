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
  const initialPlayerState: Player = {
    x: 50,
    y: 200,
    x_v: 0,
    y_v: 0,
    jump: false,
    height: 20,
    width: 20,
  }
  const [player, setPlayer] = useState<Player>(initialPlayerState)
  const [keys, setKeys] = useState({ left: false, right: false, jump: false })

  const gravity = 0.6
  const friction = 0.7
  const jumpStrength = -10 // Increase jump strength if needed
  const platforms = createPlatforms(5)

  // Function to create platforms
  function createPlatforms(count: number): Platform[] {
    return Array.from({ length: count }, (_, index) => ({
      x: index * 60,
      y: 200,
      width: 50,
      height: 10,
      color: 'blue',
    }))
  }

  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (canvas) {
      const context = canvas.getContext('2d')
      if (context) {
        const interval = setInterval(() => {
          updatePlayer()
          renderCanvas(context, platforms)
          renderPlayer(context, player)
        }, 1000 / 60) // 60 FPS

        return () => clearInterval(interval) // Cleanup on unmount
      }
    }
  }, [player, keys])

  function renderCanvas(ctx: CanvasRenderingContext2D, platforms: Platform[]) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = '#F0F8FF'
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    platforms.forEach((platform) => {
      ctx.fillStyle = platform.color
      ctx.fillRect(platform.x, platform.y, platform.width, platform.height)
    })
  }

  function renderPlayer(ctx: CanvasRenderingContext2D, player: Player) {
    ctx.fillStyle = '#F08080'
    ctx.fillRect(
      player.x,
      player.y - player.height,
      player.width,
      player.height,
    )
  }

  function updatePlayer() {
    setPlayer((prevPlayer) => {
      let newX = prevPlayer.x
      let newY = prevPlayer.y
      let newX_v = prevPlayer.x_v
      let newY_v = prevPlayer.y_v
      let newJump = prevPlayer.jump

      if (!newJump) {
        newX_v *= friction
      } else {
        newY_v += gravity
      }

      if (keys.left) {
        newX_v = -2.5
      }
      if (keys.right) {
        newX_v = 2.5
      }
      if (keys.jump && !newJump) {
        newY_v = jumpStrength
        newJump = true
      }

      newX += newX_v
      newY += newY_v

      // Reset player if they go outside the canvas bounds
      if (newX < 0 || newX + prevPlayer.width > 500 || newY > 270) {
        return { ...initialPlayerState }
      }

      let onPlatform = false
      platforms.forEach((platform) => {
        if (
          platform.x < newX + prevPlayer.width &&
          newX < platform.x + platform.width &&
          platform.y < newY &&
          newY < platform.y + platform.height
        ) {
          onPlatform = true
          newY = platform.y // Place player on top of the platform
          newY_v = 0 // Reset vertical velocity
        }
      })

      newJump = !onPlatform

      return {
        ...prevPlayer,
        x: newX,
        y: newY,
        x_v: newX_v,
        y_v: newY_v,
        jump: newJump,
      }
    })
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLCanvasElement>) {
    if (e.key === 'ArrowLeft') {
      setKeys((prev) => ({ ...prev, left: true }))
    }
    if (e.key === 'ArrowRight') {
      setKeys((prev) => ({ ...prev, right: true }))
    }
    if (e.key === 'ArrowUp') {
      setKeys((prev) => ({ ...prev, jump: true }))
    }
  }

  function handleKeyUp(e: React.KeyboardEvent<HTMLCanvasElement>) {
    if (e.key === 'ArrowLeft') {
      setKeys((prev) => ({ ...prev, left: false }))
    }
    if (e.key === 'ArrowRight') {
      setKeys((prev) => ({ ...prev, right: false }))
    }
    if (e.key === 'ArrowUp') {
      setKeys((prev) => ({ ...prev, jump: false }))
    }
  }

  return (
    <section className="flex items-center justify-center p-20">
      <canvas
        ref={canvasRef}
        height={270}
        width={500}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
      ></canvas>
    </section>
  )
}

export default SpamJump
