import React from 'react';
import styles from './Actions.module.css';
import { FiUserPlus, FiSearch, FiSend } from "react-icons/fi";

const Actions: React.FC = () => {
  const actionsList = [
    "Create a Profile, Set up your profile to showcase your skills and experience.",
    "Search for Jobs, Use advanced search filters to find the perfect job.",
    "Apply and Get Hired, Submit your application and get hired by top employers."
  ];

  const iconsList = [
    <FiUserPlus />,
    <FiSearch />,
    <FiSend />
  ];

  return (
    <div className={styles.actionsContainer}>
      <div className={styles.actions}>
        <div className={styles.labelWrapper}>
          <label className={styles.actionsLabel}>How Reach me Works</label>
          <p className={styles.actionsSubtitle}>
            Discover how our platform connects you with top employers and helps you land your dream job effortlessly.
          </p>
        </div>
        {actionsList.map((action, index) => (
          <div className={styles.actionCard} key={index}>
            <div className={styles.iconWrapper}>
              <div className={styles.actionIcon}>{iconsList[index]}</div>
            </div>
            <div className={styles.textWrapper}>
              <label className={styles.actionLabel}>{action.split(', ')[0]}</label>
              <p className={styles.actionSubtitle}>{action.split(', ')[1]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Actions;
