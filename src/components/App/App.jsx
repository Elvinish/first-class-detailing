import "./App.css";
import { BookingProvider } from "../../contexts/BookingContext";
import { useScrollToTop } from "../../hooks/useScrollToTop";

import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

import HomePage from "../Home/HomePage";

export default function App() {
  useScrollToTop();

  return (
    <BookingProvider>
      <div className="app" id="top">
        <Header />

        <main className="app__main">
          {/* Вся страница — внутри HomePage */}
          <HomePage />
        </main>

        <Footer />
      </div>
    </BookingProvider>
  );
}
