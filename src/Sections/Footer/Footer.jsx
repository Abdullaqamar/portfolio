import styles from './FooterStyles.module.css';

function Footer() {
  return (
    <section id="Footer" className={styles.container}>
      <p>
        &copy; 2024 Abdullah Qamar. <br />
        All rights reserved. <br />
        This website was built using React and CSS.
      </p>
    </section>
  );
}

export default Footer;
