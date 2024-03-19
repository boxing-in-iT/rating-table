import React from "react";
import TableElement from "../TableElement/table-element";

const RatingTable = (props) => {
  const { users } = props;

  return (
    <div className="table">
      {users?.map((data, index) => (
        <TableElement
          index={index + 1}
          userName={data.name}
          speed={data.speed}
          time={data.time}
        />
      ))}
    </div>
  );
};

export default RatingTable;
