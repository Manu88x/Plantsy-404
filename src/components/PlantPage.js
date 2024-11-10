import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    // Fetch plants data from backend
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((data) => setPlants(data))
      .catch((error) => console.error("Error fetching plants:", error));
  }, []);

  return (
    <main>
      <NewPlantForm setPlants={setPlants} />
      <Search setPlants={setPlants} plants={plants} />
      <PlantList plants={plants} setPlants={setPlants} />
    </main>
  );
}

export default PlantPage;