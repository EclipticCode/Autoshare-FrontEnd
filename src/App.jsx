import React from 'react'
import Navbar from './Components/Navbar'
import NavsTabs from './Components/NavsTabs'
import CarsPage from './Components/CarsPage'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Footer from './Components/Footer'
import { SearchProvider } from './Components/Context'


const App = () => {
  
  const BasicPage = () => {
     console.log(import.meta.url)
    return (
      
        <SearchProvider>
          <div>
        <Navbar/>
        <NavsTabs/> <br />
        <CarsPage/> <br /> <br />
        <Footer/>
        </div>
        </SearchProvider>
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