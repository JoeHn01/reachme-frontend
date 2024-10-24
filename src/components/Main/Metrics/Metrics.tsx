import Image from 'next/image';
import React from 'react';
import styles from './Metrics.module.css';
import SectionTitle from '@/components/SectionTitle/SectionTitle';

const Metrics: React.FC = () => {
  const metricsList = ["Active Job Listings: 10,000+", "Registered Employers: 5,000+", "Successful Hires Each Month: 1,000+", "Customer Satisfaction Rate: 95%"]
  
  return (
    <div className={styles.metricsContainer}>
      <div className={styles.metricsContent}>
        <div className={styles.topContainer}>
          {/* <div className={styles.titleContainer}>
            <div className={styles.topTitleContainer}>
              <p className={styles.topTitle}>Join a Thriving Job Market</p>
              <div className={styles.mainTitle}>Empowering Your Career</div>
            </div>
            <p className={styles.subtitle}>
              Join a thriving community of job seekers and successful hires. 
              Let us help you achieve your career goals with our high satisfaction rate.
            </p>
          </div> */}
          <SectionTitle
            highlight='Join a Thriving Job Market'
            title='Empowering Your Career'
          >
            Join a thriving community of job seekers and successful hires. 
            Let us help you achieve your career goals with our high satisfaction rate.
          </SectionTitle>
          <div className={styles.metricsList}>
            {metricsList.map((item) => {
              return (
                <div className={styles.metricsItem}>
                  <div className={styles.metricsNumber}>{item.split(': ')[1]}</div>
                  <p className={styles.metricsText}>{item.split(': ')[0]}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/metrics.png" alt="/empty-image.jpg" fill />
        </div>
      </div>
    </div>
  );
};

export default Metrics;
