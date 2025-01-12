

import React from 'react';
import styles from '../Sections/projects/ProjectsStyles.module.css';

function ProjectCard({ src, h3, p, onButtonClick }) {
  return (
    <div className={styles.projectText} onClick={onButtonClick}>
      <h3>{h3}</h3>
      <button className={styles.projectButton}>
       
      </button>
    </div>
  );
}

export default ProjectCard;