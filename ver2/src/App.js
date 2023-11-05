// Styles
import "./App.css";

// Header //
import Header from "./components/common/Header";

// layouts //
import DiaryLayout from "./layout/DiaryLayout.js";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <DiaryLayout />
      </main>
    </div>
  );
}

export default App;
