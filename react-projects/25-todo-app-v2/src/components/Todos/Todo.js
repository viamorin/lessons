import { RiTodoFill, RiDeleteBin2Line } from 'react-icons/ri';
import { FaCheck } from 'react-icons/fa';
import style from './Todo.module.css';

function Todo({ todo, deleteTodo, toggleTodo }) {
  return (
    <div
      className={`${style.todo} ${todo.isCompleted ? style.completedTodo : ''}`}
    >
      <RiTodoFill className={style.todoIcons} />
      <div className={style.todoText}>{todo.text}</div>
      <RiDeleteBin2Line
        className={style.deleteIcon}
        onClick={() => deleteTodo(todo.id)}
      />
      <FaCheck
        className={style.checkIcon}
        onClick={() => toggleTodo(todo.id)}
      />
    </div>
  );
}

export default Todo;
