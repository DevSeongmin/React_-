import { useContext, useState } from 'react';
import { Button } from '../components/Button';
import { DiaryList } from '../components/DiaryList';
import { Header } from '../components/Header';
import { DiaryStateContext } from '../App';

const getMonthlyData = (pivotData, data) => {
  return data.filter((item) => {
    const itemDate = new Date(item.createdDate);
    return (
      itemDate.getFullYear() === pivotData.getFullYear() &&
      itemDate.getMonth() === pivotData.getMonth()
    );
  });
};

export const Home = () => {
  const data = useContext(DiaryStateContext);
  const [pivotDate, setPivotDate] = useState(new Date());

  const monthlyData = getMonthlyData(pivotDate, data);

  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };
  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };

  return (
    <>
      <div>
        <Header
          title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
          leftChild={<Button text={'<'} onClick={onDecreaseMonth} />}
          rightChild={<Button text={'>'} onClick={onIncreaseMonth} />}
        />
        <DiaryList data={monthlyData} />
      </div>
    </>
  );
};
