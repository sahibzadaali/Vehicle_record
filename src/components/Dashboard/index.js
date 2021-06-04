import React, { useState } from 'react';
import Swal from 'sweetalert2';

import Header from './Header';
import Table from './Table';
import Add from './Add';
import Edit from './Edit';

import { vehicleRecord } from '../../data';

const Dashboard = ({ setIsAuthenticated }) => {
  const [vehicleData, setVehicleData] = useState(vehicleRecord);
  const [selectedVehicleData, setSelectedVehicleData] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = id => {
    const [data] = vehicleData.filter(data => data.id === id);
    setSelectedVehicleData(data);
    setIsEditing(true);
  };

  const handleDelete = id => {
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure?',
      text: "ohhhhh",
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No!'
    }).then(result => {
      if (result.value) {
        const [data] = vehicleData.filter(data => data.id === id);

        Swal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: `Data has been deleted.`,
          showConfirmButton: false,
          timer: 1500
        });

        setVehicleData(vehicleData.filter(data => data.id !== id));
      }
    });
  };

  return (
    <div className="container">
      {!isAdding && !isEditing && (
        <>
          <Header
            setIsAdding={setIsAdding}
            setIsAuthenticated={setIsAuthenticated}
          />
          <Table
            vehicleData={vehicleData}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </>
      )}
      {isAdding && (
        <Add
        vehicleData={vehicleData}
          setVehicleData={setVehicleData}
          setIsAdding={setIsAdding}
        />
      )}
      {isEditing && (
        <Edit
        vehicleData={vehicleData}
        selectedVehicleData={selectedVehicleData}
          setVehicleData={setVehicleData}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
};

export default Dashboard;
