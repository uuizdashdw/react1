// Components //
import DiaryEditor from "../components/DiaryEditor";

const DiaryLayout = (eventProps) => {
  const { onCreateDiary } = eventProps;
  return (
    <div className="container">
      <DiaryEditor onCreateDiary={onCreateDiary} />
    </div>
  );
};

export default DiaryLayout;
