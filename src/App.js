import "./App.css";
import { useState } from "react";
import { Keypad } from "./component/keypad/Keypad.tsx";

function App() {
  const [showKeypad, setShowKeypad] = useState({ first: false, second: false });
  const [inputFirst, setInputFirst] = useState("");
  const [inputSecond, setInputSecond] = useState("");

  const onClickInput = (e) => {
    // if (e.target.id === "first") {
    //   setKeypadFirst(!keypadFirst);
    // } else if (e.target.id === "second") {
    //   setKeypadSecond(!keypadSecond);
    // }
    // if (e.target.id === "first") {
    //   console.log(showKeypad);
    // }
    const newState = { ...showKeypad };
    newState[e.target.id] = !newState[e.target.id];
    setShowKeypad(newState);
  };

  const onClickFirst = (value) => {
    if (value === "backspace") {
      setInputFirst(inputFirst.slice(0, -1));
    } else if (value === "clear") {
      setInputFirst("");
    } else if (value === "close") {
      const newState = { ...showKeypad };
      newState["first"] = !newState.first;
      setShowKeypad(newState);
    } else {
      let inputContent = inputFirst;
      if (inputContent.length < 6) {
        inputContent += value;
        setInputFirst(inputContent);
      }
    }
  };

  const onClickSecond = (value) => {
    if (value === "backspace") {
      setInputSecond(inputSecond.slice(0, -1));
    } else if (value === "clear") {
      setInputSecond("");
    } else if (value === "close") {
      const newState = { ...showKeypad };
      newState.second = !newState.second;
      setShowKeypad(newState);
    } else {
      let inputContent = inputSecond;
      if (inputContent.length < 6) {
        inputContent += value;
        setInputSecond(inputContent);
      }
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputFirst === inputSecond) {
      alert("같습니다");
    } else {
      alert("다릅니다");
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          // type="password"
          value={inputFirst}
          onClick={onClickInput}
          id={"first"}
        />
        {showKeypad["first"] && <Keypad onClick={onClickFirst} />}
      </div>
      <div>
        <input value={inputSecond} onClick={onClickInput} id={"second"} />
        {showKeypad["second"] && <Keypad onClick={onClickSecond} />}
      </div>
      <div>
        <button type="submit">제출</button>
      </div>
    </form>
  );
}

export default App;
