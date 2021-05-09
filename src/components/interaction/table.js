import React from "react";

const InteractionTable = ({ data }) => {
  return (
    <table className="table align-items-center table-dark">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Date</th>
          <th scope="col">Time</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => {
          return (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{item.date}</td>
              <td>{item.time}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default InteractionTable;
