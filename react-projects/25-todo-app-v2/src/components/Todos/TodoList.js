import style from './TodoList.module.css';
import Todo from './Todo';

function TodoList({ todos, deleteTodo, toggleTodo }) {
  return (
    <div className={style.todoListContainer}>
      {!todos.length && <h2>Todo list is empty</h2>}
      {todos.map((todo) => (
        <Todo
          key={todo.is}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;
