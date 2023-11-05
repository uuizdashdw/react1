import DiaryItem from "./DiaryItem";

const DiaryList = (props) => {
  const { diaryList } = props;
  return (
    <div className="diaryList">
      <h2 className="diaryListTitle">일기 목록</h2>

      <div>
        <ul id="diaryList">
          {diaryList.map((item) => (
            <li key={item.id} className="list">
              <DiaryItem {...item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
