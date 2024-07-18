// import styles from './ProjectsStyles.module.css';
// import viberr from '../../assets/viberr.png';
// import freshBurger from '../../assets/fresh-burger.png';
// import hipsster from '../../assets/hipsster.png';
// import fitLift from '../../assets/fitlift.png';
// import ProjectCard from '../../common/ProjectCard';

// function Projects() {
//   return (
//     <section id="projects" className={styles.container}>
//       <h1 className="sectionTitle">Projects</h1>
//       <div className={styles.projectsContainer}>
//         <ProjectCard
//           src={viberr}
//           link="https://github.com/Ade-mir/company-landing-page-2"
//           h3="Viberr"
//           p="Streaming App"
//         />
        // <ProjectCard
        //   src={freshBurger}
        //   link="https://github.com/Ade-mir/company-landing-page-2"
        //   h3="Fresh Burger"
        //   p="Hamburger Restaurant"
        // />
        // <ProjectCard
        //   src={hipsster}
        //   link="https://github.com/Ade-mir/company-landing-page-2"
        //   h3="Hipsster"
        //   p="Glasses Shop"
        // />
        // <ProjectCard
        //   src={fitLift}
        //   link="https://github.com/Ade-mir/company-landing-page-2"
        //   h3="FitLift"
        //   p="Fitness App"
//         />

    

//       </div>
//     </section>
//   );
// }

// export default Projects;
import React, { useState } from 'react';
import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleOpenModal = (content) => {
    setModalContent(content);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setModalContent(null);
  };

  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          h3="Viberr &nbsp;&nbsp;&nbsp;2024"
          p="Streaming App"
          onButtonClick={() => handleOpenModal({ src: viberr, h3: "Viberr", p: "Streaming App" })}
        />
        <ProjectCard
          src={freshBurger}
          h3="Fresh Burger&nbsp;&nbsp;&nbsp;2023"
          p="Hamburger Restaurant"
          onButtonClick={() => handleOpenModal({ src: freshBurger, h3: "Fresh Burger", p: "Hamburger Restaurant" })}
        />
        <ProjectCard
          src={hipsster}
          h3="Hipsster&nbsp;&nbsp;&nbsp;2023"
          p="Glasses Shop"
          onButtonClick={() => handleOpenModal({ src: hipsster, h3: "Hipsster", p: "Glasses Shop" })}
        />
        <ProjectCard
          src={fitLift}
          h3="FitLift&nbsp;&nbsp;&nbsp;2022"
          p="Fitness App"
          onButtonClick={() => handleOpenModal({ src: fitLift, h3: "FitLift", p: "Fitness App" })}
        />
      </div>
      {isModalOpen && (
        <>
          <div className={styles.overlay} onClick={handleCloseModal}></div>
          <div className={styles.modal}>
            <img src={modalContent.src} alt={`${modalContent.h3} logo`} />
            <h3>{modalContent.h3}</h3>
            <p>{modalContent.p}</p>
            <button className={styles.closeButton} onClick={handleCloseModal}>X</button>
          </div>
        </>
      )}
    </section>
  );
}

export default Projects;
