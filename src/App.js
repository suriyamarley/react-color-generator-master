import React, { useState } from "react";
import "./styles/App.css";
import "./styles/normalize.css";
import Color from "./components/Color";
import Values from "values.js";

import { BsCircleHalf } from "react-icons/bs";

const App = () => {
  const [color, setColor] = useState("");
  const [list, setList] = useState([]);
  const [error, setError] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    // try & catch
    try {
      let colors = new Values(color).all(10);
      setList(colors);
      setError(false);
      setColor("");
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="main">
      <h2>
        Color Generator
        <span className="icon">
        </span>
      </h2>
      <form onSubmit={submitHandler}>
        <div className="form-control">
          <input
            type="text"
            name="color"
            placeholder="#2b3945"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className={`${error ? "error" : null} `}
          />{" "}
          <br />
          {error && <small>Please enter a valid color code</small>}
          <br />
        </div>
        <div className="btn-container">
          <button className="btn">Search</button>
        </div>
      </form>

      <div className="color-section">
        {list.map((color, index) => {
          return <Color key={index} {...color} index={index} />;
        })}
      </div>
    </div>
  );
};

export default App;
