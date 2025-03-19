import { Link } from 'react-router-dom';
import styles from './Menu.module.css';

const Menu = () => {
  return (
    <nav className={styles.header__menu}>
      <Link to=".">Калькулятор</Link>
      <Link to=".">О нас</Link>
      <Link to=".">Гарантии</Link>
      <Link to=".">Отзывы</Link>
    </nav>
  );
};

export default Menu;
