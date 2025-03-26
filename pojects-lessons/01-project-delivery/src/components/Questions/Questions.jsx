import FormQuestions from '../FormQuestions/FormQuestions';
import styles from './Questions.module.css';

const Questions = () => {
  return (
    <div className="container">
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Остались вопросы?</h1>
        <FormQuestions />
      </div>
    </div>
  );
};

export default Questions;
