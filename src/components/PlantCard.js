import React, { useState } from "react";

function PlantCard({plant}) {

  // state depending on whether is clicked is true or false

  const [isClicked, setIsClicked]= useState(true)

  const handleClick = () =>{
    setIsClicked(!isClicked)
  }
  return (
    <li className="card">
      <img src={plant.image} alt={"plant name"} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {isClicked ? (
        <button className="primary" onClick={handleClick}>In Stock</button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
