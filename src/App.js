import "./styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Detail from "./pages/detail";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <div className="App">
      <div className="main">
        <BrowserRouter>
          <Routes>
            <Route path="/" Component={Home} />;
            <Route path="/detail/:index" Component={Detail} />;
            <Route path="*" Component={NotFound} />;
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
