import React, { ReactNode } from 'react';
import styles from './SectionTitle.module.css';

interface SectionTitleProps {
  highlight: string;
  title: string;
  children: ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ highlight, title, children }) => {
  return (
    <div className={styles.titleContainer}>
      <div className={styles.titleTop}>
        <p className={styles.highlightText}>{highlight}</p>
        <div className={styles.mainTitle}>{title}</div>
      </div>
      <p className={styles.subtitle}>{children}</p>
    </div>
  );
};

export default SectionTitle;
