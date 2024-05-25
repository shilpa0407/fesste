import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Form() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [restaurant, setRestaurant] = useState(state?.item.Resturant || "");
  const [name, setName] = useState(state?.item.name || "");
  const [price, setPrice] = useState(state?.item.price || "");

  const handleChange = (setter) => (e) => setter(e.target.value);

  const submitClick = () => {
    navigate("/Tile", {
      state: { updatedItem: { ...state.item, Resturant: restaurant, name, price } }
    });
  };

  

  return (
    <div>
      <h2>Form</h2>
      <br></br>
      <form>
        <label>
          Restaurant:
          <input type="text" value={restaurant} onChange={handleChange(setRestaurant)} />
        </label>
        <br></br>
        <br></br>
        <label>
          Name:
          <input type="text" value={name} onChange={handleChange(setName)} />
        </label>   
         <br></br>
         <br></br>
        <label>
          Price:
          <input type="text" value={price} onChange={handleChange(setPrice)} />
        </label>
        <br />
        <br></br>
        <button className="btn btn-primary" type="button" onClick={submitClick}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
