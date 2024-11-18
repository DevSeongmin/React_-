import { useState } from "react";
import useInput from "../hooks/UseInput";

const HookExam = () => {
  const [input, onChange] = useInput();

  return (
    <div>
      <input value={input} onChange={onChange} />
      {input}
    </div>
  );
};

export default HookExam;
