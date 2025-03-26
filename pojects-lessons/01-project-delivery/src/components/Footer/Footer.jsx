import styles from './Footer.module.css';
import Menu from '../Menu/Menu';
import Button from '../UI/Button/Button';
import logo from './logo.svg';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footer__wrapper} container`}>
        <div className={styles.footer__top}>
          <div className={styles.footer__topLogo}>
            <img src={logo} alt="Logo" className={styles.imageLogo} />
            <h2 className={styles.nameCompany}>FromBoard Delivery</h2>
          </div>
          <div className={styles.menu}>
            <Menu />
          </div>
          <div className={styles.footer__contact}>
            <p className={styles.footer__contactNumber}>+7 (800) 123 45-67</p>
            <p className={styles.footer__contactFree}>
              Звонки по России бесплатны
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
