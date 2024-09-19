import { useState } from "react";

export function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("");

  //each submit
  function handleSubmit(e) {
    e.preventDefault(); //prevents auto reload of page
    if (newItem === "") return; //if we did not type into d input and we submit d function will not run. notin happens to d page
    onSubmit(newItem); //wen we submit, d input value we submitted will become newItem..basically we are chanin d title of te todos array bcos title: newItem
    setNewItem(""); //clears d submitted value from d input field.
  }
  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}
