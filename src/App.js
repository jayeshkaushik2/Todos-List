import './App.css';
import Header from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer";
import { Todos } from "./MyComponents/Todos";
import { Addtodos } from "./MyComponents/Addtodos";
import { About } from "./MyComponents/About";
import React, { useState, useEffect } from 'react';
import  {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addtodo = (title, des) => {
    let sno;
    if (todos.length === 0) {
      sno = 1;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const mytodo = {
      sno: sno,
      title: title,
      des: des
    }
    setTodos([...todos, mytodo]);
  }
  

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])


  return (
    <>
    <Router>
      <Header title="Todos List" searchBar={false} />

      <Switch>
          <Route exact path="/" render={()=>{
            return (
              <>
              <Addtodos addtodo={addtodo} />
              <Todos todos={todos} onDelete={onDelete} />
              </>
            )
          }}>
          </Route>

          <Route exact path="/about">
            <About />
          </Route>
      </Switch>

      <Footer />
    </Router>
    </>
  );
}

export default App;
