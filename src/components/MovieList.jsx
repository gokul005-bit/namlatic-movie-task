import { useState, useEffect } from "react";
import { searchMovies } from "../services/omdb";
import MovieCard from "./MovieCard";

function MovieList() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      setLoading(true);
      const results = await searchMovies(query);
      setMovies(results);
      setLoading(false);
    };

    fetchData();
  }, [query]);

  return (
    <div style={pageStyle}>
      <input
        type="text"
        placeholder="Search for movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={searchStyle}
      />

      {!query && (
        <p style={hintText}>
          🎬 Start typing to explore movies
        </p>
      )}

      {loading && <p style={loadingText}>Searching movies… 🔍</p>}

      <div style={containerStyle}>
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
}

const pageStyle = {
  padding: "30px 20px",
  background: "linear-gradient(to right, #141e30, #243b55)",
  minHeight: "100vh",
};

const searchStyle = {
  width: "100%",
  maxWidth: "500px",
  padding: "14px 18px",
  margin: "0 auto 20px",
  display: "block",
  fontSize: "16px",
  borderRadius: "30px",
  border: "none",
  outline: "none",
  boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
};

const containerStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
  gap: "24px",
  marginTop: "30px",
};

const hintText = {
  textAlign: "center",
  color: "#ccc",
  fontSize: "20px",
};

const loadingText = {
  textAlign: "center",
  color: "#fff",
  fontSize: "18px",
};

export default MovieList;
