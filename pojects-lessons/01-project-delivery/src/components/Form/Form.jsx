import { useState } from 'react';
import Button from '../UI/Button/Button';
import style from './Form.module.css';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    area: '',
    weight: '',
    country: '',
    city: '',
    region: '',
    deliveryCity: '',
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
    <form onSubmit={handleSubmit} className={style.calculator__container}>
      <div className={style.form__group}>
        <div className={style.form__group}>
          <input
            placeholder="Имя"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className={style.form__group}>
        <div className={style.form__group}>
          <input
            placeholder="Почта"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className={style.form__group}>
          <input
            placeholder="Телефон"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            pattern="\+?[0-9\s\-\(\)]+"
            required
          />
        </div>
      </div>

      <div className={style.form__group}>
        <div className={style.form__group}>
          <input
            placeholder="Общая площадь, м²"
            type="number"
            name="area"
            value={formData.area}
            onChange={handleChange}
            min="0.1"
            step="0.1"
            required
          />
        </div>

        <div className={style.form__group}>
          <input
            placeholder="Вес, кг"
            type="number"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            min="0.1"
            step="0.1"
            required
          />
        </div>
      </div>

      <div className={style.form__group}>
        <div className={style.form__group}>
          <input
            placeholder="Страна покупки"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          ></input>
        </div>

        <div className={style.form__group}>
          <input
            placeholder="Город покупки"
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className={style.form__group}>
        <div className={style.form__group}>
          <input
            placeholder="Область доставки"
            type="text"
            name="region"
            value={formData.region}
            onChange={handleChange}
            required
          />
        </div>

        <div className={style.form__group}>
          <input
            placeholder="Город доставки"
            type="text"
            name="deliveryCity"
            value={formData.deliveryCity}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <Button type="submit" name="Заказать расчёт" />
    </form>
  );
};

export default Form;
