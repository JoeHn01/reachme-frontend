import React from 'react';
import Button from '@/components/Button/Button';
import { CiSearch, CiMail } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import styles from './Hero.module.css';


const Hero: React.FC = () => {
  const keywordList = ["Software Engineer", "Marketing Manager", "Data Analyst", "Project Manager"];
  
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
        <div className={styles.searchContainer}>
          <div className={styles.searchFormContainer}>
            <div className={styles.searchInputs}>
              <div className={styles.inputContainer}>
                <label className={styles.inputLabel}>Job Title</label>
                <input 
                  className={styles.searchInput}
                  type="text"
                  placeholder="Enter job title"
                />
                <CiMail className={styles.mailIcon}/>
              </div>
              <div className={styles.inputContainer}>
                <label className={styles.inputLabel}>Location</label>
                <input
                  className={styles.searchInput}
                  type="text"
                  placeholder="Enter city, state, or ZIP"
                />
                <CiMail className={styles.mailIcon}/>
              </div>
              <div className={styles.dropdownContainer}>
                <label className={styles.inputLabel}>Job Type</label>
                <input 
                  className={styles.searchDropdown}
                  type="text"
                  placeholder="Full-time, Part-time, Contract..."
                />
                <IoIosArrowDown className={styles.arrowIcon} />
              </div>
              <Button variant='primary' className={styles.searchButton}>
                <CiSearch className={styles.searchIcon} />
              </Button>
            </div>
          </div>
          <div className={styles.keywordsContainer}>
            <label className={styles.keywordsLabel}>Search by Popular Keywords</label>
            <div className={styles.keywordList}>
              {keywordList.map((keyword) => {
                return (
                  <div className={styles.keywordWrapper}>
                    <CiSearch className={styles.keywordIcon} />
                    <div className={styles.keyword}>{keyword}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
