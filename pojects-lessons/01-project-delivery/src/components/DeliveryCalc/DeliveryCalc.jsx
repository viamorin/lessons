import PhotoBox from '../PhotoBox/PhotoBox';
import Calculator from '../Calculator/Calculator';
import styles from './DeliveryCalc.module.css';

const DeliveryCalc = () => {
  return (
    <div className={`${styles.wrapper} container`}>
      <PhotoBox />
      <Calculator />
    </div>
  );
};

export default DeliveryCalc;
