import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, todoDoneToggle } from './reducers/todos-reducer';
const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const [todo, setTodo] = useState({ do: '' });
  const todoChangeHandler = (event) => {
    const doValue = event.target.value;
    const newTodo = {
      do: doValue,
    };
    setTodo(newTodo);
  };
  const dispatch = useDispatch();
  const toggleTodoDone = (todo) => {
    dispatch(todoDoneToggle(todo));
  };

  const deleteTodoClickHandler = (index) => {
    dispatch(deleteTodo(index));
  };

  const createTodoClickHandler = () => {
    dispatch(addTodo(todo));
  };

  return (
    <>
      <h3>Todos</h3>
      <ul className="list-group">
        <li className="list-group-item">
          <button
            onClick={createTodoClickHandler}
            className="btn btn-primary w-25 
                          float-end"
          >
            Create
          </button>

          <input
            onChange={todoChangeHandler}
            value={todo.do}
            className="form-control w-75"
          />
        </li>
        {todos.map((todo, ndx) => (
          <li key={todo._id} className="list-group-item pt-3 pb-3">
            <button
              onClick={() => deleteTodoClickHandler(ndx)}
              className="btn btn-danger 
                        float-end ms-2 position-relative top-50"
            >
              Delete
            </button>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => toggleTodoDone(todo)}
              className="me-2"
            />
            {todo.do}
          </li>
        ))}
      </ul>
    </>
  );
};
export default Todos;
