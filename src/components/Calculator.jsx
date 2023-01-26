import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [value, setValue] = useState("");
  const handleClick = (e) => {
    setValue(value.concat(e.target.value));
  };
  const handleClear = () => {
    setValue("");
  };
  const handleResult = () => {
    setValue(eval(value).toString());
  };
  return (
    <>
      <div className="calculator">
        <input type="text" placeholder="0" id="ans" value={value} />
        <input
          type="button"
          value="9"
          className="button"
          onClick={handleClick}
        />
        <input
          type="button"
          value="8"
          className="button"
          onClick={handleClick}
        />
        <input
          type="button"
          value="7"
          className="button"
          onClick={handleClick}
        />
        <input
          type="button"
          value="6"
          className="button"
          onClick={handleClick}
        />
        <input
          type="button"
          value="5"
          className="button"
          onClick={handleClick}
        />
        <input
          type="button"
          value="4"
          className="button"
          onClick={handleClick}
        />
        <input
          type="button"
          value="3"
          className="button"
          onClick={handleClick}
        />
        <input
          type="button"
          value="2"
          className="button"
          onClick={handleClick}
        />
        <input
          type="button"
          value="1"
          className="button"
          onClick={handleClick}
        />
        <input
          type="button"
          value="0"
          className="button"
          onClick={handleClick}
        />
        <input
          type="button"
          value="."
          className="button"
          onClick={handleClick}
        />
        <input
          type="button"
          value="+"
          className="button"
          onClick={handleClick}
        />
        <input
          type="button"
          value="-"
          className="button"
          onClick={handleClick}
        />
        <input
          type="button"
          value="*"
          className="button"
          onClick={handleClick}
        />
        <input
          type="button"
          value="/"
          className="button"
          onClick={handleClick}
        />
        <input
          type="button"
          value="%"
          className="button"
          onClick={handleClick}
        />
        <input
          type="button"
          value="Clear"
          className="button lastBtn"
          onClick={handleClear}
        />
        <input
          type="button"
          value="="
          className="button lastBtn"
          onClick={handleResult}
        />
      </div>
    </>
  );
};

export default Calculator;
