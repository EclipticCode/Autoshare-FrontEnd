import React from 'react'
import Navbar from './Components/Navbar'
import NavsTabs from './Components/NavsTabs'
import CarsPage from './Components/CarsPage'
import { BrowserRouter , Routes , Route } from 'react-router-dom'



const App = () => {
  
  const BasicPage = () => {
    return (
      <div>
        <Navbar/>
      <NavsTabs/>
      <CarsPage/>
      </div>
    )
  }

  return (
    <div>
       <BrowserRouter>
             <Routes>
               <Route path='/:location' element={<BasicPage/>}></Route>
               <Route path='*' element={<BasicPage/>}></Route>
             </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App