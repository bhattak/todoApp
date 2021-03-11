import React from "react";
import "../styles/displayTodo.css";
import Empty from "./Empty";

function DisplayTodo({ todos, newTodos, check, moveToBottom, completedTodos }) {
  return (
    <div className="display_todos">
      {check == true ? (
        !newTodos.length ? (
          <Empty info={"No todos to show ..."} />
        ) : (
          newTodos.map((td) => (
            <h2 className="todo" key={td.id}>
              {td.todo}
            </h2>
          ))
        )
      ) : !todos.length ? (
        <Empty info={"No todos to show ..."} />
      ) : (
        todos.map((td) => (
          <h2 className="todo" key={td.id} onClick={() => moveToBottom(td.id)}>
            {td.todo}
          </h2>
        ))
      )}
    </div>
  );
}

export default DisplayTodo;
