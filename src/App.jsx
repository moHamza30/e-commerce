import Hero from "./components/Hero";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Productslist from "./components/Productslist";
import ProductDetailsPaeg from "./pages/productDetailspage";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CollectionsPage from "./pages/CollectionsPage";
import ScrollToTop from "./components/ScrollTotop";

export default function App() {
  return (
    <Router>
      <Sidebar />
      <ScrollToTop/>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<CollectionsPage/>} />
        <Route path="/product/:id" element={<ProductDetailsPaeg />} />
        <Route path="*" element={<h1>page not found</h1>} />
      </Routes>
      <Footer/>
    </Router>
  );
}
