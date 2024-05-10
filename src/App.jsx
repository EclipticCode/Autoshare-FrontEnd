import React from 'react'
import Navbar from './Components/Navbar'
import NavsTabs from './Components/NavsTabs'
import CarsPage from './Components/CarsPage'


const App = () => {
  return (
    <div>
      <Navbar/>
      <NavsTabs/>
      <CarsPage/>
    </div>
  )
}

export default App