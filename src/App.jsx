import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import View from "./pages/View";
import "./reset.css"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/view" element={<View />} />
    </Routes>
  );
}

export default App;
