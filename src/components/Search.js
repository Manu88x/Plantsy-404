import React, { useState } from "react";

function Search({ plants, setPlants }) {
  const [query, setQuery] = useState("");

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
    // Filter the plants based on the search query
    const filteredPlants = plants.filter((plant) =>
      plant.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setPlants(filteredPlants);
  };

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={query}
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default Search;
