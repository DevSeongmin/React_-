import './App.css';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { New } from './pages/New';
import { Diary } from './pages/Diary';
import { NotFound } from './pages/NotFound';
import { Edit } from './pages/Edit';
import { createContext, useEffect, useReducer, useRef, useState } from 'react';

// 1. "/" 모든 일기를 조회하는 Home페이지
// 2. "/new" 일기를 작성하는 페이지
// 3. "/diary" 일기의 상세 내용을 조회하는 페이지

function reducer(state, action) {
  let nextState;
  switch (action.type) {
    case 'CREATE':
      nextState = [action.data, ...state];
      break;
    case 'UPDATE':
      nextState = state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item
      );
      break;
    case 'DELETE':
      nextState = state.filter((item) => String(item.id) !== String(action.data.id));
      break;
    case 'INIT':
      nextState = action.data;
      break;
    default:
      return state;
  }
  localStorage.setItem('diary', JSON.stringify(nextState));
  return nextState;
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);

  useEffect(() => {
    const storedData = localStorage.getItem('diary');
    if (!storedData) {
      setIsLoading(false);
      return;
    }
    const parsedData = JSON.parse(storedData);
    if (!Array.isArray(parsedData)) {
      setIsLoading(false);
      return;
    }
    let maxId = 0;
    parsedData.forEach((item) => {
      if (Number(item.id) > maxId) {
        maxId = Number(item.id);
      }
    });

    idRef.current = maxId + 1;

    dispatch({ type: 'INIT', data: parsedData });
    setIsLoading(false);
  }, []);

  // 새로운 일기를 추가하는 기능
  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      },
    });
  };
  // 기존 일기 수정
  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: 'UPDATE',
      data: {
        id,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  // 기존 일기 삭제
  const onDelete = (id) => {
    dispatch({
      type: 'DELETE',
      data: {
        id,
      },
    });
  };

  if (isLoading) {
    return <div>로딩 중...</div>;
  }
  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;