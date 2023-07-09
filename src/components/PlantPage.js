import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({displayPlants, addPlant, searchPlants}) {
  return (
    <main>
      <NewPlantForm addPlant={addPlant}/>
      <Search searchPlants= {searchPlants}/>
      <PlantList displayPlants={displayPlants}/>
    </main>
  );
}

export default PlantPage;
