import React, { useEffect, useState } from "react";

function AddTodo() {
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");
  const [todos, setTodos] = useState([]);
  const [newTodos, setNewTodos] = useState([]);

  useEffect(() => {
    getToLocalStorage();
  }, []);

  useEffect(() => {
    saveToLocalStorage();
  }, [todos]);

  const AddTodo = (event) => {
    event.preventDefault();
    if (text.length != "") {
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

  const searchHash = (searchItem) => {
    if (searchItem != "") {
      const newData = todos.filter((td) => td.todo.toLowerCase().includes(searchItem.toLowerCase()));
      setNewTodos(newData);
      console.log(newData);
    }
    console.log(newTodos);
  };

  const clearTodos = (e) => {
    e.preventDefault();
    //localStorage.clear();
    setTodos([]) ;
  };

  return (
    <div>
      <form onSubmit={AddTodo}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Add</button>
        {/* <DisplayTodo todos={todos} delItem={delItem} /> */}
      </form>
      <button onClick={clearTodos}>Clear All</button>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={() => searchHash(search)}>Search</button>
      {todos &&
        todos.map((td) => (
          <h2 key={td.id}>
            {td.todo}
            {/* <button onClick={()=>delItem(td.id)}>Delete</button> */}
            <button onClick={() => moveToBottom(td.id)}>Move to bottom</button>
          </h2>
        ))}
    </div>
  );
}

export default AddTodo;
