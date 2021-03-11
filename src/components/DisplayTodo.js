import React from "react";
import "../styles/displayTodo.css";
import Empty from "./Empty";
import EmptySearch from "./EmptySearch";

function DisplayTodo({ todos, newTodos, check, moveToBottom, completedTodos }) {
  return (
    <div className="display_todos">
      {check == true ? (
        !newTodos.length ? (
          <EmptySearch info={"No matching todos ..."} />
        ) : (
          newTodos.map((td) => (
            <h2 className="todo" key={td.id}>
              {td.todo}
            </h2>
          ))
        )
      ) : !todos.length ? (
        <Empty info={"Todo list is EMPTY !!!"} />
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
