import Navbar from "./Navbar";
import NavsTabs from "./NavsTabs";
import CarsPage from "./CarsPage";
import Footer from "./Footer";
import {
  BookedCarProvider,
  SearchProvider,
  SelectedSortProvider,
} from "./Context";

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
