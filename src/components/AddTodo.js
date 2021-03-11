import React, { useEffect, useState } from "react";
import DisplayTodo from "./DisplayTodo";
import "../styles/addTodo.css";

function AddTodo() {
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");
  const [todos, setTodos] = useState([]);
  const [newTodos, setNewTodos] = useState([]);
  const [check, setCheck] = useState(false);

  useEffect(() => {
    getToLocalStorage();
  }, []);

  useEffect(() => {
    saveToLocalStorage();
  }, [todos]);

  useEffect(() => {
    if (!search) {
      setCheck(false);
    }
  }, [search]);

  const AddTodo = (event) => {
    event.preventDefault();
    if (text) {
      let obj = {
        id: Math.floor(Math.random() * (100 - 1)) + 1,
        todo: text,
      };
      setTodos([obj, ...todos]);
    }
    setText("");
  };

  const saveToLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const getToLocalStorage = () => {
    let todoLocal = JSON.parse(localStorage.getItem("todos"));
    todoLocal && setTodos(todoLocal);
  };

  const moveToBottom = (id) => {
    todos.forEach((element, i) => {
      if (element.id == id) {
        const item = todos[i];
        todos.splice(i, 1);
        setTodos([...todos, item]);
      }
    });
  };

  const handleKeyPress = (event) => {
    if (event.code === "Enter") searchHash(event.target.value);
  };

  const searchHash = (searchItem) => {
    if (searchItem) {
      const newData = todos.filter((td) =>
        td.todo.toLowerCase().includes(searchItem.toLowerCase())
      );
      setNewTodos(newData);
    }
    setCheck(true);
  };

  const clearTodos = (e) => {
    localStorage.clear();
    setTodos([]);
  };

  return (
    <div>
      <div className="addtodo">
        <form onSubmit={AddTodo} className="form">
          <input
            className="form_input"
            type="text"
            placeholder="add your todos here ...."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit" variant="outlined" className="form_button">
            Add
          </button>
        </form>
        <div className="search_input">
          <input
            type="text"
            className="search"
            placeholder="search todos"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button
            className="form_button"
            onClick={() => searchHash(search)}
            disabled={!search}
          >
            Search
          </button>
        </div>
        <button className="clear_button" onClick={(e) => clearTodos(e)}>
          Clear
        </button>
      </div>

      <DisplayTodo
        todos={todos}
        newTodos={newTodos}
        check={check}
        moveToBottom={moveToBottom}
      />
    </div>
  );
}

export default AddTodo;
