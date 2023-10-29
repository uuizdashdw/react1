import "./App.css";
import "./css/custom.css";

import Header from "./component/Header/header";
import ShuffleLayout from "./component/content/shuffleLayout";

function App() {
  return (
    <div className="App">
      <Header />
      <ShuffleLayout />
    </div>
  );
}

export default App;
