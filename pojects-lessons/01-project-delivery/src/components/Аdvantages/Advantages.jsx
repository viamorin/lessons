import Card from '../Card/Card';
import notepad from '../../data/img/notepad.svg';
import bestSupport from '../../data/img/bestSupport.svg';
import box from '../../data/img/box.svg';
import car from '../../data/img/car.svg';
import garantee from '../../data/img/garantee.svg';
import pc from '../../data/img/pc.svg';
import styles from './Advantages.module.css';

const Advantages = () => {
  return (
    <div className="container">
      <h1 className={styles.title}>Наши преимущества</h1>
      <div className={styles.gridContainer}>
        <Card
          img={notepad}
          title="Растоможка груза"
          text="Мы берём на себя все формальности и бумажную волокиту, связанную с растаможкой груза"
        />
        <Card
          img={box}
          title="Надёжная упаковка"
          text="Все товары упаковываются нашими специалистами с особым вниманием к деталям, гарантируя, что они дойдут в безопасности и mв отличном состоянии"
        />
        <Card
          img={car}
          title="Быстро и выгодно"
          text="Мы предлагаем быструю и выгодную доставку, чтобы вы могли насладиться покупками как можно скорее."
        />
        <Card
          img={bestSupport}
          title="Удобный сервис"
          text="Стремимся сделать процесс доставки максимально удобным для вас, чтобы опыт остался приятным и беззаботным"
        />
        <Card
          img={pc}
          title="Прозрачность работы"
          text="Мы предоставляем полный контроль над каждым этапом доставки, от момента заказа до момента прибытия заказа"
        />
        <Card
          img={garantee}
          title="Страхование груза"
          text="Наше страхование обеспечивает полную защиту и покрытие почти все неприятные и неожиданные ситуации"
        />
      </div>
    </div>
  );
};

export default Advantages;
