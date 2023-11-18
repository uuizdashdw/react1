import DiaryItem from "./DiaryItem";

const DiaryList = ({ diaryList, onRemoveDiary, onEditDiary }) => {
  console.log("DIARYLIST : ", diaryList);

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
