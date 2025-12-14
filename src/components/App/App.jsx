import "./App.css";
import { BookingProvider } from "../../contexts/BookingContext";
import { useScrollToTop } from "../../hooks/useScrollToTop";

import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

import HomePage from "../Home/HomePage";
import ServicesPage from "../Services/ServicesPage"; // ✅ проверь путь

import { Routes, Route } from "react-router-dom";

export default function App() {
  useScrollToTop();

  return (
    <BookingProvider>
      <div className="app" id="top">
        <Header />

        <main className="app__main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BookingProvider>
  );
}
