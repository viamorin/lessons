import commas from '../../data/Reviews/commas.svg';
import styles from './Review.module.css';

const Review = ({text, name}) => {
  return (
    <div className={styles.wrapper}>
      <h4 className="">{text}</h4>
      <div className={styles.author}>
        <p>{name}</p>
        <img src={commas} alt="commas" />
      </div>
    </div>
  );
};

export default Review;
