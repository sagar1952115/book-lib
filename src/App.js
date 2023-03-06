import "./App.css";
import HomePage from "./pages/homepage/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SubjectPage from "./pages/subjectpage/SubjectPage";
import SearchPage from "./pages/searchpage/SearchPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:subject" element={<SubjectPage />} />
        <Route path="/search/:book" element={<SearchPage />} />
      </Routes>
    </Router>
  );
}

export default App;
