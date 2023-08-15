import PropTypes from 'prop-types';

const TodoItem = ({ itemProp, handleChange, delTodo }) => (
  <li>
    <input
      type="checkbox"
      checked={itemProp.completed}
      onChange={() => handleChange(itemProp.id)}
    />
    <button type="button" onClick={() => delTodo(itemProp.id)}>Delete</button>
    {itemProp.title}
  </li>
);
export default TodoItem;

TodoItem.propTypes = {
  itemProp: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};
