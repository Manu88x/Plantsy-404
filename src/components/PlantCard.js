import React, { useState } from "react";

function PlantCard({ plant, updatePlantStatus,deletePlant }) {
  const [inStock, setInStock] = useState(true);

  const handleStockToggle = () => {
    setInStock(!inStock);

    //patch request:
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ inStock: !inStock }),
    })
      .then((response) => response.json())
      .then((data) => {
      
        updatePlantStatus(data);
      })
      .catch((error) => console.error("Error updating plant status:", error));
  };


//delete request:
  const handleDelete = () => {
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {

          deletePlant(plant.id);
        } else {
          console.log("Failed to delete the plant");
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


