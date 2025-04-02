import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate
import { WatchlistContext } from "../context/WatchlistContext";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Initialize useNavigate
  const { addMovie } = useContext(WatchlistContext);
  const [movieData, setMovieData] = useState(null);
  const [error, setError] = useState("");
  const [watchStatus, setWatchStatus] = useState("Want to Watch");

  // Fetch movie details
  const getMovieDetails = async (movieId) => {
    try {
      const url = `https://www.omdbapi.com/?apikey=${API_KEY}&i=${movieId}`;
      const response = await fetch(url);
      const data = await response.json();

      if (data.Response === "True") {
        setMovieData(data);
        setError("");
      } else {
        setMovieData(null);
        setError("Movie not found.");
      }
    } catch (error) {
      setError("Error fetching movie details.");
    }
  };

  // Fetch movie on mount
  useEffect(() => {
    if (id) {
      getMovieDetails(id);
    }
  }, [id]);

  // Handle adding movie & navigate back
  const handleAddMovie = () => {
    if (movieData) {
      addMovie(movieData, watchStatus);
      alert(`${movieData.Title} added to ${watchStatus} list!`);
      navigate("/watchlist"); // Navigate back to Watchlist page
    }
  };

  return (
    <div>
      {error && <p style={{ color: "red" }}>{error}</p>}

      {movieData && (
        <div>
          <h2>
            {movieData.Title} ({movieData.Year})
          </h2>
          <img src={movieData.Poster} alt={`${movieData.Title} Poster`} />
          <p><strong>Genre:</strong> {movieData.Genre}</p>
          <p><strong>Plot:</strong> {movieData.Plot}</p>
          <p><strong>Director:</strong> {movieData.Director}</p>
          <p><strong>Actors:</strong> {movieData.Actors}</p>

          <div>
            <label htmlFor="status">Select Watch Status:</label>
            <select 
              id="status"
              value={watchStatus}
              onChange={(e) => setWatchStatus(e.target.value)}
            >
              <option value="Want to Watch">Want to Watch</option>
              <option value="Currently Watching">Currently Watching</option>
              <option value="Watched">Watched</option>
            </select>

            <button className="add-button" onClick={handleAddMovie}>
              Add to Watchlist
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;