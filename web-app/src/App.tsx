import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import News from "./pages/News";
import './App.css'; 

function App() {
  return (
    <Router>
      <Navbar />
      <main className="p-6">
        <Routes>
          <Route path="/news" element={<News />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <footer className="footer">
        © {new Date().getFullYear()} BugWild. All Rights Reserved.
      </footer>
    </Router>
  );
}

export default App;
