import { createRoutesFromElements, Route } from 'react-router-dom'
import App from './App.tsx'
import About from './Pages/About.tsx'
import Games from './Pages/Games.tsx'
import Quiz from './Pages/Quiz.tsx'
export default createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route path="about" element={<About />} />
    <Route path="games" element={<Games />} />
    <Route path="quiz" element={<Quiz />} />
  </Route>,
)
