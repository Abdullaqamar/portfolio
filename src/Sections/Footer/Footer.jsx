import React from 'react';
import styles from './FooterStyles.module.css';

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>&copy; 2024 Abdullah Qamar. <br />
      All rights reserved. <br />
      <span className={styles.reactNote}>This website was built using ReactJS.</span>
      </p>
    </section>
  );
}

export default Footer;
