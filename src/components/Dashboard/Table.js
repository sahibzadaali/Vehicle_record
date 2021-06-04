import React from 'react';

const Table = ({ vehicleData, handleEdit, handleDelete }) => {
  vehicleData.forEach((data, i) => {
    data.id = i + 1;
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Year</th>
            <th>Make</th>
            <th>Model</th>
          </tr>
        </thead>
        <tbody>
          {vehicleData.length > 0 ? (
            vehicleData.map((data, i) => (
              <tr key={data.id}>
                <td>{i + 1}</td>
                <td>{data.year}</td>
                <td>{data.make}</td>
                <td>{data.model}</td>
                <td>
                  <button
                    onClick={() => handleEdit(data.id)}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(data.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4}>No Vehicle Data</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
