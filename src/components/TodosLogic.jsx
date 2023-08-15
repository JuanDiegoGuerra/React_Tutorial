import { useState, useEffect } from "react";
import InputTodo from "./InputTodo.jsx"
import TodosList from "./TodosList.jsx"
import { v4 as uuidv4 } from 'uuid';

const TodosLogic = () => {
    
    const [todos, setTodos] = useState(getInitialTodos());

    function getInitialTodos() {
      // getting stored items
      const temp = localStorage.getItem('todos');
      const savedTodos = JSON.parse(temp);
      return savedTodos || [];
    }
  
    useEffect(() => {
      // storing todos items
      const temp = JSON.stringify(todos);
      localStorage.setItem('todos', temp);
    }, [todos]);


      const delTodo = (id) => {
        setTodos([
            ...todos.filter((todo) => {
              return todo.id !== id;
            }),
          ]);
      };

      const addTodoItem = (title) => {
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false,
          };
          setTodos([...todos, newTodo]);
      };

      const setUpdate = (updatedTitle, id) => {
        setTodos(
            todos.map((todo) => {
              if (todo.id === id) {
                todo.title = updatedTitle;
              }
              return todo;
            })
          );
      };    

    return (
        <div>
            <InputTodo addTodoItem={addTodoItem} />
            <TodosList 
                todosProps={todos} 
                setTodos={setTodos}
                delTodo={delTodo} 
                setUpdate={setUpdate}
            />
        </div>
    )
  }

  export default TodosLogic;
  