import { useState } from "react"; //to implement js or make our jsx code imperatively responsive
import "./styles.css";

export default function App() {
  const [newItem, setNewItem] = useState("");

  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    setTodos([
      ...todos,
      { id: crypto.randomUUID(), title: newItem, completed: false },
    ]);
    setTodos([
      ...todos,
      { id: crypto.randomUUID(), title: newItem, completed: false },
    ]);
  }
  console.log(todos);

  return (
    <>
      <form className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            id="item"
          ></input>
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">ToDo List</h1>
      <ul className="list">
        <li>
          <label>
            <input type="checkbox" />
            Item 1
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            Item 2
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
      </ul>
    </>
  );
}
