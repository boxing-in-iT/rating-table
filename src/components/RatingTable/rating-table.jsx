import React from "react";
import TableElement from "../TableElement/table-element";

const RatingTable = (props) => {
  const { users, containerRef } = props;

  return (
    <div className="table" ref={containerRef}>
      {users?.map((data, index) => (
        <TableElement
          key={index}
          index={index + 1}
          userName={
            data.name.length > 10 ? data.name.slice(0, 10) + "..." : data.name
          } // Обрезаем имя, если не помещается
          speed={data.speed}
          time={data.time}
        />
      ))}
    </div>
  );
};

export default RatingTable;
