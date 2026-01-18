import MovieList from "./components/MovieList";
import logo from "./assets/1630644661343.jpg";

function App() {
  return (
    <div>
      <header style={headerStyle}>
        <div style={titleContainer}>
          <img src={logo} alt="Namlatic Logo" style={logoStyle} />
          <h1 style={titleStyle}>Namlatic Movie Explorer</h1>
        </div>

        <p style={subtitleStyle}>
          Search and explore movies in real time
        </p>
      </header>

      <MovieList />
    </div>
  );
}

const headerStyle = {
  background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
  padding: "30px 20px",
  textAlign: "center",
  animation: "fadeDown 0.8s ease",
};

const titleContainer = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "14px",
};

const logoStyle = {
  width: "50px",
  height: "50px",
  borderRadius:"50%",
  animation: "logoPop 1s ease",
};

const titleStyle = {
  color: "#ffffff",
  margin: 0,
  fontSize: "32px",
  letterSpacing: "1px",
};

const subtitleStyle = {
  color: "#d0d0d0",
  marginTop: "8px",
  fontSize: "16px",
};

export default App;
