import { useNavigate, useParams } from 'react-router-dom';
import { Header } from '../components/Header';
import { Button } from '../components/Button';
import { useContext, useEffect, useState } from 'react';
import { DiaryDispatchContext, DiaryStateContext } from '../App';
import { Editor } from '../components/Editor';
import { useDiary } from '../hooks/useDiary';

export const Edit = () => {
  const params = useParams();
  const nav = useNavigate();
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);

  const curDiaryItem = useDiary(params.id);

  const onClickDelete = () => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      onDelete(params.id);
      nav('/', { replace: true });
    }
  };

  const onSubmit = (input) => {
    if (window.confirm('수정하시겠습니까?')) {
      onUpdate(params.id, input.createdDate.getTime(), input.emotionId, input.content);
    }
    nav('/', { replace: true });
  };
  return (
    <div>
      <Header
        title={'일기 수정하기'}
        leftChild={
          <Button
            onClick={() => {
              nav(-1);
            }}
            text={'< 뒤로 가기'}
          />
        }
        rightChild={<Button onClick={onClickDelete} text={'삭제 하기'} type={'NEGATIVE'} />}
      />
      <Editor onSubmit={onSubmit} initData={curDiaryItem} />
    </div>
  );
};
