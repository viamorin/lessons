import styles from './Calculator.module.css';
import Form from '../Form/Form';
const Calculator = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>
        <h1 className={styles.title}>Калькулятор доставки</h1>
        <p className={styles.subtitle}>
          Посчитайте, сколько будет стоить перевозка покупки из за рубежа
        </p>
      </div>
      <Form></Form>
    </div>
  );
};

export default Calculator;
