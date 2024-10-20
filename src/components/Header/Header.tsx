import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../Button/Button';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const navList = ["Home", "Find Jobs", "Blog", "Contact Us", "About Us"]
  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <Image src="logo.svg" alt="empty-image.jpg" width={110} height={20}></Image>
          <div className={styles.navList}>
            {navList.map( (item) => {
              return (
                <Link className={styles.navLink} href={item.toLowerCase().replace(/\s/g,'-')}>
                  <Button variant="regular">{item}</Button>
                </Link>
              )
            } )}
          </div>
        </div>
        <div className={styles.headerAuth}>
          <Button variant="regular">Log In</Button>
          <Button variant="secondary">Sign Up</Button>
          <Button variant="primary">For Employers</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
