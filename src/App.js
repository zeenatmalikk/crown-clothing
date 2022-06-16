import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePagecomponent from "./Page/homepage/HomePage.component";
import Shop from "./Page/shop/Shop";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePagecomponent />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
