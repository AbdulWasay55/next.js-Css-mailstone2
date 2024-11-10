import React from 'react';
import { FaInstagram, FaLinkedin, FaFacebook, FaGithub } from 'react-icons/fa';
import styles from './Footer.module.css'; // Import your CSS module

const Footer = () => {
  return (
    <div>
      <div className={styles.footerContainer} id="project">
        <div className={styles.iconContainer}>
          <a
            href="https://www.instagram.com/abdul_wasay54"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.iconLink} ${styles.iconInstagram}`}
          >
            <FaInstagram size={50} />
          </a>
          <a
            href="https://www.linkedin.com/in/abdul-wasay-a022422ba"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.iconLink} ${styles.iconLinkedin}`}
          >
            <FaLinkedin size={50} />
          </a>
          <a
            href="https://web.facebook.com/wasay.rafay.71"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.iconLink} ${styles.iconFacebook}`}
          >
            <FaFacebook size={50} />
          </a>
          <a
            href="https://github.com/AbdulWasay55"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.iconLink} ${styles.iconGithub}`}
          >
            <FaGithub size={50} />
          </a>
        </div>
        <p className={styles.copyright}>
          &copy; 2024 Abdul Wasay. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
