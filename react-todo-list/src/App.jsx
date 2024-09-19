import { useEffect, useState } from "react"; //to implement js or make our jsx code imperatively responsive
import { NewTodoForm } from "./NewTodoForm";
import "./styles.css";

import { TodoList } from "./TodoList";

export default function App() {
  //using local storage
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  console.log(todos);

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  /*
  //wen any of d box is clicked take in its id and d completed properties...
    function toggleTodo(id, completed) {
        //call d set todos function whic returns d lastest d lastest updated todo array of object.
        setTodos((currentTodos) => {
            //we mapped over all d array of objects, for each array of object returned, we check if its id property value is d id value associated wit d object whose input box was clicked, if d object does not have same id(no b dis object we click him checkbox), return d exact object but if the object has d same id property value  i.e it was dis object dat we clicked its check box, destrucutre d object, change its completed property value to true then make d destructured elements an object again...we destructured so we can alter d property value.
            return currentTodos.map((todo) => {
                //we said dat if d new array object as an id property wit a value dat is equal to d id parameter,
                if (todo.id === id) {
                    //d copy todo array is destructed and its completed variable sould bcom completed or true.i.e completed: true a.k.a completed equals completed...afterwards we put d new variable into d object back.
                    return { ...todo, completed };
                    //todo.completed=completed...wrong u mutated the state here
                }
                return todo;
            });
        });
    }
    */

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }
  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="hcccceader">ToDo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}
