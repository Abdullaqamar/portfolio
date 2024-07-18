// import React from 'react';

// function ProjectCard({ src, link, h3, p }) {
//   return (
//     <a href={link} target="_blank">
//       <img className="hover" src={src} alt={`${h3} logo`} />
//       <h3>{h3}</h3>
//       <p>{p}</p>
//     </a>
//   );
// }

// export default ProjectCard;

import React from 'react';
import styles from '../Sections/projects/ProjectsStyles.module.css';

function ProjectCard({ src, h3, p, onButtonClick }) {
  return (
    <div className={styles.projectText}>
      <h3>{h3}</h3>
      <button className={styles.projectButton} onClick={onButtonClick}>
       
      </button>
    </div>
  );
}

export default ProjectCard;
