import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Main />
      </Router>
    </div>
  );
}

export default App;
