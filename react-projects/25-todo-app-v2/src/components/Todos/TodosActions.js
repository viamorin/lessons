import Button from '../UI/Button';
import style from './TodosActions.module.css'
import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';
function TodosActions({ resetTodos, deleteCompletedTodos, completedTodosExist }) {
  return (
    <div className={style.todosActionsContainer}>
      <Button title="Reset Todos" onClick={resetTodos}>
        <RiRefreshLine />
      </Button>
      <Button title="Clear Completed Todos" onClick={deleteCompletedTodos} disabled={!completedTodosExist}>
        <RiDeleteBin2Line />
      </Button>
    </div>
  );
}
export default TodosActions;
