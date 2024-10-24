import React from 'react';
import styles from './Skills.module.css';

const Skills: React.FC = () => {
  const skillsList = ["Python", "Java", "React", "Node.js", "SQL", "JavaScript", "C/C++", "Next.js", "MongoDB"]

  return (
    <div className={styles.skills}>
      <div className={styles.labelContainer}>
        <label className={styles.skillsLabel}>Trending Job Skills</label>
        <p className={styles.skillsSubtitle}>For those deeply committed to sustainable practices</p>
      </div>
      <div className={styles.skillsList}>
        {skillsList.map((skill, index) => {
          return (
            <div className={styles.skillWrapper} key={index}>{skill}</div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
