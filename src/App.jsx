import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ListEmployeeComponents from './components/ListEmployeeComponents'
import EmployeeComponent from './components/EmployeeComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponents from './components/FooterComponents'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path='/employees' element={<ListEmployeeComponents />}></Route>
          <Route path='/add-employee' element={<EmployeeComponent />}></Route>
          <Route path='/edit-employee/:id' element={<EmployeeComponent />}></Route>
        </Routes>
        <FooterComponents />
      </BrowserRouter>


    </>
  )
}

export default App
