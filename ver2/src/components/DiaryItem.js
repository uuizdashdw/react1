const DiaryItem = ({ id, author, content, emotion, created_date }) => {
  return (
    <div>
      <div className="box nameBox">
        <span className="name boxTitle">작성자 : </span>
        <span className="author">{author}</span>
      </div>

      <div className="box dateBox">
        <span className="date boxTitle">작성 날짜 : </span>
        <span>{new Date(created_date).toLocaleString()}</span>
      </div>

      <div className="box emotionBox">
        <span className="emotion boxTitle">감정 점수 : </span>
        <span>{emotion}</span>
      </div>

      <div className="box contentBox">
        <span className="content boxTitle">내용 : </span>
        <span>{content}</span>
      </div>
    </div>
  );
};

export default DiaryItem;
