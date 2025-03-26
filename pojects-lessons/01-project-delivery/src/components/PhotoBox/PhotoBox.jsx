import styles from './PhotoBox.module.css';
import logo from './photo.png';

const PhotoBox = () => {
  return (
    <div className={styles.firstModule}>
      <div className={styles.word}>
        <h1 className={styles.textMain}>
          Без проблемная доставка купленных вещей из США, Европы и Азии в Россию
        </h1>
        <p className={styles.text}>
          Сэкономьте на покупках и наслаждайтесь мировыми брендами — наш сервис
          позволяет вам легко и удобно заказывать товары со всего мира и
          получать их в России
        </p>
      </div>
      <div className={styles.photoModule}>
        <img className={styles.photoModule__img} src={logo} alt="photo" />
      </div>
    </div>
  );
};

export default PhotoBox;
