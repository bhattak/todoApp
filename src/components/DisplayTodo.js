import React from "react";

function DisplayTodo({ todos, delItem }) {
  const deleteItem = (id) => {
    delItem(id);
  };
  let data = Array.from(todos);
  return (
    <div>
      {data.map((td) => (
        <li>
          {td.id} {td.todo}
          <button onClick={() => deleteItem(td.id)}>Delete</button>
        </li>
      ))}
    </div>
  );
}

export default DisplayTodo;
