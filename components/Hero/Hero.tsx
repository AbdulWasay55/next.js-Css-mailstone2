import React from 'react';
import Image from 'next/image';
import styles from './Hero.module.css'; // Importing CSS module

const Hero = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>AW | PORTFOLIO 2024</h1>
      <div className={styles.logoSection}>
        <Image className={styles.logo} src="/logo.png" alt="web-logo" width={40} height={20} />
        <p className={styles.name}>ABDUL WASAY</p>
      </div>
    </div>
  );
};

export default Hero;
