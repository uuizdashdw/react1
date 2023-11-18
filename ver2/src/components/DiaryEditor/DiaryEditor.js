import React, { useState, useRef, useEffect } from "react";

const DiaryEditor = ({ onCreateDiary }) => {
  useEffect(() => {
    console.log("DIARY EDITOR 렌더");
  });

  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1,
  });

  const [timer, setTimer] = useState(null);

  const authorInput = useRef();
  const contentInput = useRef();

  const changeStateHandler = (e) => {
    console.log(e.target.value);
    console.log(e.target.name);

    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const saveStateHandler = () => {
    if (state.author.length < 1) {
      alert("이름은 1자 이상 입력해주세요");
      authorInput.current.focus();
      return;
    }

    if (state.content.length < 5) {
      alert("내용은 5자 이상 입력해주세요");
      contentInput.current.focus();
      return;
    }

    console.log(state);

    if (timer) clearTimeout(timer);

    const newTimer = setTimeout(() => {
      // onCreateDiary 호출
      onCreateDiary(state.author, state.content, state.emotion);
      alert("저장 성공");

      // 초기화
      setState({
        author: "",
        content: "",
        emotion: 1,
      });
    }, 200);

    setTimer(newTimer);
  };

  return (
    <div className="container">
      <h2 className="title">DIARY EDITOR</h2>
      <div className="DiaryItem">
        <ul className="form">
          <li>
            <label className="label author">이름 : </label>
            <input
              ref={authorInput}
              type="text"
              className="input authorInput"
              name="author"
              value={state.author}
              onChange={changeStateHandler}
            />
          </li>
          <li>
            <label className="label content">내용 : </label>
            <textarea
              ref={contentInput}
              type="text"
              className="input contentInput"
              value={state.content}
              name="content"
              onChange={changeStateHandler}
            />
          </li>
          <li>
            <label className="label emotion">오늘의 기분점수 : </label>
            <select
              className="input emotionInput"
              name="emotion"
              value={state.emotion}
              onChange={changeStateHandler}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </li>
        </ul>
        <div className="btnWrapper">
          <button type="button" className="btn" onClick={saveStateHandler}>
            저장하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(DiaryEditor);
