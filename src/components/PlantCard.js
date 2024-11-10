import React, { useState } from "react";

function PlantCard({ plant, updatePlantStatus,deletePlant }) {
  const [inStock, setInStock] = useState(true);

  const handleStockToggle = () => {
    setInStock(!inStock);
    // Send the updated status to the backend
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ inStock: !inStock }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Update plant status in the parent component state
        updatePlantStatus(data);
      })
      .catch((error) => console.error("Error updating plant status:", error));
  };



  const handleDelete = () => {
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          // Trigger delete in the parent component (update the state)
          deletePlant(plant.id);
        } else {
          throw new Error("Failed to delete the plant");
        }
      })
      .catch((error) => console.error("Error deleting plant:", error));
  };


  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: ${plant.price}</p>
      {inStock ? (
        <button className="primary" onClick={handleStockToggle}>
          In Stock
        </button>
      ) : (
        <button onClick={handleStockToggle}>Out of Stock</button>
      )}

      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default PlantCard;


