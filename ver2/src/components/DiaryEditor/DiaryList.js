import { useContext } from "react";

import DiaryItem from "./DiaryItem";
import { DiaryStateContext } from "../../App.js";

const DiaryList = ({ onRemoveDiary, onEditDiary }) => {
  const diaryList = useContext(DiaryStateContext);

  return (
    <div className="DiaryList container">
      <h2 className="title">DIARY LIST</h2>
      <ul>
        {diaryList.map((item) => (
          <DiaryItem
            key={item.id}
            {...item}
            onRemoveDiary={onRemoveDiary}
            onEditDiary={onEditDiary}
          />
        ))}
      </ul>
    </div>
  );
};

export default DiaryList;
