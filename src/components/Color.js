import React, { useEffect, useState } from "react";

function componentToHex(c) {
  let hex = c.toString(16);
  return hex.length === 1 ? `0${hex}` : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

const Color = ({ rgb, weight, index }) => {
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    let timeOut = setTimeout(() => {
      setAlert(false);
    }, 1000);

    return () => clearTimeout(timeOut);
  }, [alert]);

  const hexValue = rgbToHex(...rgb);

  return (
    <div
      className={`color ${index > 9 ? "color-light" : null}`}
      style={{ backgroundColor: hexValue }}
      onClick={() => {
        navigator.clipboard.writeText(hexValue);
        setAlert(true);
      }}
    >
      <p className="percentage">{weight}%</p>
      <div className="alert-container">
        <p className="value">{hexValue}</p>
        {alert && <p className="alert">Copied</p>}
      </div>
    </div>
  );
};

export default Color;
