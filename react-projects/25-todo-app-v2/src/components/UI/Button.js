import style from './Button.module.css';

function Button(props) {
  const { onClick, children, title, disabled = false } = props;
  return (
    <>
      <button
        {...props}
        type="submit"
        onClick={onClick}
        title={title}
        disabled={disabled}
        className={style.button}
      >
        {children}
      </button>
    </>
  );
}

export default Button;
