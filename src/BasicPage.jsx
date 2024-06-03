import Navbar from "./Components/Navbar";
import NavsTabs from "./Components/NavsTabs";
import CarsPage from "./Components/CarsPage";
import Footer from "./Components/Footer";
import { SearchProvider, SelectedSortProvider } from "./Components/Context";

const BasicPage = () => {
  return (
    <SearchProvider>
        <SelectedSortProvider>
      <div>
        <Navbar />
        <NavsTabs /> <br /> <br />
        <CarsPage /> <br /> <br />
        <Footer />
      </div>
      </SelectedSortProvider>
    </SearchProvider>
  );
};

export default BasicPage;
