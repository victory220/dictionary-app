import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container-fluid border border-2 rounded-4 p-4 custom-container">
        <img src={logo} className="App-logo" alt="logo" />
        <Dictionary />
      </div>
      <footer className="text-center mt-3">
        Coded by{" "}
        <a
          href="https://github.com/victory220/dictionary-app"
          target="_blank"
          rel="noreferrer"
        >
          Viktoriia Rudnytska
        </a>
      </footer>
    </div>
  );
}

export default App;
