import { Button } from '../components/Button';
import { DiaryList } from '../components/DiaryList';
import { Header } from '../components/Header';

export const Home = () => {
  return (
    <>
      <div>
        <Header
          title={'2024년 11월'}
          leftChild={<Button text={'<'} />}
          rightChild={<Button text={'>'} />}
        />
        <DiaryList />
      </div>
    </>
  );
};
