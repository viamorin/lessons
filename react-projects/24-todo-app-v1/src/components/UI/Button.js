import style from './Button.module.css';

function Button(props) {
  return (
    <>
      <button type="submit" className={style.todoButton}>
        {props.children}
      </button>
    </>
  );
}

export default Button;
