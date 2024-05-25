import React, { useState, useEffect } from "react";
import data from "./data"; // Adjust the path as necessary
import { useNavigate, useLocation } from "react-router-dom";

function Tile({ query }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [filteredData, setFilteredData] = useState(data);

  // Filter the data based on the query
useEffect(() => {
  if (query.trim() !== "") {
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(query.trim().toLowerCase())
    );
    setFilteredData(filtered);
  } else {
    setFilteredData(data);
  }
}, [query]);



  const handleClick = (clickedItem) => {
    navigate("/Form", { state: { item: clickedItem } });
  };

  // Update state with the updated item
  useEffect(() => {
    if (location.state && location.state.updatedItem) {
      const updatedItem = location.state.updatedItem;
      setFilteredData((prevData) =>
        prevData.map((item) =>
          item.id === updatedItem.id ? updatedItem : item
        )
      );
    }
  }, [location.state]);

  return (
    <div className="cards-container">
      {filteredData.map((item) => (
        <div key={item.id} className="card" style={{ width: '18rem' }}>
          <img src={item.image} className="card-img-top" alt={item.name} />
          <div className="card-body">
            <h5 className="card-title">{item.Resturant}</h5>
            <p className="card-text">{item.name}</p>
            <p className="card-text">$ {item.price}</p>
            <button className="btn btn-primary" onClick={() => handleClick(item)}>Add</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Tile;
