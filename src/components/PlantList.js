import React from "react";
import PlantCard from "./PlantCard";




function PlantList({ plants, setPlants }) {

  
  const deletePlant = (id) => {
    // Update the state by filtering out the plant with the given id
    setPlants((prevPlants) => prevPlants.filter((plant) => plant.id !== id));
  };


  return (
    <ul className="cards">
      {plants.map((plant) => (
        <PlantCard key={plant.id} plant={plant} setPlants={setPlants} deletePlant={deletePlant}/>
      ))}
    </ul>
  );
}

export default PlantList;
