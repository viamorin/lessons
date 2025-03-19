import style from './Button.module.css'

const Button = ({name}) => {
  return (
    <button className={style.menuButton}>{name}</button>
  )
}

export default Button