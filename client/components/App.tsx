import { useSpams } from '../hooks/useSpams'

function App() {
  const { data } = useSpams()
  console.log(data)

  return (
    <>
      <div className="app">
        <h1 className="text-3xl font-bold underline">
          Fullstack Boilerplate - with Spams!
        </h1>
        <ul>
          {data && data.map((spam) => <li key={spam.id}>{spam.name}</li>)}
        </ul>
      </div>
    </>
  )
}

export default App
