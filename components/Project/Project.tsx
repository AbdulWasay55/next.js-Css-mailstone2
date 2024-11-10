import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Section.module.css'; // Import your CSS module

const ProjectSection = () => {
  return (
    <div>
      <div className={styles.projectSection}>
        <h1  className={styles.heading} id='project'>Projects:</h1>
        <div className={styles.projectContainer}>
          <div  className={styles.projectCard}>
            <p className={styles.projectTitle}>Count Down Timer</p>
            <Image src="/1count.png" width={200} height={200} alt="count down timer picture" className={styles.projectImage} />
            <Link href="https://1-project-count-down-timer.vercel.app/" target="_blank">
              <p className={styles.projectLink}>Click Here to Check</p>
            </Link>
          </div>

          <div className={styles.projectCard}>
            <p className={styles.projectTitle}>Weather Widget App</p>
            <Image src="/weather1.png" width={200} height={200} alt="weather widget picture" className={styles.projectImage} />
            <a href="https://2-project-weather-widget.vercel.app/" target="_blank">
              <p className={styles.projectLink}>Click Here to Check</p>
            </a>
          </div>

          <div  className={styles.projectCard}>
            <p className={styles.projectTitle}>Dynamic Resume Builder</p>
            <Image src="/milestone3.png" width={200} height={200} alt="Dynamic Resume Builder Picture" className={styles.projectImage} />
            <Link href="https://milestone-3-4-5-zeta.vercel.app/" target="_blank">
              <p className={styles.projectLink}>Click Here to Check</p>
            </Link>
          </div>

          <div  className={styles.projectCard}>
            <p className={styles.projectTitle}>Static Resume</p>
            <Image src="/mailstone-1.png" width={200} height={200} alt="Static resume picture" className={styles.projectImage} />
            <Link href="https://milestone-1-2-v8mv.vercel.app/" target="_blank">
              <p className={styles.projectLink}>Click Here to Check</p>
            </Link>
          </div>

          <div  className={styles.projectCard}>
            <p className={styles.projectTitle}>Birthday Wish Card</p>
            <Image src="/birthday-wish.png" width={200} height={200} alt="birthday wish project picture" className={styles.projectImage} />
            <Link href="https://birthday-wish-tawny.vercel.app/" target="_blank">
              <p className={styles.projectLink}>Click Here to Check</p>
            </Link>
          </div>

          <div  className={styles.projectCard}>
            <p className={styles.projectTitle}>Figma Project</p>
            <Image src="/figma-1.png" width={300} height={200} alt="Figma project picture" className={styles.projectImage} />
            <Link href="https://figma-assignment-zeta.vercel.app/" target="_blank">
              <p className={styles.projectLink}>Click Here to Check</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
