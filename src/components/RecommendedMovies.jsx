import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

const RecommendedMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchRecommendedMovies = async () => {
      try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=action`);
        const data = await response.json();
        if (data.Response === "True") {
          setMovies(data.Search.slice(0, 5)); // Get top 5 recommended movies
        }
      } catch (error) {
        console.error("Error fetching recommended movies:", error);
      }
    };

    fetchRecommendedMovies();
  }, []);

  return (
    <div className="recommended-movies">
      <h3>Recommended Movies</h3>
      <ul>
        {movies.map((movie) => (
          <li key={movie.imdbID}>
            <Link to={`/movie/${movie.imdbID}`}>
              {movie.Title} ({movie.Year})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecommendedMovies;