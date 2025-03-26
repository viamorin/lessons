import { useState } from 'react';
import Button from '../UI/Button/Button';
import styles from './FormQuestions.module.css';

const FormQuestions = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    theme: '',
    messages: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь можно добавить логику обработки данных
    console.log(formData);
    alert('Расчёт заказан! Мы свяжемся с вами в ближайшее время.');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.gridcontainer}>
      <input
        className={styles.input}
        placeholder="Имя"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <input
        className={styles.input}
        placeholder="Почта"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <input
        className={styles.input}
        placeholder="Телефон"
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        pattern="\+?[0-9\s\-\(\)]+"
        required
      />

      <input
        className={styles.input}
        placeholder="Тема вопроса"
        type="text"
        name="theme"
        value={formData.theme}
        onChange={handleChange}
        required
      />

      <input
        className={styles.item}
        placeholder="Сообщение..."
        type="text"
        name="messages"
        value={formData.messages}
        onChange={handleChange}
        required
      />
      <div className={styles.items}>
        <Button type="submit" name="Оставить заявку" />
      </div>
    </form>
  );
};

export default FormQuestions;
