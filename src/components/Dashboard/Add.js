import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Add = ({ vehicleData, setVehicleData, setIsAdding }) => {
  const [year,setYear]=useState('');
  const [make,setMake]=useState('');
  const [model,setModel]=useState('');

  const handleAdd = e => {
    e.preventDefault();

    if (!year || !make || !model) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true
      });
    }

    const id = vehicleData.length + 1;
    const newVehicleData = {
      id,
     year,
     make,
     model
    };

    vehicleData.push(newVehicleData);
    setVehicleData(vehicleData);
    setIsAdding(false);

    Swal.fire({
      icon: 'success',
      title: 'Added!',
      text: `Data has been Added.`,
      showConfirmButton: false,
      timer: 1500
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleAdd}>
        <h1>Add Vehicle Data</h1>
        <label htmlFor="year">Year</label>
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
        <label htmlFor="model">Modal</label>
        <input
          id="model"
          type="text"
          name="model"
          value={model}
          onChange={e => setModel(e.target.value)}
        />
        <div style={{ marginTop: '30px' }}>
          <input type="submit" value="Add" />
          <input
            style={{ marginLeft: '12px' }}
            type="button"
            value="Cancel"
            onClick={() => setIsAdding(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Add;
