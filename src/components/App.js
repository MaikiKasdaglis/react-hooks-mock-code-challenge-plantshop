import React, {useState, useEffect} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
const [displayPlants, setDisplayPlants] = useState([])
const [searchState, setSearchState] = useState('')
  useEffect(()=>{
    fetch(` http://localhost:6001/plants`)
    .then(r => r.json())
    .then(d => setDisplayPlants(d))
  },[])


  function addPlant(plantObj) {
    setDisplayPlants([...displayPlants, plantObj])

    fetch(` http://localhost:6001/plants`, {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
      },
      body: JSON.stringify(plantObj)
      })


  }

  function searchPlants(search){
    setSearchState(search)
    let filterArray = displayPlants.filter((plant) => plant.name.toLowerCase().includes(searchState.toLowerCase()))
    setDisplayPlants(filterArray)
  }
  return (
    <div className="app">
      <Header />
      <PlantPage displayPlants={displayPlants} addPlant={addPlant} searchPlants={searchPlants}/>
    </div>
  );
}

export default App;
