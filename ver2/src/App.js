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

// Dummy Json //

// const json = [
//   {
//     id: 1,
//     author: "강찬웅",
//     content: "기분이 1밖에 안되네요.",
//     emotion: 1,
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 2,
//     author: "강찬웅",
//     content: "기분이 2밖에 안되네요.",
//     emotion: 2,
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 3,
//     author: "강찬웅",
//     content: "기분이 3 정도 되네요.",
//     emotion: 3,
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 4,
//     author: "강찬웅",
//     content: "기분이 4나 되네요.",
//     emotion: 4,
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 5,
//     author: "강찬웅",
//     content: "기분이 최고입니다!",
//     emotion: 5,
//     created_date: new Date().getTime(),
//   },
// ];

import { useState, useRef, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const dataId = useRef(0);

  const onCreateDiary = (author, content, emotion) => {
    const created_date = new Date().getTime();

    const newDiary = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };

    dataId.current += 1;
    setData([newDiary, ...data]);

    console.log(data);
  };

  return (
    <div className="App">
      <Header />
      <main>
        <Router>
          <Routes>
            <Route path="/" element={<HomeLayout />} />
            <Route
              path="/edit"
              element={<DiaryEditorLayout onCreateDiary={onCreateDiary} />}
            />
            <Route
              path="/list"
              element={<DiaryListLayout diaryList={data} />}
            />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;
