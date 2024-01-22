export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
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
