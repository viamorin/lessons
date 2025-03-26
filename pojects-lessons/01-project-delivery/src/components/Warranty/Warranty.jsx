import Certificate from '../Certificate/Certificate';
import RU from '../../data/certificate/CertificateRus.svg';
import US from '../../data/certificate/CertificateUSA.svg';
import CH from '../../data/certificate/CertificateCHINA.svg';
import GB from '../../data/certificate/CertificateGB.svg';
import styles from './Warranty.module.css';
import Button from '../UI/Button/Button';

const Warranty = () => {
  return (
    <div className="container">
      <div className={styles.text}>
        <h1>Гарантии качества</h1>
        <p>
          Наши гарантии качества включают в себя полный спектр документов,
          необходимых для ввоза и вывоза товаров, а также для успешного бизнеса
          на мировом рынке.Мы предоставляем вам надёжность и уверенность
        </p>
      </div>

      <div className={styles.gridContainer}>
        <Certificate img={RU} text="РФ" />
        <Certificate img={US} text="CША" />
        <Certificate img={CH} text="Китае" />
        <Certificate img={GB} text="Великобритании" />
      </div>
      <div className={styles.button}>
        <Button  name="Показать больше документов" />
      </div>
    </div>
  );
};

export default Warranty;
