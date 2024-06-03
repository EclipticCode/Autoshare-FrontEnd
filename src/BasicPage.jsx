import Navbar from './Components/Navbar'
import NavsTabs from './Components/NavsTabs'
import CarsPage from './Components/CarsPage'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Footer from './Components/Footer'
import { SearchProvider } from './Components/Context'



const BasicPage = () => {
    return (
      
        <SearchProvider>
          <div>
        <Navbar/>
        <NavsTabs/> <br /> <br />
        <CarsPage/> <br /> <br />
        <Footer/>
        </div>
        </SearchProvider>
    )
  }


export default BasicPage;