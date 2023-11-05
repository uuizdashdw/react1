import { useState, useRef } from "react";

const DiaryEditor = () => {
  const refs = {
    authorInput: useRef(),
    contentInput: useRef(),
  };

  const [timer, setTimer] = useState(null);
  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1,
  });

  const isChangeHandler = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });

    if (timer) clearTimeout(timer);

    const newTimer = setTimeout(() => {
      console.log(e.target.value);
    }, 200);

    setTimer(newTimer);
  };

  const isSubmitHandler = () => {
    if (state.author.length < 1) {
      alert("최소 1글자 이상 입력해주세요");
      return;
    }

    if (state.content.length < 5) {
      alert("최소 5글자 이상 입력해주세요");
      return;
    }
    alert("저장되었습니다.");
    console.log(state);
  };

  return (
    <div className="EditorWrapper">
      <h1 className="EditorTitle">DIARY EDITOR</h1>
      <div id="content" className="editorContainer">
        <div className="contentWrapper">
          <label className="label">이름</label>
          <input
            ref={refs.authorInput}
            id="author"
            type="text"
            className="input"
            name="author"
            value={state.author}
            onChange={isChangeHandler}
          />
        </div>
        <div className="contentWrapper textAreaWrapper">
          <label className="label">본문</label>
          <textarea
            ref={refs.contentInput}
            className="textArea"
            name="content"
            value={state.content}
            onChange={isChangeHandler}
          />
        </div>
        <div className="contentWrapper emotionWrapper">
          <label>오늘의 감정점수</label>
          <select
            id="select"
            value={state.emotion}
            name="emotion"
            onChange={isChangeHandler}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>
        <div>
          <button type="button" className="btn" onClick={isSubmitHandler}>
            일기 저장하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiaryEditor;
