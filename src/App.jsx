import AppRoutes from "./routes/AppRoutes";
import "./styles/global.scss";

function App() {
  return (
    <div className="app-wrapper">
      <div className="mobile-container">
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;
