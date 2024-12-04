import { useNavigate, useParams } from 'react-router-dom';
import { Header } from '../components/Header';
import { Button } from '../components/Button';
import { Viewer } from '../components/Viwer';
import { useDiary } from '../hooks/useDiary';
import { getStringedDate } from '../util/getStringedDate';

export const Diary = () => {
  const nav = useNavigate();
  const params = useParams();

  const curDiaryItem = useDiary(params.id);

  if (!curDiaryItem) {
    return <div>데이터 로딩중...!</div>;
  }

  const { createdDate, emotionId, content } = curDiaryItem;
  const title = getStringedDate(new Date(createdDate));

  console.log(curDiaryItem);

  return (
    <div>
      <Header
        title={title}
        leftChild={
          <Button
            onClick={() => {
              nav(-1);
            }}
            text={'뒤로가기'}
          />
        }
        rightChild={
          <Button
            onClick={() => {
              nav(`/edit/${params.id}`);
            }}
            text={'수정하기'}
          />
        }
      />
      <Viewer emotionId={emotionId} content={content} />
    </div>
  );
};
