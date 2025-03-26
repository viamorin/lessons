import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import reviews from '../../data/Reviews/reviews';
import Review from '../Review/Review';
import styles from './Reviews.module.css';

const Reviews = () => {
  return (
    <div className={styles.reviewsContainer}>
      <h1 className={styles.title}>Отзывы</h1>
      <div className={styles.swiperWrapper}>
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          spaceBetween={24}
          slidesPerView={2}
          loop
          className={styles.swiper}
          allowTouchMove={false}
          noSwiping={true}
          watchSlidesProgress={true}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index} className={styles.slide}>
              <Review text={review.text} name={review.name} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    </div>
  );
};

export default Reviews;
