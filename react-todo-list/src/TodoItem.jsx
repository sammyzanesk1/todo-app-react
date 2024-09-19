export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed} // completes is equals true, wen checked=true d checkbox will be ticked
          onChange={(e) => toggleTodo(id, e.target.checked)} //we call d toggleTodo function wenever any of d input checkbox is clicked, we used 2 parameter aruement, d id and d clicked checked box...visit toggleTodo function to see wat takesplace...d function returns true or completed.
        />
        {title}
      </label>
      <button
        onClick={() => deleteTodo(id)} // != {deleteTodo(todo.id)...always pass in a function}
        className="btn btn-danger"
      >
        Delete
      </button>
    </li>
  );
}
