import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image';

const Footer = () => {

  return (
    <div className={styles.container}>
      <div>Copyright &copy; 2023 Chikaodiri. All Rights Reserved</div>
      <div className={styles.social}>
        <Image src="/1.png" width={20} height={20} className={styles.icon} alt="Chikatech Dev" />
        <Image src="/2.png" width={20} height={20} className={styles.icon} alt="Chikatech Dev" />
        <Image src="/3.png" width={20} height={20} className={styles.icon} alt="Chikatech Dev" />
        <Image src="/4.png" width={20} height={20} className={styles.icon} alt="Chikatech Dev" />
      </div>
    </div>
  );
};

export default Footer;