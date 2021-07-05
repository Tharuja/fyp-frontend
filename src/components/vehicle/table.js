import React from "react";

const VehicleTable = ({ data }) => {
  return (
    <table className="table align-items-center table-dark">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Number Plate</th>
          <th scope="col">Arrival Time</th>
          <th scope="col">Departure Time</th>
          <th scope="col">Duration (mins)</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => {
          return (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{item.plate}</td>
              <td>{item.arrivalTime.toString()}</td>
              <td>{item.departureTime.toString()}</td>
              <td>{(item.duration / 60000).toFixed(2)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default VehicleTable;
