import "./Main.css";

const Main = () => {
  const user = {
    name: "황성민",
    isLongin: true,
  };

  if (user.isLongin) {
    return <div className="logout">로그아웃</div>;
  }
  return <div>로그인</div>;
};

export default Main;
