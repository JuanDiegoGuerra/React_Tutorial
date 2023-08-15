import PropTypes from 'prop-types';
import TodoItem from './TodoItem.jsx';

const TodosList = ({ todosProps, setTodos, delTodo, setUpdate }) => {
  return (
    <ul>
      {todosProps.map((todo) => (
        <TodoItem 
            key={todo.id} 
            itemProp={todo} 
            setTodos={setTodos} 
            delTodo={delTodo}
            setUpdate={setUpdate}
        />
      ))}
    </ul>
  );
};

TodosList.propTypes = {
  todosProps: PropTypes.array.isRequired,
  setTodos: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};


export default TodosList;
  