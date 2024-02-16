import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import Introduce from './components/pages/introduce/Introduce'
import Quiz from './components/pages/quiz/Quiz'



function App() {

  return (
    <Router>
      <Routes>

        <Route path='/' element={<Introduce/>}/>

        <Route path='/quiz/:difficulty/:amount' element={<Quiz/>}/>

      </Routes>
    </Router>
  )
}

export default App
