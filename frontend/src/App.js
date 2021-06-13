import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import  DataProvider  from "./context/Context";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Router>
          <Header />
          <Main />
        </Router>
        </div>
    </DataProvider>
  );
}

export default App;
