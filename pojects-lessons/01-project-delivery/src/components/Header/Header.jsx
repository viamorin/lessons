import React from 'react';
import Menu from '../Menu/Menu';
import styles from './Header.module.css';
import logo from './logo.svg';
import Button from '../UI/Button/Button';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.header__wrapper} `}>
        <div className={styles.header__top}>
          <div className={styles.header__topLogo}>
            <img src={logo} alt="Logo" className={styles.imageLogo} />
            <h2 className={styles.nameCompany}>FromBoard Delivery</h2>
          </div>
          <div className={styles.header__topContact}>
            <div className={styles.header__course}>
              <p>Доставляем товары из заграницы в Россию</p>
              <p>Стоимость от 550 рублей за заказ</p>
              <p>1 $ = 93₽ | 1 € = 99₽ | 1 ¥ = 13₽</p>
            </div>
            <div className={styles.header__contact}>
              <p className={styles.header__contactNumber}>+7 (800) 123 45-67</p>
              <p className={styles.header__contactFree}>
                Звонки по России бесплатны
              </p>
            </div>
          </div>
        </div>
        <div className={styles.header__bottom}>
          <Menu />
          <Button name="Оставить заявку" />
        </div>
      </div>
    </header>
  );
};

export default Header;
