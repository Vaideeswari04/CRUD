import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Display from './pages/display'
import Insert from './pages/insert'
import Update from './pages/update'
import TeacherDisplay from './pages/teadisplay'
import TeacherInsert from './pages/teainsert'
import TeacherUpdate from './pages/teaupdate'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Display/>}></Route>
          <Route path='/insert' element={<Insert/>}></Route>
          <Route path='/update/:id' element={<Update/>}></Route>
          <Route path='/teadisplay' element={<TeacherDisplay/>}></Route>
          <Route path='/teainsert' element={<TeacherInsert/>}></Route>
          <Route path='/teaupdate/:id' element={<TeacherUpdate/>}></Route>
        </Routes>
      </Router>
        
    </>
  )
}

export default App
