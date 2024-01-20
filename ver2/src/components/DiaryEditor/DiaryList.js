import { useContext } from "react";

import DiaryItem from "./DiaryItem";
import { DiaryStateContext } from "../../App.js";

const DiaryList = () => {
  const diaryList = useContext(DiaryStateContext);

  return (
    <div className="DiaryList container">
      <h2 className="title">DIARY LIST</h2>
      <ul>
        {diaryList.map((item) => (
          <DiaryItem key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default DiaryList;
