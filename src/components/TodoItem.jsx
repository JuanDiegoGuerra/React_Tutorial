import '../style/todoItem.css';
import { useState, useRef } from 'react';
import { FaTrash } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import PropTypes from 'prop-types';



const TodoItem = ({ itemProp, setTodos, delTodo, setUpdate }) => {
    const [editing, setEditing] = useState(false);
    const editInputRef = useRef(null);

    const handleEditing = () => {
        setEditing(true);
      };

    const handleChange = (id) => {
        setTodos((prevState) =>
            prevState.map((todo) => {
            if (todo.id === id) {
                return {
                ...todo,
                completed: !todo.completed,
                };
            }
            return todo;
            })
        );
      };

      let viewMode = {};
      let editMode = {};
      if (editing) {
        viewMode.display = 'none';
      } else {
        editMode.display = 'none';
      }

      const handleUpdatedDone = (event) => {
        if (event.key === 'Enter') {
          setUpdate(editInputRef.current.value, itemProp.id);
          setEditing(false);
        }
      };

    return (
        <li className='item'>
            <div className="content" style={viewMode}>
                <input type="checkbox" 
                    checked={itemProp.completed}
                    onChange={() => handleChange(itemProp.id)}
                />
                <span className={itemProp.completed ? 'itemText' : null}>
                    {itemProp.title}
                </span>
                <button onClick={handleEditing}><AiFillEdit /></button>
                <button onClick={() => delTodo(itemProp.id)}><FaTrash /></button>
            </div>
            <input
                type="text"
                ref={editInputRef}
                defaultValue={itemProp.title}
                className='textInput'
                style={editMode}
                onKeyDown={handleUpdatedDone}
            />
        </li>
    );
};

TodoItem.propTypes = {
  itemProp: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  setTodos: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};


export default TodoItem;
  
  