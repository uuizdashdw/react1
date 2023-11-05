import DiaryList from "../components/DiaryList";

const DiaryListLayout = (props) => {
  const { diaryList } = props;

  return (
    <div className="container">
      <DiaryList diaryList={diaryList} />
    </div>
  );
};

export default DiaryListLayout;
