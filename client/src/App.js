import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import CreateListing from "./pages/CreateListing";
import ListingDetails from "./pages/ListingDetails";
import TripList from "./pages/TripList";
import WishList from "./pages/WishList";
import PropertyList from "./pages/PropertyList";
import ReservationList from "./pages/ReservationList";
import CategoryPage from "./pages/CategoryPage";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegisterPage/>}/>
        <Route path="/homepage" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/create-listing" element={<CreateListing/>}/>
        <Route path="/properties/:listingId" element={<ListingDetails/>}/>
        <Route path="/properties/category/:category" element={<CategoryPage/>}/>
        <Route path="/properties/search/:search" element={<SearchPage/>}/>
        <Route path=":userId/trips" element={<TripList/>}/>
        <Route path=":userId/wishlist" element={<WishList/>}/>
        <Route path=":userId/Properties" element={<PropertyList/>}/>
        <Route path=":userId/reservations" element={<ReservationList/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
