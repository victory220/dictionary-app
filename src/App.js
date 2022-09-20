import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <img src={logo} className="App-logo" alt="logo" />
        <Dictionary />
      </div>
      <footer className="text-center mt-3">Coded by Viktoriia Rudnytska</footer>
    </div>
  );
}

export default App;
