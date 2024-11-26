import { Controller } from "./components/Controller";
import { Vieewer } from "./components/Viewer";
import "./App.css";
import { useState } from "react";

function App() {
  const [cnt, setCnt] = useState(0);

  const onClickBttn = (num) => {
    setCnt(cnt + num);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Vieewer cnt={cnt} />
      </section>
      <section>
        <Controller onClickBttn={onClickBttn} />
      </section>
    </div>
  );
}

export default App;
