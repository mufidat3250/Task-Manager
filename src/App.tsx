import './App.css'
import HomePage from './pages/HomePage'
import {Routes, Route} from 'react-router-dom'
import SinglePage from './pages/SinglePage'

function App() {

  return (
    <div className='app'> 
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/:id' element={<SinglePage/>}/>
    </Routes>
    </div>
  )
}

export default App
