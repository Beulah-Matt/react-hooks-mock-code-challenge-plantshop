import React, {useState, useEffect} from "react";

function Search({plants, setPlants}) {

 const [search, setSearch]= useState('')

  useEffect(()=>{
    if (search==='')return;
    setPlants(()=>
    plants.filter((plant)=>plant.name.toLowerCase().match(search.toLowerCase())))
  },[search])

  const handleSearch = (e) => {
    //e.preventDefault()
    setSearch(e.target.value)
    if (!e.target.value.length>0){
      setPlants(plants)
    }

  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        value={search}
        placeholder="Type a name to search..."
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
