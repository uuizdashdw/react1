const Header = () => {
  return (
    <header id="header">
      <div className="container headerWrapper">
        <div>
          <a href="/">홈으로</a>
        </div>
        <ul id="gnb">
          <li>
            <a href="/list">일기 목록</a>
          </li>
          <li>GNB 2</li>
          <li>GNB 3</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
