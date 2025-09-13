import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import CaseStudy from "./pages/CaseStudy.jsx";

function App() {
  return (
    <Routes>
      <Route path="noman_mahmood/" element={<Home />} />
      <Route path="noman_mahmood/case-study" element={<CaseStudy />} />
    </Routes>
  );
}

export default App;
