import React from "react";

export const Keypad = ({ onClick }) => {
  const handleClick = (e) => {
    const value = e.target.id;
    onClick(value);
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "100px 100px 100px",
        cursor: "pointer",
      }}
    >
      <div style={{ border: "1px solid black" }} id="1" onClick={handleClick}>
        1
      </div>
      <div style={{ border: "1px solid black" }} id="2" onClick={handleClick}>
        2
      </div>
      <div style={{ border: "1px solid black" }} id="3" onClick={handleClick}>
        3
      </div>
      <div style={{ border: "1px solid black" }} id="4" onClick={handleClick}>
        4
      </div>
      <div style={{ border: "1px solid black" }} id="5" onClick={handleClick}>
        5
      </div>
      <div style={{ border: "1px solid black" }} id="6" onClick={handleClick}>
        6
      </div>
      <div style={{ border: "1px solid black" }} id="7" onClick={handleClick}>
        7
      </div>
      <div style={{ border: "1px solid black" }} id="8" onClick={handleClick}>
        8
      </div>
      <div style={{ border: "1px solid black" }} id="9" onClick={handleClick}>
        9
      </div>
      <div
        style={{ border: "1px solid black" }}
        id="backspace"
        onClick={handleClick}
      >
        backspace
      </div>
      <div
        style={{ border: "1px solid black" }}
        id="close"
        onClick={handleClick}
      >
        닫기
      </div>
      <div
        style={{ border: "1px solid black" }}
        id="clear"
        onClick={handleClick}
      >
        전체삭제
      </div>
    </div>
  );
};
