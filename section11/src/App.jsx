import { createContext, useCallback, useReducer, useRef } from 'react';
import './App.css';
import { Editor } from './components/Editor';
import Header from './components/Header';
import { List } from './components/List';

const mockData = [
  {
    id: 0,
    isDone: false,
    content: 'React 공부하기',
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: '빨래하기',
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: '지인에듀 개발하기',
    date: new Date().getTime(),
  },
];

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return state.concat(action.data);
    case 'UPDATE':
      return state.map((todo) =>
        todo.id === action.data.id ? { ...todo, isDone: !todo.isDone } : todo
      );
    case 'DELETE':
      return state.filter((todo) => todo.id !== action.data.id);
    default:
      return state;
  }
}

export const TodoContext = createContext();

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  const onCreate = useCallback((content) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        isDone: false,
        content,
        date: new Date().getTime(),
      },
    });
  }, []);

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: 'UPDATE',
      data: {
        id: targetId,
      },
    });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: 'DELETE',
      data: {
        id: targetId,
      },
    });
  }, []);

  return (
    <>
      <div className="App">
        <Header />
        <TodoContext.Provider value={{ todos, onCreate, onUpdate, onDelete }}>
          <Editor />
          <List />
        </TodoContext.Provider>
      </div>
    </>
  );
}

export default App;
