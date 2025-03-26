import DeliveryCalc from '../DeliveryCalc/DeliveryCalc';
import Reviews from '../Reviews/Reviews';
import Warranty from '../Warranty/Warranty';
import Advantages from '../Аdvantages/Advantages';
import Questions from '../Questions/Questions';
import styles from './Main.module.css';

const Main = () => {
  return (
    <div className={styles.main}>
      <DeliveryCalc />
      <Advantages />
      <Warranty />
      <Reviews />
      <Questions />
    </div>
  );
};

export default Main;
