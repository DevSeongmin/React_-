import { useContext, useRef, useState } from 'react';
import '../css/Editor.css';
import { TodoDispatchContext } from '../App';

export const Editor = () => {
  const { onCreate } = useContext(TodoDispatchContext);
  const [content, setContent] = useState('');
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onSubmit = () => {
    if (!content) {
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent('');
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSubmit();
    }
  };

  return (
    <div className="Editor">
      <input
        ref={contentRef}
        onKeyDown={onKeyPress}
        value={content}
        onChange={onChangeContent}
        type="text"
        placeholder="새로운 Todo..."
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};
