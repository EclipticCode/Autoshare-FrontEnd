import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Aboutus from './Components/Aboutus'
import Contactus from './Components/Contactus'
import BasicPage from './Components/BasicPage'


const App = () => {

  return (
    <div>
       <BrowserRouter>
          <Routes>
              <Route path='/Aboutus' element={<Aboutus/>}></Route>
              <Route path='/Contactus' element={<Contactus/>}></Route>
              <Route path='/:location' element={<BasicPage/>}></Route>
              <Route path='*' element={<BasicPage/>}></Route>
          </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App