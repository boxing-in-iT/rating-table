import React from "react";
import ava from "../../assets/img/helmet.svg";

const TableElement = (props) => {
  const { userName, speed, time, index } = props;

  return (
    <div className="table-row">
      <div>{index}</div>
      <div>
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
