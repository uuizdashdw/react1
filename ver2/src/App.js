// Styles
import "./App.css";

// Header //
import Header from "./components/common/Header";

// layouts //
import HomeLayout from "./layout/HomeLayout";
import DiaryEditorLayout from "./layout/DiaryEditorLayout.js";
import DiaryListLayout from "./layout/DiaryListLayout";

//Router //
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Router>
          <Routes>
            <Route path="/" element={<HomeLayout />} />
            <Route path="/edit" element={<DiaryEditorLayout />} />
            <Route path="/list" element={<DiaryListLayout />} />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;
