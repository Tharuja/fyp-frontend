import React from "react";

const FaceDetectionTable = ({ data }) => {
  return (
    <table className="table align-items-center table-dark">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Person ID</th>
          <th scope="col">Type</th>
          <th scope="col">CCTV</th>
          <th scope="col">Date</th>
          <th scope="col">Time</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => {
          return (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{item.person_id}</td>
              <td>{item.type}</td>
              <td>
                {item.cctv.map((c) => (
                  <p>{c}</p>
                ))}
              </td>
              <td>
                {item.date.map((d) => (
                  <p>{d}</p>
                ))}
              </td>
              <td>
                {item.time.map((t) => (
                  <p>{t}</p>
                ))}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default FaceDetectionTable;
