
import React, { useState } from 'react';
import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import computerVision from '../../assets/computer vision1.png';
import arduinoLCD from '../../assets/Arduino+LCD.jpeg';
import pythonGame from '../../assets/ezgif-3-5f84d827be.mp4'; // New video import
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
          src={computerVision}
          h3="OpenMV Cam computer vision"
          p="Developed a computer vision algorithm for the OpenMV camera with Edge Impulse to track and identify kinds of plastics on the RVM conveyor."
          onButtonClick={() => handleOpenModal({ src: computerVision, h3: "OpenMV Cam computer vision", p: "Developed a computer vision algorithm for the OpenMV camera with Edge Impulse to track and identify kinds of plastics on the RVM conveyor." })}
        />
        <ProjectCard
          src={arduinoLCD}
          h3="Arduino+LCD 1.28″"
          p="• - Developed and implemented software for an Arduino and Raspberry Pi Zero to process sensor data and display plastic type information on a 2.8-inch LCD, integrated into a handheld sensor gun."
          onButtonClick={() => handleOpenModal({ src: arduinoLCD, h3: "Arduino+LCD 1.28″", p: "• - Developed and implemented software for an Arduino and Raspberry Pi Zero to process sensor data and display plastic type information on a 2.8-inch LCD, integrated into a handheld sensor gun." })}
        />
        <ProjectCard
          src={pythonGame} // New ProjectCard
          h3="2D Python game"
          p="• Developed 'Box Bash,' a 2D game using the Pygame library, where players control a character to avoid colliding."
          onButtonClick={() => handleOpenModal({ src: pythonGame, h3: "2D Python game", p: "• Developed 'Box Bash,' a 2D game using the Pygame library, where players control a character to avoid colliding." })}
        />
      </div>
      {isModalOpen && (
        <>
          <div className={styles.overlay} onClick={handleCloseModal}></div>
          <div className={styles.modal}>
            {modalContent.src.endsWith('.mp4') ? (
              <video controls width="100%">
                <source src={modalContent.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img src={modalContent.src} alt={`${modalContent.h3} logo`} />
            )}
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
