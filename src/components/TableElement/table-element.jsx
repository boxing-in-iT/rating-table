import React, { useState } from "react";
import ava from "../../assets/img/helmet.svg";

const TableElement = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const { userName, speed, time, index } = props;

  return (
    <div className="table-row" onClick={() => setIsClicked(!isClicked)}>
      <div>{index}</div>
      <div className={isClicked ? "border-ava" : ""}>
        <img src={ava} />
      </div>
      <div className="user-info">
        <h3>{userName}</h3>
        <p style={{ color: "purple" }}>
          {time} <span style={{ color: "#3f99e9" }}>| {speed} км/ч</span>
        </p>
      </div>
    </div>
  );
};

export default TableElement;
