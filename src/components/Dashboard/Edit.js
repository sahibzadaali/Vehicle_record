import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Edit = ({ vehicleData, selectedVehicleData, setVehicleData, setIsEditing }) => {
  const id = selectedVehicleData.id;
  const [year,setYear]=useState(selectedVehicleData.year);
  const [make,setMake]=useState(selectedVehicleData.make);
  const [model,setModel]=useState(selectedVehicleData.model);

  const handleUpdate = e => {
    e.preventDefault();

    if (!year || !make || !model) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true
      });
    }

    const data = {
      id,
      year,
      make,
      model
    };

    for (let i = 0; i < vehicleData.length; i++) {
      if (vehicleData[i].id === id) {
        vehicleData.splice(i, 1, data);
        break;
      }
    }

    setVehicleData(vehicleData);
    setIsEditing(false);

    Swal.fire({
      icon: 'success',
      title: 'Updated!',
      text: ` Data has been updated.`,
      showConfirmButton: false,
      timer: 1500
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleUpdate}>
        <h1>Edit Vehicle Data</h1>
        <label htmlFor="year">=Year</label>
        <input
          id="year"
          type="number"
          name="year"
          value={year}
          onChange={e => setYear(e.target.value)}
        />
        <label htmlFor="make">Make</label>
        <input
          id="make"
          type="text"
          name="make"
          value={make}
          onChange={e => setMake(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          id="model"
          type="text"
          name="model"
          value={model}
          onChange={e => setModel(e.target.value)}
        />
        <div style={{ marginTop: '30px' }}>
          <input type="submit" value="Update" />
          <input
            style={{ marginLeft: '12px' }}
            type="button"
            value="Cancel"
            onClick={() => setIsEditing(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Edit;
