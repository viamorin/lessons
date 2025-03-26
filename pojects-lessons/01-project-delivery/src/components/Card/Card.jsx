import styles from './Card.module.css';

const Card = ({ title, text, img }) => {
  return (
    <div className={styles.gridContainer}>
      <img src={img} alt="."></img>
      <div className={styles.text}>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Card;
