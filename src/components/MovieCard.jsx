function MovieCard({ movie }) {
  return (
    <div style={cardStyle} className="movie-card">
      <img
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/300x450"
        }
        alt={movie.Title}
        style={imageStyle}
      />
      <div style={cardContent}>
        <h3 style={titleStyle}>{movie.Title}</h3>
        <p style={yearStyle}>{movie.Year}</p>
      </div>
    </div>
  );
}

const cardStyle = {
  backgroundColor: "#1c1c1c",
  borderRadius: "14px",
  overflow: "hidden",
  color: "#fff",
  cursor: "pointer",
  boxShadow: "0 12px 25px rgba(0,0,0,0.5)",
  animation: "fadeUp 0.6s ease forwards",
};

const imageStyle = {
  width: "100%",
  height: "320px",
  objectFit: "cover",
};

const cardContent = {
  padding: "12px",
};

const titleStyle = {
  fontSize: "16px",
  margin: "5px 0",
};

const yearStyle = {
  fontSize: "14px",
  color: "#bbb",
};

export default MovieCard;
