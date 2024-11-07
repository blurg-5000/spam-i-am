import Layout from './components/Layout'
import { ProteinProvider } from './ProteinContext'

function App() {
  return (
    <>
      <ProteinProvider>
        <Layout />
      </ProteinProvider>
    </>
  )
}

export default App
