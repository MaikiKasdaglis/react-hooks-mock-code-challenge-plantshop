import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function NewPlantForm({addPlant}) {
const [plantObj, setPlantObj] = useState({
                                            id: uuid(),
                                            name: '',
                                            image: '',
                                            price: 0,
                                          })


function formSubmit(e) {
  e.preventDefault()
  addPlant(plantObj)
}

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={formSubmit}>
        <input type="text" name="name" placeholder="Plant name" onChange={e => setPlantObj({...plantObj, name: e.target.value})}/>
        <input type="text" name="image" placeholder="Image URL" onChange={e => setPlantObj({...plantObj, image: e.target.value})}/>
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={e => setPlantObj({...plantObj, price: e.target.value})}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
