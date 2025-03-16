import { RiTodoFill } from 'react-icons/ri';
import style from './Todo.module.css';

function Todo({ todo, index, deleteTodo }) {
  return (
    <div className={style.todo} onDoubleClick={() => deleteTodo(index)}>
      <RiTodoFill className={style.todoIcons}/>
      <div className={style.todoText}>{todo}</div>
    </div>
  );
}

export default Todo;
