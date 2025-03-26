import styles from './Certificate.module.css';

const Certificate = ({ img, text }) => {
  return (
    <div>
      <img src={img} alt="document" className={styles.img} />
      <h3>{`Свидетельство о регистрации в ${text}`}</h3>
    </div>
  );
};

export default Certificate;
