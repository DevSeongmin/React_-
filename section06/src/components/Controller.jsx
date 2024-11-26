export const Controller = ({ onClickBttn }) => {
  return (
    <div>
      <button onClick={() => onClickBttn(-1)}>-1</button>
      <button onClick={() => onClickBttn(-10)}>-10</button>
      <button onClick={() => onClickBttn(-100)}>-100</button>
      <button onClick={() => onClickBttn(100)}>+100</button>
      <button onClick={() => onClickBttn(10)}>+10</button>
      <button onClick={() => onClickBttn(1)}>+1</button>
    </div>
  );
};
