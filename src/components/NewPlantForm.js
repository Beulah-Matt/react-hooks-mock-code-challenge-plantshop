import React, {useRef} from "react";


function NewPlantForm({plants, setPlants}) {
const name = useRef()
const image = useRef()
const price = useRef()

const handleSubmit = (e)=> {
  e.preventDefault();
  setPlants((prevPlants)=>[...prevPlants, {id: prevPlants.length+1, name: name.current.value, image: image.current.value, price: price.current.value}])
  // clearing the form 
  name.current.value=''
  image.current.value = ''
  price.current.value = ""

}

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form>
        <input type="text" name="name" placeholder="Plant name" ref={name}/>
        <input type="text" name="image" placeholder="Image URL" ref={image} />
        <input type="number" name="price" step="0.01" placeholder="Price" ref={price}/>
        <button type="submit" onClick={handleSubmit}>Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
