import { useContext, useEffect, useState } from 'react';
import { DiaryStateContext } from '../App';
import { useNavigate } from 'react-router-dom';

export const useDiary = (id) => {
  const data = useContext(DiaryStateContext);
  const [curDiaryItem, setCurDiaryItem] = useState();
  const nav = useNavigate();

  useEffect(() => {
    const currrentDiaryItem = data.find((item) => String(item.id) === String(id));

    if (!currrentDiaryItem) {
      window.alert('해당 일기를 찾을 수 없습니다.');
      nav('/', { replace: true });
    }

    setCurDiaryItem(currrentDiaryItem);
  }, [id, data]);

  return curDiaryItem;
};
