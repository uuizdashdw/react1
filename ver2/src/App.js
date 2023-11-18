// Styles
import "./App.css";

// Layouts
import DiaryEditorLayout from "./components/Layouts/DiaryEditorLayout";

import DiaryList from "./components/DiaryEditor/DiaryList";

// Header //
import Header from "./components/common/Header";

import { useRef, useEffect, useMemo, useCallback, useReducer } from "react";
// import OptimizedTest from "./OptimizedTest";
// import LifeCycle from "./LifeCycle";

const reducer = (state, action) => {
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      const created_date = new Date().getTime();
      const newDiary = {
        ...action.data,
        created_date,
      };
      return [...newDiary, state];
    }
    case "REMOVE": {
      return state.filter((it) => it.id !== state.targetId);
    }
    case "EDIT": {
      return state.map((it) =>
        it.id === action.targetId
          ? { ...it, content: action.newContent, emtion: action.newEmotion }
          : it
      );
    }
    default:
      return state;
  }
};

function App() {
  // const [data, setData] = useState([]);
  const [data, dispatch] = useReducer(reducer, []);
  const diaryId = useRef(0);

  // API 호출
  const getData = async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    ).then((res) => res.json());

    console.log("res => ", { res });
    const newData = res.slice(0, 20).map((item) => {
      return {
        author: item.email,
        content: item.body,
        emotion: Math.floor(Math.random() * 5) + 1,
        created_date: new Date().getTime(),
        id: diaryId.current++,
      };
    });

    dispatch({ type: "INIT", data: newData });
  };

  useEffect(() => {
    getData();
  }, []);

  // Diary 추가 //
  const onCreateDiary = useCallback((author, content, emotion) => {
    dispatch({
      type: "CREATE",
      data: { author, content, emotion, id: diaryId.current },
    });

    diaryId.current += 1;
  }, []);

  //Diary 삭제
  // 최적화 (useCallback) //
  const onRemoveDiary = useCallback((targetId) => {
    dispatch({ type: "REMOVE", targetId });
  }, []);

  // Diary 수정하기
  // 최적화 (useCallback) //
  const onEditDiary = useCallback((targetId, newContent, newEmotion) => {
    dispatch({ type: "EDIT", targetId, newContent, newEmotion });
  }, []);

  // useMemo 를 사용한 감정점수를 기준으로 한 일기 평균 계산 최적화(메모이제이션) //
  // 메모이제이션이란 함수의 결과를 이전에 계산한 값으로 재사용 할 수 있기 때문에   //
  // 동일한 입력에 대해서는 함수를 다시 사용하지 않고 이전에 계산한 결과를 재사용   //
  // * 단점 * => 메모리 사용량이 증가할 수 있고, 메모리 누수로 이어질 수 있음    //
  const getDiaryAnalysis = useMemo(() => {
    const goodCount = data.filter((item) => item.emotion >= 3).length;
    const badCount = data.length - goodCount;

    const goodRatio = Math.floor((goodCount / data.length) * 100);

    return { goodCount, badCount, goodRatio };
  }, [data]);

  const { goodCount, badCount, goodRatio } = getDiaryAnalysis;

  return (
    <div className="App">
      <Header />
      {/* <LifeCycle /> */}
      {/* <OptimizedTest /> */}
      <main>
        <DiaryEditorLayout onCreateDiary={onCreateDiary} />
        <div className="container">
          <p>전체 일기 갯수 : {data.length}개</p>
          <p>기분 좋은 일기 갯수 : {goodCount}개</p>
          <p>기분 나쁜 일기 갯수 : {badCount}개</p>
          <p>기분 좋은 일기 평균 : {goodRatio} 개</p>
        </div>
        <DiaryList
          diaryList={data}
          onRemoveDiary={onRemoveDiary}
          onEditDiary={onEditDiary}
        />
      </main>
    </div>
  );
}

export default App;
