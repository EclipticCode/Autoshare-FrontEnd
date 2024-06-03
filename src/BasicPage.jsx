import Navbar from "./Components/Navbar";
import NavsTabs from "./Components/NavsTabs";
import CarsPage from "./Components/CarsPage";
import Footer from "./Components/Footer";
import {
  BookedCarProvider,
  SearchProvider,
  SelectedSortProvider,
} from "./Components/Context";

const BasicPage = () => {
  return (
    <SearchProvider>
      <SelectedSortProvider>
        <BookedCarProvider>
          <div>
            <Navbar />
            <NavsTabs /> <br /> <br />
            <CarsPage /> <br /> <br />
            <Footer />
          </div>
        </BookedCarProvider>
      </SelectedSortProvider>
    </SearchProvider>
  );
};

export default BasicPage;
