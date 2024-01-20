import React, { useState, useRef, useContext } from "react";
import { DiaryDispatchContext } from "../../App";

const DiaryItem = ({ author, content, emotion, created_date, id }) => {
  const { onRemoveDiary, onEditDiary } = useContext(DiaryDispatchContext);

  const [edit, setEdit] = useState(false);
  const isEditToggle = () => setEdit(!edit);

  const [localContent, setLocalContent] = useState(content);
  const [localEmotion, setLocalEmotion] = useState(emotion);

  const editContent = useRef();

  const onRemove = () => {
    if (window.confirm(`정말 ${id}번째 일기를 삭제하시겠습니까?`)) {
      onRemoveDiary(id);
    } else {
      return;
    }
  };

  // 로컬 본문내용 수정 핸들링
  const onChangeLocalContent = (e) => {
    setLocalContent(e.target.value);
    console.log(e.target.value);
  };

  // 로컬 감정점수 수정 핸들링
  const onChangeLocalEmotion = (e) => {
    console.log(e.target.value);
    setLocalEmotion(e.target.value);
  };

  // 취소하기
  const isQuitEditHandler = () => {
    setEdit(false);
    setLocalContent(content);
  };

  // 본문 내용 수정하기
  const isEditHandler = () => {
    if (
      window.confirm(`정말 ${id}번째 일기를 수정하시겠습니까?`) &&
      localContent.length > 5
    ) {
      onEditDiary(id, localContent, localEmotion);
      setEdit(false);
    } else {
      alert("본문 내용의 길이는 5자 이상이여야 합니다");
      editContent.current.focus();
      return;
    }
  };

  return (
    <li className="card">
      <div className="titleSection cardSection">
        <span className="cardTitle">작성자 : </span>
        <span className="cardContent">{author}</span>
      </div>
      <div className="contentSection cardSection">
        <span className="cardTitle">내용 : </span>
        <span className="cardContent">
          {edit ? (
            <>
              <textarea
                ref={editContent}
                className="input contentInput"
                value={localContent}
                onChange={onChangeLocalContent}
              />
            </>
          ) : (
            <>{content}</>
          )}
        </span>
      </div>
      <div className="emotionSection cardSection">
        <span className="cardTitle">기분점수 : </span>
        <span className="cardContent">
          {edit ? (
            <>
              <select
                className="emotionInput input"
                onChange={onChangeLocalEmotion}
                value={localEmotion}
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </select>
            </>
          ) : (
            <>{emotion}</>
          )}
        </span>
      </div>
      <div className="dateSection cardSection">
        <span className="cardTitle">작성일 : </span>
        <span className="cardContent">
          {new Date(created_date).toLocaleDateString()}
        </span>
      </div>
      {edit ? (
        <>
          <div className="cardSection">
            <button type="button" className="btn" onClick={isEditHandler}>
              수정완료
            </button>
          </div>
          <div className="cardSection">
            <button type="button" className="btn" onClick={isQuitEditHandler}>
              취소하기
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="cardSection">
            <button type="button" className="btn" onClick={onRemove}>
              삭제하기
            </button>
          </div>
          <div className="cardSection">
            <button type="button" className="btn" onClick={isEditToggle}>
              수정하기
            </button>
          </div>
        </>
      )}
    </li>
  );
};

export default React.memo(DiaryItem);
