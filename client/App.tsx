import Layout from './Pages/Layout'
import WhackASpam from './Pages/WhackASpam'
import Table from './components/Table/Table'
import { useSpams } from './hooks/useSpams'

function App() {
  const { data } = useSpams()
  console.log(data)

  return (
    <>
      <Layout />
    </>
  )
}

export default App
