import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePagecomponent from "./Page/homepage/HomePage.component";
import HatsPage from "./Page/Hats/HatsPage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePagecomponent />} />
          <Route path="/shop/hats" element={<HatsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
