import React from "react";
import PlantCard from "./PlantCard";




function PlantList({ plants, setPlants }) {

  
  const deletePlant = (id) => {
    setPlants((prevPlants) => prevPlants.filter((plant) => plant.id !== id));
  };// filter for the delete button to actually remove the content


  return (
    <ul className="cards">
      {plants.map((plant) => (
        <PlantCard key={plant.id} plant={plant} setPlants={setPlants} deletePlant={deletePlant}/>
      ))}
    </ul>
  );
}

export default PlantList;
