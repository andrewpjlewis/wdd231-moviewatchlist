import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { WatchlistProvider } from "./context/WatchlistContext";
import MovieForm from "./components/MovieForm";
import MovieList from "./components/MovieList";
import Header from "./components/Header";
import ContactForm from "./components/ContactForm";
import MovieDetails from "./components/MovieDetails"; 
import RecommendedMovies from "./components/RecommendedMovies";

const App = () => {
  return (
    <Router>
      <WatchlistProvider>
        <Header />
        <Routes>
          <Route path="/" element={<MovieForm />} />
          <Route path="/watchlist" element={<MovieList />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/recommended" element={<RecommendedMovies />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </WatchlistProvider>
    </Router>
  );
};

export default App;