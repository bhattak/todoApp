import React, { useState } from "react";
import DisplayTodo from "./DisplayTodo";

function AddTodo() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([
    { id: 1, todo: "Get Up" },
    { id: 2, todo: "Have some Coffee" },
    { id: 3, todo: "Code" },
  ]);
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
  
/*
  const delItem = (id) => {
    //console.log(id);
    setTodos(
      todos.filter((k) => {
        return k.id !== id;
      })
      
    );

  };
  */
  const moveToBottom=(id)=>{
    //console.log("ID  :",idd);
           setTodos(
                todos.forEach((element,i)=>{
                console.log("Inside funtion !!!!")
                if(element.id == id)
                   todos.push(todos[i])
                   todos.splice(i,1);
                }
            )   
           ) 
  }

  let data = Array.from(todos);
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
      {
                data.map((td)=>(
                    <h2 >
                        {td.id} {td.todo}
                        {/* <button onClick={()=>delItem(td.id)}>Delete</button> */}
                        <button onClick={()=>moveToBottom(td.id)}>Move to bottom</button>
                    </h2>
                ))
            }
    </div>
  );
}

export default AddTodo;
