import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import CaseStudy from "./pages/CaseStudy.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/case-study" element={<CaseStudy />} />
    </Routes>
  );
}

export default App;
