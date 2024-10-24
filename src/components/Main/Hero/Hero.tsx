import Image from 'next/image';
import React from 'react';
import { CiSearch, CiMail } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import Button from '@/components/Button/Button';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import DotMap from './DotMap/DotMap';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  const keywordList = ["Software Engineer", "Marketing Manager", "Data Analyst", "Project Manager"];
  const hiringList: [string, number][] = [["Reachme", 3], ["Tech Solutions Inc.", 3], ["Bee Solutions", 3], ["W-Tech", 1]];
  
  return (
    <div className={styles.heroContainer}>
      <div className={styles.topContainer}>
          <SectionTitle
            highlight="Discover New Opportunities"
            title="Find Your Dream Job"
          >
            Find your perfect job effortlessly with our advanced search and comprehensive listings.
          </SectionTitle>
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
      <div className={styles.bottomContainer}>
        <DotMap />
        <div className={styles.hiringContainer}>
          <div className={styles.hiring}>
            <label className={styles.hiringLabel}>Top Companies Hiring</label>
            <div className={styles.hiringList}>
                {hiringList.map((item) => {
                  return (
                    <div className={styles.hiringItem}>
                      <Image 
                        src={`/logos/${item[0].split(" ")[0].toLowerCase().replace('-', '')}.svg`}
                        alt="/empty-image.jpg"
                        width={126}
                        height={42}
                       />
                      <div className={styles.itemName}>{item[0]}</div>
                      <div className={styles.itemJobs}>
                        <GoDotFill className={styles.itemJobsDot} />
                        <div className={styles.itemJobsText}>{item[1]} new jobs</div>
                      </div>
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
