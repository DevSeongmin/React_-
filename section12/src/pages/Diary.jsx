import { useParams } from 'react-router-dom';

export const Diary = () => {
  const params = useParams();
  console.log(params);
  return <div>Diary {params.id}번 일기입니다 ~~</div>;
};
