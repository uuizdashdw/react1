import DiaryEditor from "../DiaryEditor/DiaryEditor";

const DiaryEditorLayout = ({ onCreateDiary }) => {
  return (
    <div>
      <DiaryEditor onCreateDiary={onCreateDiary} />
    </div>
  );
};

export default DiaryEditorLayout;
