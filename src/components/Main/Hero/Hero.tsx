import React from 'react';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.topContainer}>
        <div className={styles.headlineContainer}>
          <div className={styles.headlineContent}>
            <div className={styles.headlineTop}>
              <p className={styles.discover}>Discover New Opportunities</p>
              <div className={styles.headline}>Find Your Dream Job</div>
            </div>
            <p className={styles.subtitle}>Find your perfect job effortlessly with our advanced search and comprehensive listings.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
