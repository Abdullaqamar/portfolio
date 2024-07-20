// import styles from './HeroStyles.module.css';


// import linkedinLight from '../../assets/linkedin-light.svg';

// function Hero() {

//   return (
//     <section id="hero" className={styles.container}>

//       <div className={styles.info}>
//         <h1>
//           Abdullah
//           <br />
//           Qamar
//         </h1>
//         <h2>Mechanical Engineer</h2>
//         <p className={styles.description}>
//           With a passion for Robotics and AI.
//         </p>
//         <span>
//           <a href="https://www.linkedin.com/in/abdullah-qamar-748b41250/" target="_blank">
//             <img src={linkedinLight} alt="Linkedin icon" />
//           </a>
//         </span>


//       </div>
//     </section>
//   );
// }

// export default Hero;

import { useState } from 'react';
import styles from './HeroStyles.module.css';
import linkedinLight from '../../assets/linkedin-light.svg';
import ContactForm from '../Contact/Contact';

function Hero() {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.info}>
        <h1>
          Abdullah
          <br />
          Qamar
        </h1>
        <h2>Mechanical Engineer</h2>
        <p className={styles.description}>
          With a passion for Robotics and AI.
        </p>
        <span>
          <a href="https://www.linkedin.com/in/abdullah-qamar-748b41250/" target="_blank">
            <img src={linkedinLight} alt="Linkedin icon" />
          </a>
        </span>
        <button className={styles.contactButton} onClick={handleButtonClick}>
          Contact Me!
        </button>
      </div>
      {showForm && (
        <div className={styles.overlay}>
          <ContactForm onClose={handleCloseForm} />
        </div>
      )}
    </section>
  );
}

export default Hero;
